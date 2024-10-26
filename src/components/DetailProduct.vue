<template>
  <div class="bg-white rounded-xl w-full max-w-2xl mx-4">
    <div class="px-5 py-3 border-b flex justify-between items-center">
      <p class="font-bold text-lg">{{ productSelected?.title }}</p>
      <mdicon
        name="close"
        class="text-red-500 cursor-pointer"
        @click="$emit('close')"
      />
    </div>
    <div class="p-5 flex flex-col md:flex-row items-center gap-5">
      <img
        :src="productSelected?.img"
        alt=""
        width="300"
        height="350"
        class="rounded-lg"
      />
      <div class="w-full relative">
        <div class="text-gray-500 flex flex-col gap-1 border-b w-full pb-10">
          <div class="flex gap-2 items-center">
            <mdicon name="map-marker" class="text-red-400" />
            <p class="font-semibold">{{ productSelected?.store }}</p>
          </div>
          <div class="flex gap-2 items-center">
            <mdicon name="cash-multiple" class="text-red-400" />
            <p class="font-semibold">${{ productSelected?.price }}</p>
          </div>
          <div class="flex gap-2 items-center">
            <mdicon name="star" class="text-yellow-400" />
            <p class="font-semibold">{{ productSelected?.rating }}</p>
          </div>
          <div class="flex gap-2 items-center">
            <p class="font-semibold">Description :</p>
          </div>
        </div>
        <div class="grid grid-cols-2">
          <div>
            <p class="font-semibold my-2">Add Qty:</p>
            <div
              class="rounded border border-red-400 w-max flex items-center p-1"
            >
              <button @click="decrement">
                <mdicon name="minus" />
              </button>
              <p class="px-3 text-red-400 font-semibold">{{ qty }}</p>
              <button @click="increment">
                <mdicon name="Plus" />
              </button>
            </div>
          </div>
          <div class="mb-3">
            <p class="font-semibold my-2">Subtotal:</p>
            <p class="font-semibold text-gray-500 my-2">
              ${{ qty * productSelected.price }}
            </p>
          </div>
        </div>
        <button
          class="bg-red-400 text-white p-2 rounded-lg w-full bottom-0 font-semibold hover:shadow-lg mt-5 flex justify-center gap-1"
          @click="handleAddQty"
        >
          Add To Cart <mdicon name="cart-outline" aria="12" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Swal from "sweetalert2";
const props = defineProps({
  productSelected: {
    type: Object,
    default: null,
  },
});

const emit = defineEmits(["addQty", 'close']);

const qty = ref(0);

const increment = () => {
  qty.value++;
};
const decrement = () => {
  if (qty.value > 0) {
    qty.value--;
  }
};

const handleAddQty = () => {
  if (qty.value) {
    let productQty = {
      ...props.productSelected,
      qty: qty.value,
      subtotal: qty.value * props.productSelected.price,
    };
    emit("addQty", productQty);
  } else {
      Swal.fire({
        title: "Error!",
        text: "Please Add Qty!",
        icon: "error",
      });
  }
};
</script>

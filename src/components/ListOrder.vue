<template>
  <div class="w-full max-w-sm bg-white py-8 px-6 h-[80vh] rounded-xl md:rounded-none md:h-screen relative">
    <div class="grid grid-cols-2 border-b pb-8">
      <div class="flex gap-1">
        <mdicon name="account" class="text-red-400" />
        <p class="font-medium">Yulia K</p>
      </div>
      <div class="flex gap-1">
        <mdicon name="mapMarker" class="text-red-400" />
        <p class="font-medium">Jl. Sukamulya West Java</p>
      </div>
    </div>
    <div class="py-5">
      <p class="font-bold text-xl mb-5">My Order</p>
      <template v-if="listOrder.length">
        <div
          class="w-full grid grid-cols-7 items-center mb-3"
          v-for="(item, index) in listOrder"
          :key="index"
        >
          <div class="w-12 h-12 rounded-lg bg-slate-500 mr-2 overflow-hidden">
            <img :src="item.img" alt="" />
          </div>
          <p class="pl-2">x{{ item.qty }}</p>
          <p class="col-span-4 font-normal">{{ item.title }}</p>
          <p class="font-bold text-lg flex items-center justify-between">
            ${{ item.subtotal }}
            <span
              ><mdicon
                name="close"
                size="18"
                class="cursor-pointer"
                @click="$emit('delete', item)"
            /></span>
          </p>
        </div>
        <div>
          <div class="flex justify-between border-b pb-5 mb-5">
            <p class="font">Delivery</p>
            <p class="font-semibold text-lg">$0</p>
          </div>
          <div class="flex justify-between">
            <p class="font">Persons:</p>
            <p class="font-semibold text-lg">Total: ${{ countTotal }}</p>
          </div>
        </div>
        <div class="absolute bottom-10 px-5 right-0 w-full">
          <button
            class="p-3 rounded-xl bg-red-400 text-white font-semibold hover:shadow w-full"
            @click="handleSubmit"
          >
            Submit Order
          </button>
        </div>
      </template>
      <template v-else>
        <p>no products ordered!</p>
      </template>
    </div>
  </div>
</template>
<script setup>
import { computed } from "vue";
import Swal from "sweetalert2";

const props = defineProps({
  listOrder: {
    type: Array,
    default: [],
  },
});

const emit = defineEmits(["submit"]);

const countTotal = computed(() => {
  let count = 0;
  props.listOrder.map((el) => {
    count += el.subtotal;
  });
  return count;
});

const handleSubmit = () => {
  emit("submit");
  Swal.fire({
    title: "Success Order!",
    text: "Success Order Your Foods!",
    icon: "success",
  });
};
</script>

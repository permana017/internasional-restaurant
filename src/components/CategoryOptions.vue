<template>
  <div class="sticky -top-1 py-2 md:py-5 bg-slate-100">
    <p class="md:text-2xl font-bold">Restaurants</p>
    <p class="text-sm md:text-base font-medium text-gray-500">
      Select Category you'd like to eat from
    </p>
    <div
      class="flex gap-2 mt-4 overflow-scroll pb-3 px-2 md:overflow-hidden md:p-0"
    >
      <BtnPrimary
        v-for="(item, i) in categoryOptions"
        :key="i"
        :active="categorySelected == item.value"
        @click="
          (categorySelected = item.value), $emit('clickCategory', item.value)
        "
      >
        <div
          class="px-2 flex gap-2 items-center text-sm md:text-base text-nowrap"
        >
          <mdicon :name="item.icon" />
          {{ item.label }}
        </div>
      </BtnPrimary>
    </div>
    <div class="pt-2 flex">
      <p class="text-gray-500 font-semibold">Sort by :</p>
      <div>
        <!-- <label for="selec"></label> -->
        <select
          name="sorting"
          id="sorting"
          class="bg-slate-100 font-semibold outline-none"
          v-model="selectedSort"
          @change="($event) => $emit('onSort', $event.target.value)"
        >
          <option value="" disabled>-Sort Food-</option>
          <option
            v-for="(item, index) in sortingOpt"
            :key="index"
            :value="item.value"
          >
            {{ item.label }}
          </option>
        </select>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import BtnPrimary from "./BtnPrimary.vue";

const selectedSort = ref('')

const categoryOptions = [
  {
    label: "Surprice me!",
    icon: "cube-outline",
    value: "surprice",
  },
  {
    label: "Dessert",
    icon: "cupcake",
    value: "dessert",
  },
  {
    label: "Italian Food",
    icon: "pizza",
    value: "italian",
  },
  {
    label: "Fast Food",
    icon: "food",
    value: "fast-food",
  },
  {
    label: "Asian Food",
    icon: "noodles",
    value: "asian",
  },
  {
    label: "Barbecue",
    icon: "grill-outline",
    value: "barbecue",
  },
];

const sortingOpt = [
  {
    label: "Feedback",
    value: "feedback",
  },
  {
    label: "Rating",
    value: "rating",
  },
  {
    label: "High Price",
    value: "high-price",
  },
  {
    label: "Low Price",
    value: "low-price",
  },
  {
    label: "Short Distance",
    value: "short-distance",
  },
  {
    label: "Long Distance",
    value: "long-distance",
  },
];

const categorySelected = ref("");
</script>

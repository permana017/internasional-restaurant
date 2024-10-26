<template>
  <div class="cursor-pointer" >
    <div class="bg-white rounded-3xl overflow-hidden  shadow-lg mb-2">
      <div class="p-3 px-4 flex justify-between">
        <p class="font-semibold text-sm">{{ distance }} km away</p>
        <p class="font-semibold text-sm">{{ time }} min</p>
      </div>
      <div class=" bg-slate-300 overflow-hidden">
        <img :src="img" alt="image" class="object-contain hover:scale-110 transition-all duration-200">
      </div>
    </div>
    <div class="flex justify-between gap-2">
      <p class="text-sm md:text-lg font-semibold">{{ title }}</p>
      <p class="text-sm md:text-lg font-bold">${{ price }}</p>
    </div>
    <div class="flex flex-col md:flex-row justify-between text-gray-500">
      <p class="text-sm md:text-base font-semibold">{{ store }}</p>
      <div class="flex">
        <p class=" font-semibold md:font-bold text-nowrap flex items-center">
          <span>{{ rating }}</span>
          <span class="text-yellow-400"><mdicon name="star" size="18" /></span>
          <span class="text-xs md:text-sm">({{ review }} Reviews)</span>
        </p>
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  time: {
    type: String,
    default: "",
  },
  distance: {
    type: [String, Number],
    default: "",
  },
  store: {
    type: String,
    default: "",
  },
  review: {
    type:[String, Number],
    default: "",
  },
  rating: {
    type: [String, Number],
    default: "",
  },
  price: {
    type: [String, Number],
    default: "",
  },
  img: {
    type: String,
    default: "",
  },
});
</script>

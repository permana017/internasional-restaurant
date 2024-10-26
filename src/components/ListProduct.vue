<template>
  <div class="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-10 pb-44 md:pb-28">
    <template v-if="listProducts.length">
      <div
        v-for="(item, index) in listProducts"
        :key="index"
        @click="$emit('clickProduct', item)"
      >
        <CardProduct
          :title="item.title"
          :distance="item.distance"
          :time="item.time"
          :rating="item.rating"
          :img="item.img"
          :store="item.store"
          :price="item.price"
          :review="item.review"
        />
      </div>
    </template>
    <template v-else>
      <p class="text-gray-500 text-center">No Product Here!</p>
    </template>
  </div>
</template>
<script setup>
import CardProduct from "./CardProduct.vue";

const props = defineProps({
  listProducts: {
    default: [],
    type: Array,
  },
});
</script>

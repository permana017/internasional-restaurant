<template>
  <button
    class="rounded-full p-1 md:p-3 font-medium shadow hover:bg-red-400 hover:text-white transition-all duration-200"
    :class="{
      'bg-red-400 text-white': active,
      'text-gray-400 bg-white': !active,
    }"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>
<script setup>
const props = defineProps({
  active: Boolean,
});
</script>

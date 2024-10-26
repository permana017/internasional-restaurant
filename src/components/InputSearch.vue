<template>
  <div class="w-full max-w-md relative text-gray-500">
    <div class="absolute top-3 left-3">
      <mdicon name="magnify" />
    </div>
    <input
      type="text"
      class="rounded-full p-3 outline-none focus:ring-1 w-full pl-10 shadow"
      placeholder="search product name..."
      @input="handleInput"
    />
  </div>
</template>
<script setup>
const props = defineProps({
  modelValue: "",
});
const emit = defineEmits(["update:modelValue", "input"]);

const handleInput = ($event) => {
  emit("update:modelValue", $event.target.value);
  emit("input", $event.target.value);
};
</script>

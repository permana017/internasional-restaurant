<template>
  <div class="w-screen h-[100dvh] bg-slate-100 flex overflow-hidden relative">
    <Sidebar />
    <div style="h" class="w-full overflow-hidden md:pl-[68px]">
      <slot />
    </div>
  </div>
</template>
<script setup>
import Sidebar from "./Sidebar.vue";
</script>

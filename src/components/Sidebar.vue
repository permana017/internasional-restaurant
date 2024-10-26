<template>
  <div class="md:h-screen absolute w-full md:w-max bottom-0">
    <div
      class="rounded-t-2xl md:rounded-2xl bg-red-400 h-full text-white flex md:flex-col justify-center md:justify-start items-center p-3 md:py-16 gap-5 md:gap-10 w-full"
    >
      <div
        class="p-2 rounded-full hover:bg-slate-50/30 hover:scale-110 transition-all duration-200 cursor-pointer"
        :class="{'bg-slate-50/30 scale-110':item?.active}"
        v-for="(item, index) in menus"
        :key="index"
      >
        <mdicon :name="item.icon" size="28" />
      </div>
    </div>
  </div>
</template>
<script setup>
const menus = [
  {
    icon: "home",
    label: "Home",
  },
  {
    icon: "pizza",
    label: "products",
    active:true
  },
  {
    icon: "calendar",
    label: "date",
  },
  {
    icon: "creditCardOutline",
    label: "payment",
  },
  {
    icon: "heart",
    label: "heart",
  },
];
</script>

<template>
  <MainLayout>
    <div class="flex w-full">
      <div class="w-full py-8 flex flex-col">
        <div class="flex gap-3 px-4 md:px-10 mb-3 items-center">
          <InputSearch @input="onSearchProduct" />
          <BtnPrimary class="hidden md:flex">
            <div class="px-2 flex gap-2">
              <mdicon name="tune" />
              Filter
            </div>
          </BtnPrimary>
          <button class="md:hidden relative" @click="dialog.order = true">
            <mdicon name="cart-outline" />
            <mdicon
              v-if="listOrder.length"
              class="absolute text-red-400 -top-1 -right-1"
              size="10"
              name="circle"
            />
          </button>
        </div>
        <div class="h-screen overflow-y-auto flex flex-col">
          <div class="px-4 md:px-10">
            <CardHeader class="mt-3" />
          </div>
          <CategoryOptions
            class="px-4 md:px-10"
            @clickCategory="onClickCategory"
            @onSort="handleSorting"
          />
          <ListProduct
            :listProducts="listProducts"
            @clickProduct="handleClickProduct"
            class="px-4 md:px-10"
          />
        </div>
      </div>
      <ListOrder
        :listOrder="listOrder"
        @delete="handleDeleteOrder"
        @submit="(listOrder = []), (dialog.order = false)"
      />
    </div>
    <BaseDialog :dialog="dialog.detail" @close="handleCloseDialog">
      <DetailProduct
        :productSelected="productSelected"
        @close="handleCloseDialog"
        @addQty="handleAddQty"
      />
    </BaseDialog>
    <BaseDialog :dialog="dialog.order" @close="dialog.order = false">
      <ListOrder
        :listOrder="listOrder"
        @delete="handleDeleteOrder"
        @submit="(listOrder = []), (dialog.order = false)"
      />
    </BaseDialog>
  </MainLayout>
</template>
<script setup>
import { reactive, ref } from "vue";
import BtnPrimary from "../components/BtnPrimary.vue";
import CardHeader from "../components/CardHeader.vue";
import InputSearch from "../components/InputSearch.vue";
import ListOrder from "../components/ListOrder.vue";
import MainLayout from "../components/MainLayout.vue";
import CategoryOptions from "../components/CategoryOptions.vue";
import ListProduct from "../components/ListProduct.vue";
import { products } from "../data";
import BaseDialog from "../components/BaseDialog.vue";
import DetailProduct from "../components/DetailProduct.vue";

const listProducts = ref(products);
const productSelected = ref({});
const listOrder = ref([]);
const dialog = reactive({
  detail: false,
  order: false,
});

const handleCloseDialog = () => {
  dialog.detail = false;
};
const handleClickProduct = (value) => {
  productSelected.value = value;
  dialog.detail = true;
};

const onClickCategory = (cat) => {
  if (cat != "surprice") {
    const dataFiltered = products.filter((el) => el.category == cat);
    listProducts.value = dataFiltered;
  } else {
    listProducts.value = products;
  }
};
const onSearchProduct = (search) => {
  const dataFiltered = products.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );
  listProducts.value = dataFiltered;
};

const handleAddQty = (item) => {
  const isExist = listOrder.value.findIndex((el) => el.id == item.id);
  console.log(isExist);

  if (isExist < 0) {
    listOrder.value.push(item);
  } else {
    listOrder.value.forEach((el, i) => {
      if (i == isExist) {
        el.qty = el.qty + item.qty;
        el.subtotal = el.subtotal + item.subtotal;
      }
    });
  }
  dialog.detail = false;
};

const handleDeleteOrder = (item) => {
  listOrder.value = listOrder.value.filter((el) => el.id != item.id);
};

const handleSorting = (sort) => {
  if (sort == "feedback") {
    listProducts.value = listProducts.value.sort((a, b) => b.review - a.review);
  } else if (sort == "high-price") {
    listProducts.value = listProducts.value.sort((a, b) => b.price - a.price);
  } else if (sort == "low-price") {
    listProducts.value = listProducts.value.sort((a, b) => a.price - b.price);
  } else if (sort == "long-distance") {
    listProducts.value = listProducts.value.sort((a, b) => b.distance - a.distance);
  }else if (sort == "short-distance") {
    listProducts.value = listProducts.value.sort((a, b) => a.distance - b.distance);
  }else if (sort == "rating") {
    listProducts.value = listProducts.value.sort((a, b) => b.rating - a.rating);
  }
};
</script>

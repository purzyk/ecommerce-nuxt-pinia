<template>
  <ProductList :products="productStore.products" v-if="productStore.products" />
</template>
<script setup>
import { useProductStore } from '@/stores/ProductStore';
const productStore = useProductStore()
</script>
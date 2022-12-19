<template>
  <header class="wrapper flex justify-between">
    <NuxtLink to="/">
      <h1 class="text-secondary text-5xl">Przyjazna Store</h1>
    </NuxtLink>
    <NuxtLink to="/products">
      <h1 class="text-secondary text-5xl">Products</h1>
    </NuxtLink>
    <NuxtLink to="/cart">
      <span class="material-icons-outlined text-secondary text-5xl">
        shopping_bag
      </span>
      <p>{{ cartStore.numberOfProducts }}</p>
    </NuxtLink>
  </header>
</template>

<script setup>
import { useCartStore } from '@/stores/CartStore';
const cartStore = useCartStore()

</script>

<style>

</style>
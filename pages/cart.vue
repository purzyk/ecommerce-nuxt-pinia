<template>
  <div>
    <h2 class="text-2xl text-center my-8">Your Basket</h2>
    <div class="card text-xl" v-if="cartStore.cart.length">

      <!-- Product list-->
      <div v-for="product in cartStore.cart" :key="product">
        <p>{{ product.title }}</p>

        <button class="ml-auto">
          <span class="material-icons-outlined" @click="cartStore.deleteFromCart(product)">delete</span>
        </button>
      </div>
    </div>
    <div v-else>
      no items in basket
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '@/stores/CartStore'
const cartStore = useCartStore()
</script>

<style scoped>

</style>
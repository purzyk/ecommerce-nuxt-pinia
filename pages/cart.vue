<template>
  <section>
    <div class="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
      <div class="max-w-3xl mx-auto">
        <header class="text-center">
          <h1 class="text-xl font-bold text-gray-900 sm:text-3xl">Your Cart</h1>
        </header>

        <!--Cart - products-->

        <div class="mt-8">
          <div v-if="cartStore.cart.length > 0">
            <ul class="space-y-4" v-for="product in cartStore.cart" :key="product">
              <li class="flex items-center">
                <img :src="product.thumbnail" class="object-cover w-16 h-16 rounded" loading="lazy" />
                <div>
                  <label for="Quantity" class="sr-only"> Quantity </label>
                  <div class="flex items-center gap-1">
                    <button type="button" class="w-10 h-10 leading-10 text-gray-600 transition hover:opacity-75"
                      @click="cartStore.decQuantity(product)">
                      &minus;
                    </button>
                    {{ product.quantity }}
                    <button type="button" class="w-10 h-10 leading-10 text-gray-600 transition hover:opacity-75"
                      @click="cartStore.incQuantity(product)">
                      &plus;
                    </button>
                  </div>
                </div>
                <div class="ml-4">
                  <h3 class="text-sm text-gray-900" v-html="product.title"></h3>
                </div>
                <div class="ml-4">
                  <h3 class="text-sm text-gray-900">${{ product.price }}</h3>
                </div>
                <div class="flex items-center justify-end flex-1 gap-2">
                  <button class="text-gray-600 transition hover:text-red-600"
                    @click="cartStore.deleteFromCart(product)">
                    <span class="material-symbols-outlined">
                      delete
                    </span>
                  </button>
                </div>
              </li>
            </ul>
          </div>
          <div v-else>
            Your cart id empty
          </div>
          <div class="flex justify-end pt-8 mt-8 border-t border-gray-100" v-if="cartStore.cart.length > 0">
            <div class="w-screen max-w-lg space-y-4">
              <dl class="space-y-0.5 text-sm text-gray-700">
                <div class="flex justify-between !text-base font-medium">
                  <dt>Total</dt>
                  <dd>${{ cartStore.cartTotal }}</dd>
                </div>
              </dl>
              <div class="flex justify-end">
                <NuxtLink to="/checkout">
                  <a class="block px-5 py-3 text-sm text-gray-100 transition bg-gray-700 rounded hover:bg-gray-600">
                    Checkout
                  </a>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useCartStore } from '@/stores/CartStore'

const cartStore = useCartStore()



</script>

<style scoped>

</style>
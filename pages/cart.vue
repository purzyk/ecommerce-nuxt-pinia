<template>
  <div>


    <section>
      <div class="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
        <div class="max-w-3xl mx-auto">
          <header class="text-center">
            <h1 class="text-xl font-bold text-gray-900 sm:text-3xl">Your Cart</h1>
          </header>

          <div class="mt-8">
            <div v-if="cartStore.cart.length > 0">
              <ul class="space-y-4" v-for="product in cartStore.cart" :key="product">
                <!-- Item-->
                <li class="flex items-center">
                  <img :src="product.thumbnail" class="object-cover w-16 h-16 rounded" loading="lazy" />

                  <div>
                    <label for="Quantity" class="sr-only"> Quantity </label>

                    <div class="flex items-center gap-1">
                      <button type="button" class="w-10 h-10 leading-10 text-gray-600 transition hover:opacity-75">
                        &minus;
                      </button>

                      <input type="number" id="Quantity" value="1"
                        class="h-10 w-16 rounded border-gray-200 text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none" />

                      <button type="button" class="w-10 h-10 leading-10 text-gray-600 transition hover:opacity-75">
                        &plus;
                      </button>
                    </div>
                  </div>
                  <div class="ml-4">
                    <h3 class="text-sm text-gray-900" v-html="product.title"></h3>

                  </div>

                  <div class="flex items-center justify-end flex-1 gap-2">


                    <button class="text-gray-600 transition hover:text-red-600"
                      @click="cartStore.deleteFromCart(product)">
                      <span class="sr-only">Remove item</span>

                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-4 h-4">
                        <path stroke-linecap="round" stroke-linejoin="round"
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                      </svg>
                    </button>
                  </div>
                </li>
                <!-- Item end-->

              </ul>
            </div>
            <div v-else>
              Your card id empty
            </div>

            <div class="flex justify-end pt-8 mt-8 border-t border-gray-100" v-if="cartStore.cart.length > 0">
              <div class="w-screen max-w-lg space-y-4">
                <dl class="space-y-0.5 text-sm text-gray-700">


                  <div class="flex justify-between !text-base font-medium">
                    <dt>Total</dt>
                    <dd>£200</dd>
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

  </div>
</template>

<script setup>
import { useCartStore } from '@/stores/CartStore'

const cartStore = useCartStore()



</script>

<style scoped>

</style>
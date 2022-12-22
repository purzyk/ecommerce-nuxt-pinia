<template>
  <header aria-label="Site Header" class="border-b border-gray-100">
    <div class="font-sans antialiased" id="app">
      <nav class="flex items-center justify-between flex-wrap bg-teal p-6">
        <div class="flex items-center flex-no-shrink mr-6">
          <NuxtLink to="/">
            <SVGLogo />
          </NuxtLink>

        </div>
        <div class="block sm:hidden">
          <button @click="toggle"
            class="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light">
            <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div :class="open ? 'block' : 'hidden'" class="w-full flex-grow sm:flex sm:items-center sm:w-auto">
          <div class="text-sm sm:flex-grow">
            <div class="no-underline block mt-4 sm:inline-block sm:mt-0 text-teal-lighter  mr-4  hover:border-red-700">
              <NuxtLink to="/">

                Home

              </NuxtLink>
            </div>
            <p class="no-underline block mt-4 sm:inline-block sm:mt-0 text-teal-lighter  mr-4">
              <NuxtLink to="/products">
                Products
              </NuxtLink>
            </p>

          </div>
          <div>
            <span>
              <NuxtLink to="/cart">
                <div class="relative block border-b-4 border-transparent p-6 hover:border-red-700">
                  <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>

                  <p v-if="cartStore.numberOfProducts"
                    class="absolute bg-red-700 w-6 h-6 flex justify-center items-center rounded-full text-white text-xs top-0 right-0">
                    {{ cartStore.numberOfProducts }}</p>
                </div>
              </NuxtLink>
            </span>
          </div>
        </div>

      </nav>

    </div>

  </header>

</template>

<script setup>
import { ref } from 'vue';
import { useCartStore } from '@/stores/CartStore';
const cartStore = useCartStore()
const open = ref(false)
function toggle() {
  open.value = !open.value;
}
</script>

<style>

</style>
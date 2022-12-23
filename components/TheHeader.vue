<template>
  <header aria-label="Site Header" class="border-b border-gray-100">
    <div class="font-sans antialiased relative" id="app">
      <nav class="flex items-center justify-between flex-wrap bg-teal pb-6 mainNav">
        <div class="flex items-center flex-no-shrink mr-6">
          <!--Header logo-->

          <NuxtLink to="/">
            <SVGLogo />
          </NuxtLink>

        </div>

        <!--Hamburger button-->

        <div class="block sm:hidden right-10 relative">
          <button @click="toggle"
            class="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light">
            <span class="material-symbols-outlined text-2xl" v-if="!open">
              menu
            </span>
            <span class="material-symbols-outlined text-2xl" v-if="open">
              close
            </span>
          </button>
        </div>

        <!--Main nav-->

        <div :class="open ? 'block' : 'hidden'" class="w-full flex-grow sm:flex sm:items-center sm:w-auto">
          <div class="text-sm sm:flex-grow">
            <div v-for="link in data.links" :key="link"
              class="no-underline block mt-4 sm:inline-block sm:mt-0 text-teal-lighter  mr-4  hover:text-primary hover:font-bold">
              <NuxtLink :to="link.link" @click="open = false">
                <span class="mainNav__span">
                  {{ link.name }}
                </span>
              </NuxtLink>
            </div>

          </div>

        </div>

        <!--Cart icon-->


        <div class="cart absolute top-[-16px] right-[-30px] md:relative md:top-0 md:right-0">
          <span>
            <NuxtLink to="/cart">
              <div class="relative block border-b-4 border-transparent p-6">
                <span class="material-symbols-outlined text-2xl">
                  {{ shopping_cart }}
                </span>
                <p v-if="cartStore.numberOfProducts"
                  class="absolute bg-red-700 w-6 h-6 flex justify-center items-center rounded-full text-white text-xs top-0 right-0">
                  {{ cartStore.numberOfProducts }}</p>
              </div>
            </NuxtLink>
          </span>
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
const shopping_cart = ref('shopping_cart');
const data = ref({
  links: [
    { name: 'Home', link: '/' },
    { name: 'Products', link: '/products' },
    { name: 'Terms & conditions', link: '/terms' }
  ],
})
function toggle() {
  open.value = !open.value;
}
</script>

<style>
.mainNav .router-link-active .mainNav__span {
  color: #10b981;
  font-weight: 700;
}
</style>
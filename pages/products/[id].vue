<template>
  <section>
    <div class="relative max-w-screen-xl px-4 py-8 mx-auto">
      <div class="grid items-start grid-cols-1 gap-8 md:grid-cols-2">

        <!--Product featured image-->

        <div class="grid grid-cols-2 gap-4 md:grid-cols-1">
          <img alt="" :src="productDetail.thumbnail" class="object-cover w-full aspect-square rounded-xl" />
          <div class="grid grid-cols-2 gap-4 lg:mt-4">
            <img alt="" v-for="img in productDetail.images" :key="img" :src="img" loading="lazy"
              class="object-cover w-full aspect-square rounded-xl" />
          </div>
        </div>

        <!--Product details-->

        <div class="sticky top-0">
          <strong
            class="rounded-full border border-blue-600 bg-gray-100 px-3 py-0.5 text-xs font-medium tracking-wide text-blue-600">
            {{ productDetail.brand }}
          </strong>
          <div class="flex justify-between mt-8">
            <div class="max-w-[35ch]">
              <h1 class="text-2xl font-bold" v-html="productDetail.title">
              </h1>
              <p class="mt-0.5 text-sm">{{ productDetail.category }}</p>
            </div>
            <p class="text-lg font-bold">${{ productDetail.price }}</p>
          </div>
          <details class="group relative mt-4 [&_summary::-webkit-details-marker]:hidden">
            <summary class="block">
              <div>
                <div class="prose max-w-none">
                  <p v-html="productDetail.description">

                  </p>
                </div>
              </div>
            </summary>
          </details>

          <!--Product add to cart button-->
          <div class="mt-8">
            <div class="flex mt-8">
              <button @click="addProductToCart(prod)" :disabled="isPending"
                class="group relative inline-block overflow-hidden border border-primary px-8 py-3 focus:outline-none focus:ring">
                <div
                  class="absolute inset-y-0 left-0 w-[2px] bg-primary transition-all group-hover:w-full group-active:bg-primary">
                </div>
                <div class="relative text-sm font-medium text-primary transition-colors group-hover:text-white">
                  <span v-show="!isPending">Add to card</span>
                  <span v-show="isPending">Adding...</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script setup>
import { useCartStore } from '@/stores/CartStore';
import { useProductStore } from '@/stores/ProductStore';
const { id } = useRoute().params
const cartStore = useCartStore()
const isPending = ref(false)
const productStore = useProductStore()
const uri = 'https://dummyjson.com/products/' + id
const { data: productDetail } = await useFetch(uri, { key: id })
const prod = productStore.products.filter(character => character.id === parseInt(id))[0];
const addProductToCart = async () => {
  isPending.value = true
  await cartStore.addToCart(prod)
  setTimeout(() => {
    isPending.value = false

  }, 1000)
}

</script>
<style >

</style>
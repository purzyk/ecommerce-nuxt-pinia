<template>
  <div>

    <section>
      <div class="relative max-w-screen-xl px-4 py-8 mx-auto">
        <div class="grid items-start grid-cols-1 gap-8 md:grid-cols-2">
          <div class="grid grid-cols-2 gap-4 md:grid-cols-1">
            <img alt="" :src="productDetail.thumbnail" class="object-cover w-full aspect-square rounded-xl" />

            <div class="grid grid-cols-2 gap-4 lg:mt-4">
              <img alt="" v-for="img in productDetail.images" :key="img" :src="img" loading="lazy"
                class="object-cover w-full aspect-square rounded-xl" />


            </div>
          </div>

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

            <form class="mt-8">
              <div class="flex mt-8">
                <button @click="addToBasket(product)" :disabled="isPending"
                  class="group relative inline-block overflow-hidden border border-indigo-600 px-8 py-3 focus:outline-none focus:ring">
                  <div
                    class="absolute inset-y-0 left-0 w-[2px] bg-indigo-600 transition-all group-hover:w-full group-active:bg-indigo-500">
                  </div>
                  <div class="relative text-sm font-medium text-indigo-600 transition-colors group-hover:text-white">
                    <span v-show="!isPending">Add to card</span>
                    <span v-show="isPending">Adding...</span>
                  </div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

  </div>

</template>


<script setup>
import { useCartStore } from '@/stores/CartStore';
const { id } = useRoute().params
const { product } = defineProps(['product'])
const cartStore = useCartStore()
const isPending = ref(false)
const uri = 'https://dummyjson.com/products/' + id
const { data: productDetail } = await useFetch(uri, { key: id })

const addToBasket = async () => {
  isPending.value = true
  await cartStore.addToCart(product)
  setTimeout(() => {
    isPending.value = false

  }, 1000)
}



</script>

<style >

</style>
<template>
    <div class="pb-12">
        <div class="block overflow-hidden group">
            <NuxtLink :to="`/products/${product.id}`">
                <img :src="product.thumbnail" alt="" loading="lazy"
                    class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]" />

                <div class="relative pt-3 bg-white">
                    <h3 class="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
                        v-html:="product.title">

                    </h3>

                    <p class=" mt-2">
                        <span class="sr-only"> Regular Price </span>

                        <span class="tracking-wider text-gray-900"> ${{ product.price }} </span>
                    </p>
                </div>
            </NuxtLink>


        </div>
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
</template>

<script setup>
import { useCartStore } from '@/stores/CartStore';
const { product } = defineProps(['product'])
const cartStore = useCartStore()
const isPending = ref(false)

const addToBasket = async () => {
    isPending.value = true
    await cartStore.addToCart(product)
    setTimeout(() => {
        isPending.value = false

    }, 1000)
}

</script>

<style scoped>

</style>
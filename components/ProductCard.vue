<template>
    <div class="pb-12">
        <div class="block overflow-hidden group">
            <NuxtLink :to="{ name: 'products-id', params: { id: product.id } }">
                <img :src="product.thumbnail" alt="" loading="lazy"
                    class="h-[250px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[350px]" />
                <div class="relative pt-3 bg-white">
                    <h3 class="text-xl text-gray-700 group-hover:underline group-hover:underline-offset-4"
                        v-html:="product.title">
                    </h3>
                    <p class=" mt-2">
                        <span class="sr-only">Regular Price </span>
                        <span class="tracking-wider text-gray-900"> ${{ product.price }} </span>
                    </p>
                </div>
            </NuxtLink>
        </div>
        <button @click="addProductToCart(product)" :disabled="isPending"
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
</template>

<script setup>
import { useCartStore } from '@/stores/CartStore';
const { product } = defineProps(['product'])
const cartStore = useCartStore()
const isPending = ref(false)


const addProductToCart = async () => {
    isPending.value = true
    await cartStore.addToCart(product)
    setTimeout(() => {
        isPending.value = false

    }, 1000)
}

</script>

<style scoped>

</style>
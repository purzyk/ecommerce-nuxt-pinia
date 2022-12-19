<template>
    <div class="card flex items-center gap-8">

        <div>
            <NuxtLink :to="`/products/${product.node.id}`">
                <h3>{{ product.node.title }}</h3>
                <img :src="product.node.featuredImage.node.sourceUrl" />
                <p>Price: {{ product.node.price }} zł</p>
            </NuxtLink>
            <button @click="addToBasket(product)" :disabled="isPending">
                <span v-show="!isPending">Add to basket</span>
                <span v-show="isPending">Adding...</span>
            </button>
        </div>
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
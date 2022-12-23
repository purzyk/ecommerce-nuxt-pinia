<template>
    <header :class="(data.left) ? 'text-left' : 'text-center'">
        <h2 class="font-bold sm:text-3xl"
            :class="(data.hero) ? 'text-white text-2xl md:text-5xl' : 'text-gray-900 text-xl'">
            {{ data.title }}
        </h2>
        <p
            :class="[(data.hero) ? 'hidden max-w-md text-white/90 md:mt-6 md:block md:text-lg md:leading-relaxed' : 'max-w-md  mt-4 text-gray-500', (data.left) ? '' : 'mx-auto']">
            {{ data.copy }}
        </p>
    </header>
</template>

<script setup>
const { data } = defineProps(['data'])


</script>
<template>
    <section
        class="overflow-hidden bg-[url(https://images.unsplash.com/photo-1602810319428-019690571b5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat">
        <div class="bg-black/25 p-8 md:p-12 lg:px-16 lg:py-24">
            <div class="max-w-lg text-center sm:text-left">
                <TheTitle :data="data.title" />
                <div class="mt-4 sm:mt-8">
                    <NuxtLink to="/products">
                        <p
                            class="inline-flex items-center rounded-full bg-indigo-700 px-8 py-3 text-white shadow-lg transition hover:bg-indigo-600 focus:outline-none focus:ring">
                            <span class="text-sm font-medium"> Order Now </span>
                            <svg class="ml-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </p>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </section>

</template>

<script setup>
import { ref } from 'vue';
const data = ref({
    title: {
        title: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo!',
        copy: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque praesentium cumque iure dicta incidunt est ipsam, officia dolor fugit natus?",
        left: true,
        hero: true
    }
})
</script>
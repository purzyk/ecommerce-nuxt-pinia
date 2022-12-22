<template>
  <div class="m-8">
    <Header />
    <div class="wrapper" v-if="productStore.numberOfProducts > 0">
      <slot />
    </div>
    <div v-else>
      loading
    </div>
    <Footer />
  </div>
</template>
<script setup>
import { useProductStore } from '@/stores/ProductStore';
const productStore = useProductStore()
onMounted(() => {
  productStore.fill();
});
</script>
<style scoped>

</style>
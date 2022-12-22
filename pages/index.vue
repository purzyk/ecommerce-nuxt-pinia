<template>
  <Hero />
  <Collections />
  <Reviews />
</template>

<script>
import Hero from '../components/Home/Hero.vue'
import Collections from '../components/Home/Collections.vue'
import Reviews from '../components/Home/Reviews.vue'
export default {
  components: {
    Hero, Collections, Reviews
  },
}
</script>

<style scoped>

</style>
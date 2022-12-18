<template>
  <div class="grid grid-cols-3">
    <div v-for="product in data.products.edges" :key="product">
      <h3>{{ product.node.title }}</h3>
      <img :src="product.node.featuredImage.node.sourceUrl" />
    </div>
  </div>
</template>
<script setup>
const query = gql`
query NewQuery {
  products (first: 3) {
    edges {
      node {
        id
        title
        featuredImage {
        node {
          sourceUrl
        }
      }
      }
    }
  }
}
`
const variables = { limit: 5 }
const { data } = await useAsyncQuery(query, variables)
</script>
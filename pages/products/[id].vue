<template>
  <p>{{ data.product.title }}</p>
  <img :src="data.product.featuredImage.node.sourceUrl" />
  <div v-html:="data.product.content"></div>
</template>

<script setup>
const route = useRoute()
const query = gql`
query NewQuery($id: ID!) {
  product(id: $id) {
    name
    content
    featuredImage {
      node {
        sourceUrl(size: MEDIUM_LARGE)
      }
    }
    galleryImages {
      nodes {
        id
      }
    }
    productId
    status
    title
  }
}
  `
const { data, error } = await useAsyncQuery(query, {
  id: route.params.id
})
</script>

<template>
  <div>
    <p v-if="error">Something went wrong...</p>
    <p v-if="loading">Loading...</p>
    <div v-else class="grid grid-cols-3">
      <div v-for="product in data.products.edges" :key="product">
        <ProductCard :product="product" />
      </div>
    </div>

  </div>
</template>
<script setup>
const query = gql`
query NewQuery {
  products(first: 10) {
    edges {
      node {
        id
        title
        type
        image {
          id
          sourceUrl
          altText
        }
        featuredImage {
        node {
          sourceUrl(size: MEDIUM_LARGE)
        }
      }
      ... on SimpleProduct {
          price(format: RAW)
          stockStatus
		    stockQuantity
        }
        ... on VariableProduct {
          variations {
		      nodes {
		        id
		        sku
		        stockStatus
		        stockQuantity
		      }
		    }
                price(format: RAW)
      
        }
      }
    }
  }
}
`
const { data, loading, error } = await useAsyncQuery(query)
</script>
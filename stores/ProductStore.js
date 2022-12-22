import { defineStore } from "pinia";
export const useProductStore = defineStore("ProductStore", {
  state: () => {
    return {
      products: [],
    };
  },
  getters: {
    numberOfProducts() {
      return this.products.length
    },
  },
  actions: {
    async fill() {
      this.products = (await fetch('https://dummyjson.com/products?limit=100')
        .then(res => res.json())
        .then(data => this.products = data.products));
    },
  },
});
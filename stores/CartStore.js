import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
    state: () => ({
        cart: [],
    }),
    getters: {
        numberOfProducts() {
            return this.cart.length
        }
    },
    actions: {
        async getCart() {
            console.log(this.cart)
        },
        async deleteFromCart(product) {
            this.cart = this.cart.filter(p => {
                return p.id != product.id
            })
        },
        async addToCart(product) {
            const exist = this.cart.find(p => p.id === product.node.id)
            if (!exist) {
                this.cart.push({ ...product.node })
            }

        }
    }
})
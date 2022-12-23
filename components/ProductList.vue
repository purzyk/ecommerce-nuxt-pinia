<template>
    <section>
        <div class="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
            <!--Title-->

            <TheTitle :data="this.title" />

            <!--Filters-->


            <div class="mt-8 sm:flex sm:items-center sm:justify-between">
                <div class="sm:flex sm:gap-12">
                    <div class="relative">
                        <fieldset class="col-span-6">
                            <legend class="block text-sm font-medium text-gray-700 pb-4">
                                <span class="material-symbols-outlined">
                                    filter_alt
                                </span> Filter by category
                            </legend>
                            <div class="mt-1 -space-y-px bg-white rounded-md shadow-sm">
                                <div>
                                    <select id="Filter" v-model="category"
                                        class="relative w-full border-gray-200 rounded-t-md focus:z-10 sm:text-sm">
                                        <option value="all">all</option>
                                        <option :value="category" v-for="category in this.categoriesList"
                                            :key="category">{{
                                                    category
                                            }}</option>
                                    </select>
                                </div>
                            </div>
                        </fieldset>
                    </div>
                    <div class="relative">
                        <fieldset class="col-span-6 flex flex-col justify-between w-40 h-full">
                            <legend class="block text-sm font-medium text-gray-700 ">
                                <span class="material-symbols-outlined">
                                    sell
                                </span>Select price range
                            </legend>

                            <div class="-space-y-px bg-white rounded-md shadow-sm mt-auto">
                                <div v-if="this.initialSliderValues.length > 0">
                                    <Slider v-model="productsMinMaxPrice" :min="this.initialSliderValues[0]"
                                        :max="this.initialSliderValues[1]" />
                                </div>
                            </div>
                        </fieldset>
                    </div>
                </div>

            </div>

            <!--Products counter-->

            <div class="mt-8 sm:flex sm:items-center sm:justify-between">
                <div class="block text-sm font-medium text-gray-700 ">
                    <p v-if="filterProducts.length > 0"><span class="material-symbols-outlined">
                            visibility
                        </span>
                        Showing {{ filterProducts.length }} <span v-if="filterProducts.length > 1">products</span><span
                            v-else>product</span>
                    </p>
                    <p v-else><span class="material-symbols-outlined">
                            visibility_off
                        </span>No products match your filters</p>
                </div>
            </div>

            <!--Products list-->

            <ul class="grid gap-4 mt-4 sm:grid-cols-2 lg:grid-cols-4" v-if="productsList">
                <li v-for="product in filterProducts" :key="product.id">
                    <ProductCard :product="product" />
                </li>
            </ul>

        </div>
    </section>


</template>

<script>
import Slider from '@vueform/slider'
export default {
    props: ['products'],
    components: {
        Slider,
    },
    data() {
        return {
            initialSliderValues: [],
            productsMinMaxPrice: [],
            category: 'all',
            productsList: this.products,
            productsFiltered: [],
            categoriesList: [],
            categoriesUrl: "https://dummyjson.com/products/categories",
            title: {
                title: 'Product Collection',
                copy: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque praesentium cumque iure dicta incidunt est ipsam, officia dolor fugit natus?",
                left: true,
            }
        };
    },

    watch: {
        productsFiltered: function (value) {
            this.productsList = this.productsFiltered

        },
        products: function (value) {
            this.productsList = this.products

        },
        filterProducts: function (value) {
        }
    },
    methods: {
        loadCategories() {
            fetch(this.categoriesUrl)
                .then(res => res.json())
                .then(data => this.categoriesList = data)
                .catch(err => console.log(err.message))
        },
    },
    computed: {
        filterProducts: function () {
            if (this.category !== 'all') {
                return this.productsList.filter(product => product.category === this.category).filter(product => parseInt(product.price) >= this.productsMinMaxPrice[0] && parseInt(product.price) <= this.productsMinMaxPrice[1])
            }
            else {
                return this.productsList.filter(product => parseInt(product.price) >= this.productsMinMaxPrice[0] && parseInt(product.price) <= this.productsMinMaxPrice[1])
            }
        },
        categories: function () {
            return this.categoriesList.filter(category => category.count > 0)
        },
        highest: function () {
            const priceArray = this.productsList.map(product => parseInt(product.price))
            let max = 0
            let min = 0
            for (let i = 1; i < priceArray.length; ++i) {
                if (i == 1) {
                    max = priceArray[i]
                    min = priceArray[i]
                }
                if (priceArray[i] > max) {
                    max = priceArray[i];
                }
                if (priceArray[i] < min) {
                    min = priceArray[i];
                }

            }
            return { minPrice: min, maxPrice: max }

        },
    },
    mounted() {
        this.loadCategories();
        this.initialSliderValues[0] = this.highest.minPrice
        this.initialSliderValues[1] = this.highest.maxPrice
        this.productsMinMaxPrice[0] = this.highest.minPrice
        this.productsMinMaxPrice[1] = this.highest.maxPrice
    },
}
</script>
<style  src="@vueform/slider/themes/default.css">

</style>
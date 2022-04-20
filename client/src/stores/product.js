import { defineStore } from 'pinia'
import axios from 'axios'
const baseUrl = 'http://localhost:3000/'
export const useProductsStore = defineStore({
    id: 'products',
    state: () => ({
        brands: [],
        products: []
    }),
    getters: {

    },
    actions: {
        async fetchBrands() {
            try {
                const { data } = await axios.get(baseUrl + 'products/brands')
                this.brands = data
            } catch (err) {
                console.log(err)
            }
        },
        async fetchProducts(page, brands) {
            try {
                let url = baseUrl + 'products/sneakers?page=0'
                if (page) {
                    url = baseUrl + 'products/sneakers?page=' + page
                }
                if (brands) {
                    url + `&query=${brands}`
                }
                const { data } = await axios.get(url)
                this.products = data
            } catch (err) {
                console.log(err)
            }
        }
    }
})
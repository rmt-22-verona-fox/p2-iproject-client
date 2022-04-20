import { defineStore } from 'pinia'
import axios from 'axios'
const baseUrl = 'http://localhost:3000/'
export const useUserStore = defineStore({
    id: 'user',
    state: () => ({

    }),
    getters: {

    },
    actions: {
        loginAction(userData) {
            return axios.post(baseUrl + 'users/login', userData, {})
        },
        registerAction(userData) {
            return axios.post(baseUrl + 'users/register', userData, {})
        }
    }
})
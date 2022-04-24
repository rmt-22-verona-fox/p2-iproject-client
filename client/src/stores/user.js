import { defineStore } from 'pinia'
import axios from 'axios'
const baseUrl = 'https://iproject-4kicks.herokuapp.com/'
export const useUserStore = defineStore({
    id: 'user',
    state: (
        isLogin = false
    ) => ({

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
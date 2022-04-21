import { defineStore } from 'pinia'
import axios from "axios";
export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
   
  }),
  getters: {
 
  },
  actions: {
    loginHandler(payload) {
      return axios.post("https://iproject-kevinwiranata.herokuapp.com/login", payload);
    },
    registerHandler(payload) {
      return axios.post("https://iproject-kevinwiranata.herokuapp.com/register", payload);
    },
  }
})

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
      return axios.post("http://localhost:3000/login", payload);
    },
    registerHandler(payload) {
      return axios.post("http://localhost:3000/register", payload);
    },
  }
})

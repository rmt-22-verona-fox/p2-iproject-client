import { defineStore } from "pinia";
import axios from "axios";

export const useDatingStore = defineStore({
  id: "dating",
  state: () => ({}),
  getters: {},
  actions: {
    logIn(data) {
      return axios.post("http://localhost:3000/users/login", {
        email: data.email,
        password: data.password,
      });
    },
    register(data) {
      console.log(data);
      return axios.post("http://localhost:3000/users/register", {
        email: data.email,
        password: data.password,
      });
    },
  },
});

import { defineStore } from "pinia";
import axios from "axios";

const url = "http://localhost:3000/";

export const useCustomerStore = defineStore({
  id: "counter",
  state: () => ({
    isLogin: false,
    loginData: {
      email: "",
      password: "",
    },
    registerData: {
      username: "",
      email: "",
      password: "",
      phoneNumber: "",
    },
  }),
  getters: {},
  actions: {
    signOut: function () {
      localStorage.removeItem("access_token");
      this.isLogin = false;
    },
    login: function () {
      return axios.post(`${url}login`, this.loginData);
    },
    registration: function () {
      return axios.post(`${url}register`, this.registerData);
    },
  },
});

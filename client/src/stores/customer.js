import { defineStore } from "pinia";
import axios from "axios";

let baseUrl = "http://localhost:3000";
export const useCustomerStore = defineStore({
  id: "useCustomerStore",
  state: () => ({}),
  getters: {},
  actions: {
    login(userLogin) {
      return axios({
        method: "post",
        url: `${baseUrl}/customers/login`,
        data: {
          email: userLogin.email,
          password: userLogin.password,
        },
      });
    },
    orderHands(hands) {
      return axios({
        method: "post",
        url: `${baseUrl}/customers/before-transaction`,
        data: {
          CustomerId: localStorage.getItem("CustomerId"),
          orderedHands: hands,
        },
      });
    },
  },
});

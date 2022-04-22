import { defineStore } from "pinia";
import axios from "axios";

const baseUrl = import.meta.env.VITE_SERVER_URL + "/register";

export const useRegisterStore = defineStore({
  id: "register",
  actions: {
    registerRequest(registerData) {
      return axios({
        url: baseUrl,
        method: "post",
        data: registerData,
      });
    },
  },
});

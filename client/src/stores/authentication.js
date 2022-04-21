import { defineStore } from "pinia";
import axios from "axios";

const baseUrl = import.meta.env.VITE_SERVER_URL;

export const useAuthenStore = defineStore({
  id: "login",
  state: () => ({
    isLoggedIn: false,
    trainer: {
      id: undefined,
      username: "",
      account: "",
    },
  }),
  actions: {
    loginRequest(loginData) {
      return axios({
        url: baseUrl + "/login",
        method: "post",
        data: loginData,
      });
    },
    googleLoginRequest(token) {
      return axios({
        url: baseUrl + "/googleLogin",
        method: "post",
        data: { token },
      });
    },
  },
});

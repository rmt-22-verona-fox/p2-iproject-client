import { defineStore } from "pinia";
import { axiosAuth } from "../axios";

export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
    isLoggedIn: false,
  }),
  getters: {},
  actions: {
    formRegisterHandler(credentials) {
      return axiosAuth.post("/user/register", {
        fullName: credentials.fullName,
        email: credentials.email,
        password: credentials.password,
      });
    },
  },
});

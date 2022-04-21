import { defineStore } from "pinia";
import axios from "axios";

export const useCounterStore = defineStore({
  id: "counter",
  state: () => ({
    isLogin: false,
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
  },
  actions: {
    async loginAction(payload) {
      try {
        const { data } = await axios.post(`http://localhost:8080/login`, {
          email: payload.email,
          password: payload.password,
        });
        localStorage.setItem("email", data.email);
        this.isLogin = true;
        this.router.push("/");
      } catch (error) {
        console.log(error.response.data.message);
      }
    },
  },
});

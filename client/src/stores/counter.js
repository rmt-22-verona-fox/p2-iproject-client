import { defineStore } from "pinia";
import axios from "axios";
import { vModelCheckbox } from "vue";

export const useCounterStore = defineStore({
  id: "counter",
  state: () => ({
    currentEmail: localStorage.getItem("email"),
    isLogin: false,
    chats: [],
  }),
  getters: {},
  actions: {
    async loginAction(payload) {
      try {
        const { data } = await axios.post(
          `https://step-inn-i-project.herokuapp.com/login`,
          {
            email: payload.email,
            password: payload.password,
          }
        );
        localStorage.setItem("email", data.email);
        this.isLogin = true;
        this.router.push("/");
      } catch (error) {
        console.log(error.response.data.message);
      }
    },
    socket_connect() {
      console.log("connected", this.socket);
    },
    socket_disconnect() {
      console.log("socket_disconnect", this.socket);
    },
    socket_customEventFromServer(payload) {
      console.log("customEventFromServer", payload);
    },

    sendCustomEventToServer() {
      this.socket.emit("customEventFromClient", { message: "halooo" });
    },
    setUsername(payload) {
      console.log(payload);
      this.currentEmail = payload;
      this.socket.emit("setUsername", payload);
    },
    sendMessage(payload) {
      this.socket.emit("sendMessageToServer", {
        user: this.currentEmail,
        message: payload.trim(),
      });
    },
  },
});

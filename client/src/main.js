import { createApp, markRaw } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import "./assets/index.css";

import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

import GAuth from "vue3-google-oauth2";

import VueSocketIOExt from "vue-socket.io-extended";
import { io } from "socket.io-client";

const app = createApp(App);
const gAuthOptions = {
  clientId:
    "551898620826-nn2aj0g5hged8kded1lg9o3mbp26vkk9.apps.googleusercontent.com",
  scope: "email",
  prompt: "consent",
  fetch_basic_profile: false,
};
app.use(GAuth, gAuthOptions);

app.use(VueSweetalert2);

const socket = io("http://localhost:3001");
app.use(VueSocketIOExt, socket);

const pinia = createPinia();
pinia.use(({ store }) => {
  store.router = markRaw(router);
});
app.use(pinia);
app.use(router);

app.mount("#app");

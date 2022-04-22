import VueSocketIOExt from "vue-socket.io-extended";
import { io } from "socket.io-client";

import { createApp, markRaw } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import { useCounterStore } from "./stores/counter";

const socket = io("http://localhost:3000");

const app = createApp(App);
const pinia = createPinia();

pinia.use(({ store }) => {
  store.router = markRaw(router);
  store.socket = markRaw(socket);
});

app.use(VueSocketIOExt, socket, useCounterStore);
app.use(router);

app.use(pinia);

app.mount("#app");

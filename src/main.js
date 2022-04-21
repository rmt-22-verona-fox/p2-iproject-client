import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
//
import VueFlicking from "@egjs/vue3-flicking";
import "./assets/base.css";

import "@egjs/vue3-flicking/dist/flicking.css";
import "@egjs/vue3-flicking/dist/flicking-inline.css";

export function BASE_URL() {
  return process.env.NODE_ENV === "production" ? "" : "http://localhost:3000";
}

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(VueFlicking);
app.use(Toast, {
  transition: "Vue-Toastification__bounce",
  position: "top-center",
  timeout: 1500,
  pauseOnFocusLoss: false,
  pauseOnHover: false,
  hideProgressBar: false,
  icon: true,
  rtl: false,
});
app.provide("toast", app.config.globalProperties.$Toast);

app.mount("#app");

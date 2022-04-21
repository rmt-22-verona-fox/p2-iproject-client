import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

import "./assets/base.css";

export function BASE_URL() {
  return process.env.NODE_ENV === "production"
    ? "https://travel10-iproject-app.herokuapp.com"
    : "http://localhost:3000";
}

const app = createApp(App);

app.use(createPinia());
app.use(router);
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

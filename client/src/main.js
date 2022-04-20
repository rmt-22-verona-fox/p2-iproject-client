import { createApp } from "vue";
import { createPinia } from "pinia";
import { markRaw } from "vue";
import App from "./App.vue";
import '@/index.css'
import router from "@/router/index.js";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
const app = createApp(App);
const pinia = createPinia()

pinia.use(({ store }) => {
  store.router = markRaw(router);
});

app.use(router);
app.use(pinia);
app.use(VueSweetalert2);

app.mount("#app");

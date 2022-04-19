import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import VueFlicking from "@egjs/vue3-flicking";
import "./assets/base.css";

import "@egjs/vue3-flicking/dist/flicking.css";

import "@egjs/vue3-flicking/dist/flicking-inline.css";

/* add icons to the library */

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(VueFlicking);

app.mount("#app");

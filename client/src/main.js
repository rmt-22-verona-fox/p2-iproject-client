import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
// import useDatingStore from "./stores/dating";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

// import VueSocketIOExt from "vue-socket.io-extended";
// import { io } from "socket.io-client";

// const socket = io("http://localhost:3000");

const app = createApp(App);

// app.use(VueSocketIOExt, socket);
app.use(VueSweetalert2);
app.use(createPinia());
app.use(router);

app.mount("#app");


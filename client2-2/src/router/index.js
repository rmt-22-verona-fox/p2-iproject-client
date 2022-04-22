import { createRouter, createWebHistory } from "vue-router";
import LoginView from "@/views/LoginView.vue";
import DetailPage from "../views/DetailPage.vue";
import MainPage from "../views/MainPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: MainPage,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/detail",
      name: "detail",
      component: DetailPage,
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.name !== "login" && !localStorage.getItem("email")) {
    next({ name: "login" });
  } else if (to.name === "login" && localStorage.getItem("email")) {
    next({ name: "home" });
  } else {
    next();
  }
});

export default router;

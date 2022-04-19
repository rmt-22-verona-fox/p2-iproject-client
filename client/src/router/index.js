import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/LoginView.vue";
import Home from "../views/HomeView.vue";
import addProfile from "../views/AddProfileView.vue";
import Register from "../components/RegistrasiForm.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/register",
      name: "register",
      component: Register,
    },
    {
      path: "/addProfile",
      name: "addProfile",
      component: addProfile,
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (
    to.name !== "login" &&
    to.name !== "register" &&
    !localStorage.getItem("access_token")
  )
    next({ name: "login" });
  else if (
    to.name === "login" &&
    to.name !== "register" &&
    localStorage.getItem("access_token")
  )
    next({ name: "home" });
  else next();
});

export default router;

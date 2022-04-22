import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/LoginView.vue";
import Home from "../views/HomeView.vue";
import addProfile from "../views/AddProfileView.vue";
import chatRoom from "../components/ChatRoom.vue";
import movie from "../views/MovieSearch.vue";
import Register from "../components/RegistrasiForm.vue";
import Forgot from "../components/SendEmail.vue";
import Reset from "../components/ResetPassword.vue";

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
      path: "/reset/:id",
      name: "reset",
      component: Reset,
    },
    {
      path: "/forgot",
      name: "forgot",
      component: Forgot,
    },
    {
      path: "/addProfile",
      name: "addProfile",
      component: addProfile,
    },

    {
      path: "/chatroom",
      name: "chatroom",
      component: chatRoom,
    },
    {
      path: "/movie",
      name: "movie",
      component: movie,
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (
    to.name !== "login" &&
    to.name !== "register" &&
    to.name !== "forgot" &&
    to.name !== "reset" &&
    !localStorage.getItem("access_token")
  )
    next({ name: "login" });
  else if (
    to.name === "login" &&
    to.name === "register" &&
    localStorage.getItem("access_token")
  )
    next({ name: "home" });
  else next();
});

export default router;

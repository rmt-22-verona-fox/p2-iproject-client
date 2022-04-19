import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomePage/index.vue";
import LoginView from "@/views/LoginPage/index.vue";
import RegisterView from "@/views/RegisterPage/index.vue";
import ProfileView from "@/views/ProfilePage/index.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/register",
      name: "register",
      component: RegisterView,
    },
    {
      path: "/profile",
      name: "profile",
      component: ProfileView,
    },
  ],
});

export default router;

import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomePage/index.vue";
import LoginView from "@/views/LoginPage/index.vue";
import RegisterView from "@/views/RegisterPage/index.vue";
import ProfileView from "@/views/ProfilePage/index.vue";
import PackageView from "@/views/PackagePage/index.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/masuk",
      name: "login",
      component: LoginView,
    },
    {
      path: "/daftar",
      name: "register",
      component: RegisterView,
    },
    {
      path: "/profil",
      name: "profile",
      component: ProfileView,
    },
    {
      path: "/detil/:id",
      name: "detail-page",
      component: PackageView,
    },
  ],
});

export default router;

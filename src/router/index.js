import { createRouter, createWebHistory } from "vue-router";
// import HomeView from "@/views/HomePage/index.vue";
// import LoginView from "@/views/LoginPage/index.vue";
// import RegisterView from "@/views/RegisterPage/index.vue";
// import ProfileView from "@/views/ProfilePage/index.vue";
// import PackageView from "@/views/PackagePage/index.vue";

const HomeView = () => import("@/views/HomePage/index.vue");
const LoginView = () => import("@/views/LoginPage/index.vue");
const RegisterView = () => import("@/views/RegisterPage/index.vue");
const ProfileView = () => import("@/views/ProfilePage/index.vue");
const PackageView = () => import("@/views/PackagePage/index.vue");

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
      path: "/detail-paket/:id",
      name: "detail-page",
      component: PackageView,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 };
  },
});

export default router;

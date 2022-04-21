import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import DiagnoseForm from "../views/DiagnoseForm.vue";
import AppointPage from "../views/AppointPage.vue";
import LoginPage from "../views/LoginPage.vue";
import RegisterPage from "../views/RegisterPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "HomePage",
      component: HomePage,
    },
    {
      path: "/diagnose",
      name: "DiagnoseForm",
      component: DiagnoseForm,
    },
    {
      path: "/appoint",
      name: "AppointPage",
      component: AppointPage,
    },
    {
      path: "/login",
      name: "LoginPage",
      component: LoginPage,
    },
    {
      path: "/register",
      name: "RegisterPage",
      component: RegisterPage,
    },
  ],
});

export default router;

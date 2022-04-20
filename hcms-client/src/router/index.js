import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import DiagnoseForm from "../views/DiagnoseForm.vue";
import AppointPage from "../views/AppointPage.vue";

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
  ],
});

export default router;

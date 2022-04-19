import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../components/HomePage.vue";
import DetailSurah from "../components/DetailSurah.vue";
import LandingPage from "../components/LandingPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/login",
      name: "landing",
      component: LandingPage,
    },
    {
      path: "/surah/:id",
      name: "surah",
      component: DetailSurah,
    },
  ],
});

export default router;

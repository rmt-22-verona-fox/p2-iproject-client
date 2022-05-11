import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../components/HomePage.vue";
import DetailSurah from "../components/DetailSurah.vue";
import LandingPage from "../components/LandingPage.vue";
import BookmarkPage from "../components/BookmarkPage.vue";
import RegisterForm from "../components/RegisterForm.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/bookmarks",
      name: "bookmarks",
      component: BookmarkPage,
    },
    {
      path: "/login",
      name: "landing",
      component: LandingPage,
    },
    {
      path: "/register",
      name: "register",
      component: RegisterForm,
    },
    {
      path: "/surah/:id",
      name: "surah",
      component: DetailSurah,
    },
  ],
});
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.access_token;
  if (to.name == "bookmarks" && !isAuthenticated) next({ name: "landing" });
  else if (to.name == "landing" && isAuthenticated) {
    next({ name: "home" });
  } else {
    next();
  }
});
export default router;

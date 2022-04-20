import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/register",
      name: "register",
      component: () => import("../views/RegisterView.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/LoginView.vue"),
    },
    {
      path: "/pokedex",
      name: "pokedex",
      component: () => import("../views/PokedexView.vue"),
      children: [
        {
          path: "",
          component: () => import("../components/PokedexList.vue"),
        },
        {
          path: ":id",
          component: () => import("../components/PokemonDetail.vue"),
        },
      ],
    },
  ],
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem("access_token");
  if ((to.name === "login" || to.name === "register") && isAuthenticated)
    next({ name: "home" });
  else next();
});

export default router;

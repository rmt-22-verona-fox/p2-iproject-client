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

export default router;

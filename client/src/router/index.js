import { createRouter, createWebHistory } from "vue-router";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/HomePage.vue"),
    },
    {
      path: "/nba/standings",
      name: "standings",
      component: () => import("@/components/StandingsTable.vue"),
    },
    {
      path: "/training",
      name: "training",
      component: () => import("@/views/TrainingPage.vue"),
    },
    {
      path: "/training/:drills",
      name: "trainingDrills",
      component: () => import("@/components/TrainingVideo.vue"),
    },
    {
      path: "/nba/games",
      name: "nbaGames",
      component: () => import("@/views/NbaGames.vue"),
    },
    {
      path: "/nba/games/:detail",
      name: "nbaGamesDetail",
      component: () => import("@/components/GameDetails.vue"),
    }
  ],
});

export default router;

<script>
import { RouterView } from "vue-router";
import NavBar from "@/components/NavBar.vue";
import FootBar from "@/components/FootBar.vue";

export default {
  components: {
    RouterView,
    NavBar,
    FootBar
  }
};
</script>

<template>
  <NavBar />
  <RouterView />
  <FootBar />
</template>

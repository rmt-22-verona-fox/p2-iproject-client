<script>
import { RouterView } from "vue-router";
import FilterBar from "../components/FilterBar.vue";

export default {
  components: { FilterBar, RouterView },
};
</script>

<template>
  <section class="bg- mx-auto max-w-6xl px-4">
    <FilterBar v-if="$route.path === '/pokedex'"></FilterBar>
    <RouterView></RouterView>
  </section>
</template>

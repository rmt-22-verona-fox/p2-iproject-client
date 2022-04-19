<script>
import FilterBar from "../components/FilterBar.vue";
import PokedexList from "../components/PokedexList.vue";

export default {
  components: { FilterBar, PokedexList },
};
</script>

<template>
  <main>
    <h1 class="text-center">Pokédex View</h1>
    <section class="mx-auto max-w-6xl px-4">
      <FilterBar></FilterBar>
      <PokedexList></PokedexList>
    </section>
  </main>
</template>

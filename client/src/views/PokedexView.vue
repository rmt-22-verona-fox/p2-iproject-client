<script>
import { RouterView } from "vue-router";
import { mapActions, mapWritableState } from "pinia";
import { usePokemonStore } from "../stores/pokemons";
import FilterBar from "../components/FilterBar.vue";

export default {
  components: { FilterBar, RouterView },
  computed: {
    ...mapWritableState(usePokemonStore, [
      "nextPage",
      "pokemons",
      "previousPage",
    ]),
  },
  methods: {
    ...mapActions(usePokemonStore, [
      "fetchPokemons",
      "getPaginationData",
      "getPokemonDetails",
    ]),
  },
  async created() {
    try {
      const { data } = await this.fetchPokemons();
      this.getPaginationData(data);
      this.getPokemonDetails(data);
    } catch (err) {
      this.$swal({
        title: "Error",
        text: err,
        icon: "error",
      });
    }
  },
};
</script>

<template>
  <section class="mx-auto max-w-6xl px-4">
    <RouterView></RouterView>
  </section>
</template>

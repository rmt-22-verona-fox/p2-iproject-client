<script>
import { mapActions, mapWritableState } from "pinia";
import { usePokemonStore } from "../stores/pokemons";
import PokemonCard from "./PokemonCard.vue";

export default {
  components: { PokemonCard },
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
      "fetchPokemonDetails",
      "getPaginationData",
      "fetchNextPagination",
      "getPokemonDetails",
    ]),
    async switchPage(destination) {
      try {
        let url = this.nextPage;
        if (destination === "previous") {
          url = this.previousPage;
        }
        const { data } = await this.fetchNextPagination(url);
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
  <div class="flex justify-between">
    <button
      @click="switchPage('previous')"
      type="button"
      class="rounded-3xl bg-black px-2 py-1 text-sm text-white"
    >
      Previous Page
    </button>
    <button
      @click="switchPage('next')"
      type="button"
      class="rounded-3xl bg-black px-2 py-1 text-sm text-white"
    >
      Next Page
    </button>
  </div>
  <div class="flex flex-wrap gap-y-10">
    <PokemonCard
      v-for="pokemon in pokemons"
      :key="pokemon.id"
      :pokemon="pokemon"
      class="md:basis-1/4 xl:basis-1/5"
    ></PokemonCard>
  </div>
</template>

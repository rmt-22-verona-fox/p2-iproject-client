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
      "fetchNextPagination",
      "getTypeColor"
    ]),
    getPokemonImage(pokemon) {
      return pokemon.sprites.other["official-artwork"].front_default;
    },
    getPokemonTypes(pokemon) {
      return pokemon.types.map((type) => type.type.name);
    },
    getPokemonId(pokemon) {
      const splitted = pokemon.url.split("/");
      return splitted[splitted.length - 2];
    },
    getPaginationData(data) {
      this.pokemons = data.results;
      this.nextPage = data.next;
      this.previousPage = data.previous;
    },
    async getPokemonDetails() {
      for (const i in this.pokemons) {
        const { data } = await this.fetchPokemonDetails(this.pokemons[i].url);
        this.pokemons[i].id = this.getPokemonId(this.pokemons[i]);
        this.pokemons[i].imageUrl = this.getPokemonImage(data);
        this.pokemons[i].types = this.getPokemonTypes(data);
        this.pokemons[i].stats = data.stats.map((el) => el.base_stat);
      }
    },
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
        console.log(err);
      }
    },
  },
  async created() {
    try {
      const { data } = await this.fetchPokemons();
      this.getPaginationData(data);
      this.getPokemonDetails(data);
    } catch (err) {
      console.log(err);
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

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
      "fetchPokemonDetails",
      "fetchNextPagination",
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
    <FilterBar v-if="$route.path === '/pokedex'"></FilterBar>
    <RouterView></RouterView>
  </section>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      pokemons: [],
      nextPage: "",
      previousPage: "",
    };
  },
  computed: {
    pokemonTypes(types) {
      return types.join(", ");
    },
  },
  methods: {
    getPokemonImage(pokemon) {
      return pokemon.sprites.other["home"].front_default;
    },
    getPokemonTypes(pokemon) {
      return pokemon.types.map((type) => type.type.name).join(", ");
    },
    async switchPage(destination) {
      let url = this.nextPage;
      if (destination === "previous") {
        url = this.previousPage;
      }
      const { data } = await axios({
        url,
        method: "get",
      });
      this.pokemons = data.results;
      this.nextPage = data.next;
      this.previousPage = data.previous;

      for (const i in this.pokemons) {
        const { data } = await axios.get(this.pokemons[i].url);
        this.pokemons[i].imageUrl = this.getPokemonImage(data);
        this.pokemons[i].types = this.getPokemonTypes(data);
      }
    },
  },
  async created() {
    try {
      const { data } = await axios({
        url: "https://pokeapi.co/api/v2/pokemon?limit=40&offset=0",
        method: "get",
      });
      this.pokemons = data.results;
      this.nextPage = data.next;
      this.previousPage = data.previous;

      for (const i in this.pokemons) {
        const { data } = await axios.get(this.pokemons[i].url);
        this.pokemons[i].imageUrl = this.getPokemonImage(data);
        this.pokemons[i].types = this.getPokemonTypes(data);
      }
    } catch (err) {
      console.log(err);
    }
  },
};
</script>

<template>
  <button
    @click="switchPage('previous')"
    type="button"
    class="rounded-3xl bg-black px-2 py-1 text-white"
  >
    Previous Page
  </button>
  <button
    @click="switchPage('next')"
    type="button"
    class="rounded-3xl bg-black px-2 py-1 text-white"
  >
    Next Page
  </button>
  <div class="flex flex-wrap gap-y-10">
    <div v-for="pokemon in pokemons" class="flex basis-1/5 flex-col border">
      <p>#{{ pokemon.url.split("/")[pokemon.url.split("/").length - 2] }}</p>
      <img :src="pokemon.imageUrl" alt="" class="object-contain" />
      <p>{{ pokemon.name }}</p>
      <p>{{ pokemon.types }}</p>
    </div>
  </div>
</template>

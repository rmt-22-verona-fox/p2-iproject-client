import axios from "axios";
import { defineStore } from "pinia";

export const usePokemonStore = defineStore({
  id: "pokemons",
  state: () => ({
    pokemons: [],
    nextPage: "",
    previousPage: "",
  }),
  actions: {
    fetchPokemons() {
      return axios({
        url: "https://pokeapi.co/api/v2/pokemon?limit=40&offset=0",
        method: "get",
      });
    },
    fetchNextPagination(url) {
      return axios.get(url);
    },
    fetchPokemonDetails(url) {
      return axios.get(url);
    },
  },
});

import axios from "axios";
import { defineStore } from "pinia";

export const useMyPokemonStore = defineStore({
  id: "myPokemon",
  state: () => ({
    myPokemons: [],
  }),
  actions: {
    fetchMyPokemons() {
      return axios({
        url: "http:localhost:3000/mypokemons",
        headers: localStorage.access_token,
      });
    },
  },
});

import axios from "axios";
import { defineStore } from "pinia";

const baseUrl = import.meta.env.VITE_SERVER_URL + "/mypokemons";

export const useMyPokemonStore = defineStore({
  id: "myPokemon",
  state: () => ({
    myPokemons: [],
  }),
  actions: {
    fetchMyPokemons() {
      return axios({
        url: baseUrl,
        method: "get",
        headers: { access_token: localStorage.access_token },
      });
    },
    tradeRequest(tradeData) {
      return axios({
        url: baseUrl + "/trade",
        method: "put",
        headers: { access_token: localStorage.access_token },
        data: tradeData
      });
    },
  },
});

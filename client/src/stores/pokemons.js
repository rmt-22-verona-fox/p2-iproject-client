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
    getTypeColor(typeName) {
      let background,
        text = "";
      switch (typeName) {
        case "normal":
          background = "bg-gray-300";
          text = "text-black";
          break;
        case "fire":
          background = "bg-orange-500";
          text = "text-orange-800";
          break;
        case "water":
          background = "bg-blue-500";
          text = "text-blue-800";
          break;
        case "grass":
          background = "bg-green-500";
          text = "text-green-800";
          break;
        case "electric":
          background = "bg-yellow-500";
          text = "text-yellow-800";
          break;
        case "ice":
          background = "bg-cyan-300";
          text = "text-cyan-600";
          break;
        case "fighting":
          background = "bg-red-300";
          text = "text-red-600";
          break;
        case "fighting":
          background = "bg-red-300";
          text = "text-red-600";
          break;
        case "poison":
          background = "bg-purple-500";
          text = "text-purple-800";
          break;
        case "ground":
          background = "bg-yellow-600";
          text = "text-yellow-900";
          break;
        case "flying":
          background = "bg-sky-400";
          text = "text-sky-800";
          break;
        case "psychic":
          background = "bg-pink-400";
          text = "text-pink-800";
          break;
        case "bug":
          background = "bg-lime-400";
          text = "text-lime-800";
          break;
        case "rock":
          background = "bg-orange-400";
          text = "text-orange-800";
          break;
        case "ghost":
          background = "bg-indigo-400";
          text = "text-indigo-800";
          break;
        case "dark":
          background = "bg-gray-800";
          text = "text-white";
          break;
        case "dragon":
          background = "bg-violet-400";
          text = "text-violet-800";
          break;
        case "steel":
          background = "bg-gray-400";
          text = "text-gray-800";
          break;
        case "fairy":
          background = "bg-pink-400";
          text = "text-white";
          break;
      }
      return [background, text];
    },
  },
});

<script>
import axios from "axios";
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
    getPaginationData(data) {
      this.pokemons = data.results;
      this.nextPage = data.next;
      this.previousPage = data.previous;
    },
    async getPokemonDetails(data) {
      for (const i in this.pokemons) {
        const { data } = await this.fetchPokemonDetails(this.pokemons[i].url);
        this.pokemons[i].id = this.getPokemonId(this.pokemons[i]);
        this.pokemons[i].imageUrl = this.getPokemonImage(data);
        this.pokemons[i].types = this.getPokemonTypes(data);
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
    <div v-for="pokemon in pokemons" class="group md:basis-1/4 xl:basis-1/5">
      <div
        class="mx-2 flex cursor-pointer flex-col overflow-hidden rounded-lg shadow-lg duration-300 hover:scale-105 hover:shadow-2xl"
      >
        <p class="bg-gray-100 px-2 py-1 text-sm font-medium text-gray-400">
          #{{
            pokemon.id < 10
              ? `00${pokemon.id}`
              : pokemon.id < 100
              ? `0${pokemon.id}`
              : pokemon.id
          }}
        </p>
        <div class="relative overflow-hidden p-4">
          <img
            :src="pokemon.imageUrl"
            alt=""
            class="object-contain transition duration-500 ease-in-out group-hover:scale-105"
          />
        </div>
        <div class="p-2">
          <p class="text-xl font-medium">
            {{ pokemon.name[0].toUpperCase() + pokemon.name.slice(1) }}
          </p>
          <span
            v-for="typeName in pokemon.types"
            :class="getTypeColor(typeName)"
            class="mr-2 rounded-md px-4 text-[11px] font-semibold uppercase"
            >{{ typeName }}</span
          >
        </div>
      </div>
    </div>
    <!-- <PokemonCard v-for="pokemon in pokemons" :key="pokemon.id" :pokemon="pokemon"></PokemonCard> -->
  </div>
</template>

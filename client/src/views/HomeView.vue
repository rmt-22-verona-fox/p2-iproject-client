<script>
import axios from "axios";
import { mapActions, mapWritableState } from "pinia";
import { useMyPokemonStore } from "../stores/myPokemons";
import MyPokemons from "../components/MyPokemons.vue";

export default {
  data() {
    return {
      catchPokemon: false,
      pokemonName: "",
    };
  },
  components: { MyPokemons },
  computed: {
    ...mapWritableState(useMyPokemonStore, ["myPokemons"]),
  },
  methods: {
    ...mapActions(useMyPokemonStore, ["fetchMyPokemons", "addMyPokemon"]),
    async addCaughtPokemon(pokemonName) {
      try {
        const { data: apiData } = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`
        );
        const arrSpeciesUrl = apiData.species.url.split("/");
        const pokemonId = arrSpeciesUrl[arrSpeciesUrl.length - 2];

        await this.addMyPokemon(pokemonId);

        const { data } = await this.fetchMyPokemons();
        this.myPokemons = data;
        this.$swal({
          title: "Successfully catch pokemon",
          icon: "success",
        });
        this.pokemonName = "";
        this.catchPokemon = false;
      } catch (err) {
        this.$swal({
          title: "Error",
          text: "Pokemon " + err.response.data,
          icon: "error",
        });
      }
    },
  },
  async created() {
    try {
      const { data } = await this.fetchMyPokemons();
      this.myPokemons = data;
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
  <main class="mx-auto max-w-6xl px-4">
    <section
      class="mx-auto mb-6 flex h-96 flex-col items-center overflow-hidden shadow-lg md:flex-row"
    >
      <div
        class="flex h-full flex-col items-center justify-center gap-y-4 bg-sky-500 md:basis-1/2"
      >
        <div class="flex items-center space-x-2 text-white">
          <div class=""><img src="../assets/pokeball-96.png" alt="" /></div>
          <div class="flex flex-col">
            <div class="text-4xl font-bold">Catch Pokémon</div>
            <div class="text-2xl font-medium">Find your buddy!</div>
          </div>
        </div>
        <p class="mb-5 px-24 text-white">
          Catching Pokémon is one way to collect them! You can also collect them
          by hatching Eggs and trading with other Trainers.
        </p>
        <div
          @click="catchPokemon = true"
          class="flex cursor-pointer items-center space-x-2 rounded-3xl bg-white px-4 py-2 font-semibold uppercase shadow-lg hover:bg-gray-200"
        >
          <img src="../assets/superball-48.png" alt="" />
          <p>Catch</p>
        </div>
      </div>
      <div v-if="!catchPokemon" class="md:basis-1/2">
        <img
          src="../assets/bg-charmander-minimalist.png"
          alt=""
          class="h-full w-full object-contain"
        />
      </div>
      <div v-if="catchPokemon" class="md:basis-1/2">
        <div class="m-6 mx-auto max-w-sm">
          <form
            @submit.prevent="addCaughtPokemon(pokemonName)"
            class="flex flex-col items-center justify-center py-5"
          >
            <p><img src="../assets/pikachu-96.png" alt="" class="mb-3" /></p>
            <input
              v-model="pokemonName"
              class="mb-1 appearance-none rounded-lg border-2 border-black p-2 leading-tight outline-none placeholder:text-sm"
              name="email"
              type="text"
              placeholder="pokemon name"
            />
            <p class="mb-5 text-xs italic text-gray-600">
              you have to know the name!
            </p>
            <button
              type="submit"
              class="rounded-lg border border-black px-4 py-2 text-sm uppercase"
            >
              Catch
            </button>
          </form>
        </div>
      </div>
    </section>
    <MyPokemons></MyPokemons>
  </main>
</template>

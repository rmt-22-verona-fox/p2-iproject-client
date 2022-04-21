<script>
import { mapActions, mapState } from "pinia";
import { useMyPokemonStore } from "../stores/myPokemons";
import { usePokemonStore } from "../stores/pokemons";

export default {
  props: { pokemon: Object },
  computed: {
    ...mapState(useMyPokemonStore, ["myPokemons"]),
  },
  methods: {
    ...mapActions(usePokemonStore, ["getTypeColor", "getCurrentPokemon"]),
    blurredPokemon() {
      const myPokemonIds = this.myPokemons.map((el) => el.detail.id);
      const foundPokemon = myPokemonIds.some((id) => id == this.pokemon.id);
      if (!foundPokemon) {
        return ["opacity-50"];
      }
      return "opacity-100";
    },
    async pokemonDetailHandler(id) {
      try {
        this.getCurrentPokemon(id);
        this.$router.push(`/pokedex/${id}`);
      } catch (err) {
        this.$swal({
          title: "Error",
          text: err,
          icon: "error",
        });
      }
    },
  },
};
</script>

<template>
  <div class="group" :class="blurredPokemon()">
    <div
      @click="pokemonDetailHandler(pokemon.id)"
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
      <div class="overflow-hidden p-4">
        <img
          :src="pokemon.imageUrl"
          alt=""
          class="object-contain transition duration-500 ease-in-out"
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
</template>

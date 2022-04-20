<script>
import { mapState } from "pinia";
import { useMyPokemonStore } from "../stores/myPokemons";
import PokemonCard from "./PokemonCard.vue";

export default {
  components: { PokemonCard },
  computed: {
    ...mapState(useMyPokemonStore, ["myPokemons"]),
  },
};
</script>

<template>
  <section class="mx-auto flex flex-col">
    <p class="text-xl font-semibold uppercase tracking-wider">My Pokemons:</p>
    <div
      class="gap-y-10  overflow-x-scroll whitespace-nowrap scrollbar-hide"
    >
      <PokemonCard
        v-for="pokemon in myPokemons"
        :key="pokemon.id"
        :pokemon="pokemon.detail"
        class="inline-flex w-[250px]"
      ></PokemonCard>
    </div>
  </section>
</template>

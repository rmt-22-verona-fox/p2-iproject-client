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
    <div class="gap-y-10 p-4 overflow-x-scroll whitespace-nowrap scrollbar-hide">
      <PokemonCard
        v-if="myPokemons.length"
        v-for="pokemon in myPokemons"
        :key="pokemon.id"
        :pokemon="pokemon.detail"
        class="inline-flex w-[250px]"
      ></PokemonCard>
      <div
        v-if="!myPokemons.length"
        class="font-montserrat rounded-sm p-10 text-center shadow-2xl"
      >
        <p class="mb-8 flex justify-center">
          <img src="../assets/mankey-96.png" alt="" />
        </p>
        <p class="mb-6 text-4xl font-semibold text-gray-800">
          You dont have any pokemon.
        </p>
        <div class="flex items-center justify-center space-x-2">
          <img src="../assets/superball-48.png" alt="" />
          <p class="font-montserrat text-lg font-semibold text-gray-700">
            Gotta catch some.
          </p>
          <img src="../assets/superball-48.png" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>

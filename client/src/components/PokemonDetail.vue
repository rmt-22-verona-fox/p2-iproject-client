<script>
import { mapActions, mapState } from "pinia";
import { usePokemonStore } from "../stores/pokemons";

export default {
  computed: {
    ...mapState(usePokemonStore, ["pokemons"]),
    pokemon() {
      return this.pokemons.find(
        (el) => el.id == this.$route.path.split("/")[2]
      );
    },
  },
  methods: {
    ...mapActions(usePokemonStore, ["getTypeColor"]),
    getStatsBar(stat) {
      const width = Math.floor((stat / 255) * 100);
      return width;
    },
  },
};
</script>

<template>
  <div class="flex pt-10">
    <div class="flex basis-1/4 flex-col justify-between">
      <div>
        <p class="font-medium">
          #{{
            pokemon.id < 10
              ? `00${pokemon.id}`
              : pokemon.id < 100
              ? `0${pokemon.id}`
              : pokemon.id
          }}
        </p>
        <p class="text-2xl font-medium uppercase tracking-wide">
          {{ pokemon.name[0].toUpperCase() + pokemon.name.slice(1) }}
        </p>
        <p>
          The flame inside its body burns hotter than 3,600 degrees Fahrenheit.
          When Charizard roars, that temperature climbs even higher. It evolves
          from Charmeleon starting at level 36. It is the final form of
          Charmander
        </p>
      </div>
      <div>
        <p>Major appearance</p>
        <div class="h-[157.5px] w-full bg-black"></div>
      </div>
    </div>
    <div class="basis-2/4">
      <div class="overflow-hidden">
        <img class="w-full object-contain" :src="pokemon.imageUrl" alt="" />
      </div>
    </div>
    <div class="flex basis-1/4 flex-col justify-between">
      <div>
        <p>Type</p>
        <span
          v-for="typeName in pokemon.types"
          :class="getTypeColor(typeName)"
          class="mr-2 rounded-md px-4 text-[11px] font-semibold uppercase"
          >{{ typeName }}</span
        >
      </div>
      <div>
        <p>Weaknesses</p>
        <span>Water</span>
        <span>Electric</span>
        <span>Rock</span>
      </div>
      <div class="flex flex-col gap-y-2">
        <div v-for="stat in pokemon.stats" class="">
          <p>HP: {{ stat }}</p>
          <div class="relative h-2 overflow-hidden rounded-lg">
            <div
              :class="'w-[' + stat + '%]'"
              class="absolute h-full bg-black"
            ></div>
            <div class="h-full w-full bg-gray-400"></div>
          </div>
        </div>
        <!-- <div class="">
          <p>ATTACK: 84</p>
          <div class="relative h-2 overflow-hidden rounded-lg">
            <div class="absolute h-full w-[calc(84/255*100%)] bg-black"></div>
            <div class="h-full w-full bg-gray-400"></div>
          </div>
        </div>
        <div class="">
          <p>DEFENSE: 78</p>
          <div class="relative h-2 overflow-hidden rounded-lg">
            <div class="absolute h-full w-[calc(78/255*100%)] bg-black"></div>
            <div class="h-full w-full bg-gray-400"></div>
          </div>
        </div>
        <div class="">
          <p>SPEED: 109</p>
          <div class="relative h-2 overflow-hidden rounded-lg">
            <div class="absolute h-full w-[calc(109/255*100%)] bg-black"></div>
            <div class="h-full w-full bg-gray-400"></div>
          </div>
        </div>
        <div class="">
          <p>SP. ATTACK: 85</p>
          <div class="relative h-2 overflow-hidden rounded-lg">
            <div class="absolute h-full w-[calc(85/255*100%)] bg-black"></div>
            <div class="h-full w-full bg-gray-400"></div>
          </div>
        </div>
        <div class="">
          <p>SP. DEFENSE: 100</p>
          <div class="relative h-2 overflow-hidden rounded-lg">
            <div class="absolute h-full w-[calc(100/255*100%)] bg-black"></div>
            <div class="h-full w-full bg-gray-400"></div>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

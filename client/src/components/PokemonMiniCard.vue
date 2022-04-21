<script>
export default {
  emits: ["select-pokemon"],
  props: { selectedPokemon: Number, pokemon: Object },
};
</script>

<template>
  <div
    :class="{
      'border-white ': selectedPokemon != pokemon.detail.id,
      'border-black': selectedPokemon == pokemon.detail.id,
    }"
    @click="$emit('select-pokemon', pokemon.detail.id)"
    class="inline-flex cursor-pointer items-center gap-x-1 rounded-lg border px-2"
  >
    <div class="h-8 w-8">
      <img
        :src="pokemon.detail.imageUrl"
        alt=""
        class="h-full w-full object-contain"
      />
    </div>
    <div class="text-xs uppercase">
      {{ pokemon.detail.name[0].toUpperCase() + pokemon.detail.name.slice(1) }}
    </div>
  </div>
</template>

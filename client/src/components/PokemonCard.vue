<script>
export default {
  props: { pokemon: { Object } },
};
</script>

<template>
  <div class="group md:basis-1/4 xl:basis-1/5">
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
      <div class="overflow-hidden p-4">
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
</template>

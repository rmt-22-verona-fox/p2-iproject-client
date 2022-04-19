<script>
import { mapState } from "pinia";
import { usePokemonStore } from "../stores/pokemons";

export default {
  computed: {
    ...mapState(usePokemonStore, ["pokemons"]),
  }
}
</script>

<template>
  <h1>Pokemon Detail</h1> 
</template>

<script>
import { mapActions, mapWritableState } from "pinia";
import { useMyPokemonStore } from "../stores/myPokemons";
import MyPokemons from "../components/MyPokemons.vue";

export default {
  components: { MyPokemons },
  computed: {
    ...mapWritableState(useMyPokemonStore, ["myPokemons"]),
  },
  methods: {
    ...mapActions(useMyPokemonStore, ["fetchMyPokemons"]),
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
    <section class="mx-auto flex h-96 items-center justify-center">
      <div class="">
        <img src="../assets/trainer-avatar.png" alt="" />
      </div>
    </section>
    <MyPokemons></MyPokemons>
  </main>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useDatingStore } from "@/stores/dating";
import ListMovie from "./ListMovie.vue";
import NavBar from "./NavBar.vue";
export default {
  data() {
    return {
      search: "",
    };
  },
  computed: {
    ...mapState(useDatingStore, ["trailer"]),
  },
  methods: {
    ...mapActions(useDatingStore, ["Imdb"]),
    searching() {
      console.log("asd");
      this.Imdb(this.search);
    },
  },
  components: { ListMovie, NavBar },
};
</script>

<template>
  <NavBar />

  <div class="input-group serach">
    <input
      type="search"
      class="form-control rounded"
      placeholder="Search"
      aria-label="Search"
      aria-describedby="search-addon"
      v-model="search"
    />
    <button
      type="button"
      class="btn btn-outline-primary"
      @click.prevent="searching"
    >
      search
    </button>
  </div>

  <br />

  <div>
    <h2 class="">{{ trailer.title }}</h2>
  </div>
  <p>
    <iframe width="900" height="500" :src="trailer.linkEmbed"> </iframe>
  </p>
</template>

<style>
.serach {
  margin-top: 20px;
  width: 400px;
  margin-left: 450px;
}
</style>

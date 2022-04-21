<template>
  <img :src="popularMovie.imageUrl" alt="" class="row_poster row_posterLarge" 
   @click.prevent="getDetailsHandler(popularMovie.movieId)"/>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useMovieStore } from "@/stores/movie";
export default {
  props: ["popularMovie"],
  computed: {
    ...mapState(useMovieStore, ["movieDetails"]),
  },
 methods: {
    ...mapActions(useMovieStore, [
      "getDetails"
    ]),
    getDetailsHandler(movieId){
      this.getDetails(movieId);
      this.$router.push('/details')
    }
  },
};
</script>

<style lang="scss" scoped></style>

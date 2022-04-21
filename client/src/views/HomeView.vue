<template>
  <!-- HomePage -->
  <section>
    <div class="banner">
      <div class="banners_contents">
        <h1 class="banner_title">Money Heist</h1>
        <div class="banner_buttons">
          <button class="banner_button">Play</button>
          <button class="banner_button">My List</button>
        </div>
        <div class="banner_description">
          Set in Madrid, a mysterious man known as the "Professor" recruits a
          group of eight people, who choose city names as their aliases, to
          carry out an ambitious plan that involves entering the Royal Mint of
          Spain, and escaping with €984 million. After taking 67 people hostage
          inside the Mint, the team plans to remain inside for 11 days to print
          the money as they deal with elite police forces. In the events
          following the initial heist, the group's members are forced out of
          hiding and prepare for a second heist, with some additional members,
          this time aiming to escape with gold from the Bank of Spain, as they
          again deal with hostages and police forces.
        </div>
      </div>
      <div class="banner--fadeBottom"></div>
    </div>

    <!-- Popular movies -->
    <div class="row">
      <h2>Popular Movies</h2>
      <div class="row_posters">
        <!-- CARD -->
        <PopularCard
          v-for="popularMovie in popularMovies"
          :key="popularMovie.id"
          :popularMovie="popularMovie" 
        ></PopularCard>
      </div>
    </div>

    <!-- Now Playing -->
    <div class="row">
      <h2>Now Playing</h2>
      <div class="row_posters">
        <img
          :src="nowPlayingMovie.imageUrl"
          alt=""
          class="row_poster row_posterLarge"
          v-for="nowPlayingMovie in nowPlayingMovies"
          :key="nowPlayingMovie.id"
          @click="getDetailsHandler(nowPlayingMovie.movieId)"
        />
      </div>
    </div>

    <!-- Upcoming Movies -->
    <div class="row">
      <h2>Upcoming Movies</h2>
      <div class="row_posters">
        <img
          :src="upcomingMovie.imageUrl"
          alt=""
          class="row_poster row_posterLarge"
          v-for="upcomingMovie in upcomingMovies"
          :key="upcomingMovie.id"
          @click="getDetailsHandler(upcomingMovie.movieId)"
        />
      </div>
    </div>
  </section>
</template>

<script>
import PopularCard from "../components/PopularMovieCard.vue";
import { mapActions, mapState } from "pinia";
import { useMovieStore } from "@/stores/movie";
export default {
  components: {
    PopularCard,
  },
  computed: {
    ...mapState(useMovieStore, ["popularMovies", "upcomingMovies","nowPlayingMovies"]),
  },
  methods: {
    ...mapActions(useMovieStore, [
      "fetchMovie",
      "fetchUpcomingMovies",
      "fetchNowPlayingMovies",
      "getDetails"
    ]),
    getDetailsHandler(movieId){
      this.getDetails(movieId);
      this.$router.push('/details')
    }
  },
  created() {
    this.fetchMovie();
    this.fetchUpcomingMovies();
    this.fetchNowPlayingMovies();
  },
};
</script>

<style></style>

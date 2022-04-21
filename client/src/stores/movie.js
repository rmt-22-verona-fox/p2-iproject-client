import { defineStore } from "pinia";
import axios from "axios";
export const useMovieStore = defineStore({
  id: "movie",
  state: () => ({
    popularMovies: [],
    upcomingMovies: [],
    nowPlayingMovies: [],
    movieDetails:[]
  }),
  getters: {},
  actions: {
    async fetchMovie() {
      try {
        const response = await axios({
          url: "http://localhost:3000/populars",
          method: "GET",
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        this.popularMovies = response.data;
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    },

    async fetchUpcomingMovies() {
      try {
        const response = await axios({
          url: "http://localhost:3000/upcoming",
          method: "GET",
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        this.upcomingMovies = response.data;
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    },

    async fetchNowPlayingMovies() {
      try {
        const response = await axios({
          url: "http://localhost:3000/nowPlaying",
          method: "GET",
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        this.nowPlayingMovies = response.data;
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    },

    async getDetails(movieId) {
      try {
        const response = await axios({
          url: `http://localhost:3000/movies/${movieId}`,
          method: "GET",
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        this.movieDetails = response.data;
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    },
  },
});

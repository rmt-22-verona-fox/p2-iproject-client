import { defineStore } from "pinia";
import axios from "axios";
export const useMovieStore = defineStore({
  id: "movie",
  state: () => ({
    popularMovies: [],
    upcomingMovies: [],
    nowPlayingMovies: [],
    movieDetails: [],
    paymentData:[]
  }),
  getters: {},
  actions: {
    async fetchMovie() {
      try {
        const response = await axios({
          url: "https://iproject-kevinwiranata.herokuapp.com/populars",
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
          url: "https://iproject-kevinwiranata.herokuapp.com/upcoming",
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
          url: "https://iproject-kevinwiranata.herokuapp.com/nowPlaying",
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
          url: `https://iproject-kevinwiranata.herokuapp.com/movies/${movieId}`,
          method: "GET",
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        this.movieDetails = response.data;
        this.payment()
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    },
    async payment() {
      try {
        const response = await axios({
          url: "http://localhost:3000/payment",
          method: "POST",
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
    
        });
        this.paymentData = response.data
      } catch (error) {
        console.log(error);
      }
    },
  },
});

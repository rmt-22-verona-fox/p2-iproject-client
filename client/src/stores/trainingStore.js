import { defineStore } from "pinia";
import axios from "axios";

const BASE_URL = "http://localhost:3000";
export const useTrainingStore = defineStore({
  id: "training",
  state: () => ({}),
  getters: {},
  actions: {
    axiosGetDribble() {
      return axios.get(`${BASE_URL}/youtube/dribble`)
    },
    axiosGetPassing() {
      return axios.get(`${BASE_URL}/youtube/passing`)
    },
    axiosGetFinishing() {
      return axios.get(`${BASE_URL}/youtube/finishing`)
    },
    axiosGetShooting() {
      return axios.get(`${BASE_URL}/youtube/shooting`)
    },
    axiosGetFootwork() {
      return axios.get(`${BASE_URL}/youtube/footwork`)
    }
  },
});
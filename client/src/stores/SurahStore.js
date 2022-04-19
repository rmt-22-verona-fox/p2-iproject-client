import { defineStore } from "pinia";
import axios from "axios";
const baseUrl = `http://localhost:3000`;
export const useSurahStore = defineStore({
  id: "surah",
  state: () => ({
    surahs: [],
    randomSurahData: {},
    oneSurah: {},
  }),
  getters: {},
  actions: {
    async getSurah() {
      try {
        const { data } = await axios.get(`${baseUrl}/surah`);
        this.surahs = data;
      } catch (err) {
        console.log(err);
      }
    },
    async randomSurah() {
      try {
        const { data } = await axios.get(`${baseUrl}/randomSurah`);
        this.randomSurahData = data;
        console.log(this.randomSurahData);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    },
    async detailSurah(id) {
      try {
        const { data } = await axios.get(`${baseUrl}/surah/${id}`);
        console.log(data);
        this.oneSurah = data;
      } catch (err) {
        console.log(err);
      }
    },
  },
});

import { defineStore } from "pinia";
import axios from "axios";
const baseUrl = `http://localhost:3000`;
import Swal from "sweetalert2";
export const useSurahStore = defineStore({
  id: "surah",
  state: () => ({
    surahs: [],
    randomSurahData: {},
    oneSurah: {},
    dataBookmarks: [],
  }),
  getters: {},
  actions: {
    async getSurah() {
      try {
        const { data } = await axios.get(`${baseUrl}/surah`);
        this.surahs = data;
      } catch (err) {
        console.log(err);
        Swal.fire({
          title: err.response.statusText,
          text: err.response.data.message,
          icon: "error",
          confirmButtonText: "Try Again",
        });
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
        Swal.fire({
          title: err.response.statusText,
          text: err.response.data.error.message,
          icon: "error",
          confirmButtonText: "Try Again",
        });
      }
    },
    async detailSurah(id) {
      try {
        const { data } = await axios.get(`${baseUrl}/surah/${id}`);
        console.log(data);
        this.oneSurah = data;
      } catch (err) {
        console.log(err);
        Swal.fire({
          title: err.response.statusText,
          text: err.response.data.error.message,
          icon: "error",
          confirmButtonText: "Try Again",
        });
      }
    },
    async getBookmarks() {
      try {
        const { data } = await axios.get(`${baseUrl}/bookmarks`, {
          headers: {
            access_token: localStorage.access_token,
          },
        });
        this.dataBookmarks = data;
        console.log(data);
      } catch (err) {
        console.log(err.response);
        Swal.fire({
          title: err.response.statusText,
          text: err.response.data.error.message,
          icon: "error",
          confirmButtonText: "Try Again",
        });
      }
    },
    async addBoomark(id) {
      try {
        console.log(id);
        const { data } = await axios.post(
          `${baseUrl}/bookmarks/${id}`,
          {},
          {
            headers: {
              access_token: localStorage.access_token,
            },
          }
        );
        console.log(data);
        Swal.fire("Good job!", "Success Add To Bookmark", "success");
      } catch (err) {
        console.log(err.response);
        Swal.fire({
          title: err.response.statusText,
          text: err.response.data.error.message,
          icon: "error",
          confirmButtonText: "Try Again",
        });
      }
    },
    async deleteBookmark(id) {
      try {
        console.log(id);
        const { data } = await axios.delete(`${baseUrl}/bookmarks/${id}`, {
          headers: {
            access_token: localStorage.access_token,
          },
        });
        this.getBookmarks();
        Swal.fire("Good job!", "Success Delete Bookmark", "success");
      } catch (err) {
        console.log(err.response);
        Swal.fire({
          title: err.response.statusText,
          text: err.response.data.error.message,
          icon: "error",
          confirmButtonText: "Try Again",
        });
      }
    },
  },
});

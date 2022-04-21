import { defineStore } from "pinia";
import axios from "axios";

export const useBookmarkStore = defineStore({
  id: "bookmark",
  state: () => ({
    bookmarks: [],
  }),
  getters: {},
  actions: {
    async getBookmark() {
      try {
        const { data } = await axios.get(`http://localhost:3000/saved/pair`, {
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });

        this.bookmarks = data.data;
      } catch (err) {
        console.log(err.response);
      }
    },
    addBookmark(id) {
      return axios.post(
        `http://localhost:3000/saved/pair/${id}`,
        {},
        {
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        }
      );
    },

    getBookmark2() {
      return axios.get(`http://localhost:3000/saved/pair`, {
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      });
    },
  },
});

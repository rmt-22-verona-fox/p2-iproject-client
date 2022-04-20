import { defineStore } from "pinia";
import axios from "axios";

export const useCounterStore = defineStore({
  id: "counter",
  state: () => ({
    counter: 0,
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
  },
  actions: {
    async getCity() {
      try {
        const {
          data: { data },
        } = await axios({
          method: "GET",
          url: "https://travel-advisor.p.rapidapi.com/attractions/list-in-boundary",
          params: {
            tr_longitude: "109.262909",
            tr_latitude: "12.346705",
            bl_longitude: "109.095887",
            bl_latitude: "12.113245",
          },
          headers: {
            "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
            "X-RapidAPI-Key":
              "d693f0e4b0mshc42d6ce177e0179p10dcdejsn59499c9fbcae",
          },
        });
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    },
  },
});

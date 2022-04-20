import { defineStore } from "pinia";
import axios from "axios";

export const useCounterStore = defineStore({
  id: "counter",
  state: () => ({
    city: [],
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
  },
  actions: {
    async getCityData(params) {
      try {
        const data = await axios({
          method: "GET",
          url: "https://priceline-com-provider.p.rapidapi.com/v1/hotels/locations",
          params: { search_type: "ALL", name: params },
          headers: {
            "X-RapidAPI-Host": "priceline-com-provider.p.rapidapi.com",
            "X-RapidAPI-Key":
              "d693f0e4b0mshc42d6ce177e0179p10dcdejsn59499c9fbcae",
          },
        });

        this.city = data;
        console.log(this.city);
      } catch (error) {
        console.log(error);
      }
    },
  },
});

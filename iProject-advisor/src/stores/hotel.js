import { defineStore } from "pinia";
import axios from "axios";

export const useHotelStore = defineStore({
  id: "counter",
  state: () => ({
    center: { lat: -6.223189, lng: 106.84785 },
    CE: {},
    NE: {},
    SW: {},
    mark: {
      position: {},
    },
    marks: [],
  }),
  getters: {},
  actions: {
    booking: function (data) {
      return axios.post("https://iprojectstayathotel.herokuapp.com/booking", data, {
        headers: {
          access_token: localStorage.access_token,
        },
      });
    },
  },
});

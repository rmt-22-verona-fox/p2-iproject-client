import { defineStore } from 'pinia'
import axios from 'axios'
import dummy from '../../dummy.json'

export const useFoodStore = defineStore({
  id: "food",
  state: () => ({
    allFoodData: [],
    province: [],
    city: [],
    isLogin: false
  }),

  actions: {
    async searchFeature(keyword) {
      try {
        //  const response = await axios.get("https://api.spoonacular.com/recipes/complexSearch", {
        //    params: {
        //     apiKey: "87331fcef85c482ebf4e26e8cceaefc1",
        //     minCalories: 0,
        //     number: 6,
        //     minFat: 0,
        //     sort: "calories",
        //     query: keyword
        //    }
        //  })

        const data = dummy;

        this.allFoodData = data.results;
      } catch (err) {
        console.log(err);
      }
    },
    async getAllProvince() {
      try {
        const response = await axios.get(
          "https://dev.farizdotid.com/api/daerahindonesia/provinsi"
        );
        this.province = response.data.provinsi;
      } catch (err) {
        console.log(err);
      }
    },
    async getAllCities(id) {
      try {
        const response = await axios.get(
          `https://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=${id}`
        );
        this.city = response.data.kota_kabupaten;
      } catch (err) {
        console.log(err);
      }
    },
    async registerAction(payload) {
      try {
        const response = await axios.post("http://localhost:3000/register", payload);
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    },
  },
});

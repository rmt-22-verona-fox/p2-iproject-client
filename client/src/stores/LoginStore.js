import { defineStore } from "pinia";
import axios from "axios";
const baseUrl = `http://localhost:3000`;
export const useLoginStore = defineStore({
  id: "login",
  state: () => ({
    randomSurahLoginData: {},
    longitude: "",
    latitude: "",
    isLogin: false,
  }),
  getters: {},
  actions: {
    async submitLogin(login) {
      try {
        const { data } = await axios.post(`${baseUrl}/login`, login);
        console.log(data);
        localStorage.access_token = data.accessToken;
        this.isLogin = true;
        this.randomSurahLogin();
        this.router.push("/");
      } catch (err) {
        console.log(err.response);
      }
    },
    async randomSurahLogin() {
      try {
        const { data } = await axios.get(`${baseUrl}/randomSurah`);
        this.randomSurahLoginData = data;
      } catch (err) {
        console.log(err);
      }
    },
    async prayerTime(long, lat) {
      try {
        const { data } = await axios.get(
          `${baseUrl}/prayerTime?long=${this.longitude}&lat=${this.latitude}`
        );
        console.log(data);
      } catch (err) {
        console.log(err.response);
      }
    },
    async getGeolocation() {
      try {
        let a;
        navigator.geolocation.getCurrentPosition((pos) => {
          a = pos.coords;
          console.log(a);
          this.prayerTime(a.longitude, a.latitude);
        });
        // console.log(a);
      } catch (err) {
        console.log(err.response);
      }
    },
  },
});

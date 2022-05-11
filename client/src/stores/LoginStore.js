import { defineStore } from "pinia";
import axios from "axios";
import Swal from "sweetalert2";
const baseUrl = `https://i-quran.herokuapp.com`;
export const useLoginStore = defineStore({
  id: "login",
  state: () => ({
    randomSurahLoginData: {},
    longitude: "",
    latitude: "",
    isLogin: false,
    currentPrayerTime: {},
    loginForm: true,
    registerForm: false,
  }),
  getters: {},
  actions: {
    async submitLogin(login) {
      try {
        const { data } = await axios.post(`${baseUrl}/login`, login);

        localStorage.access_token = data.accessToken;
        this.isLogin = true;

        this.randomSurahLogin();
        this.router.push("/");
      } catch (err) {
        Swal.fire({
          title: err.response.statusText,
          text: err.response.data.error.message,
          icon: "error",
          confirmButtonText: "Try Again",
        });
      }
    },
    async randomSurahLogin() {
      try {
        const { data } = await axios.get(`${baseUrl}/randomSurah`);
        this.randomSurahLoginData = data;
      } catch (err) {
        Swal.fire({
          title: err.response.statusText,
          text: err.response.data.message,
          icon: "error",
          confirmButtonText: "Try Again",
        });
      }
    },
    async prayerTime(long, lat) {
      try {
        const { data } = await axios.get(
          `${baseUrl}/prayerTime?long=${long}&lat=${lat}`
        );
        this.currentPrayerTime = data;
      } catch (err) {
        Swal.fire({
          title: err.response.statusText,
          text: err.response.data.message,
          icon: "error",
          confirmButtonText: "Try Again",
        });
      }
    },
    async getGeolocation() {
      try {
        let a;
        navigator.geolocation.getCurrentPosition((pos) => {
          a = pos.coords;
          this.prayerTime(a.longitude, a.latitude);

          this.longitude = a.longitude;
          this.latitude = a.latitude;
        });
      } catch (err) {
        Swal.fire({
          title: err.response.statusText,
          text: err.response.data.error.message,
          icon: "error",
          confirmButtonText: "Try Again",
        });
      }
    },
    async submitRegister(register) {
      try {
        const { data } = await axios.post(`${baseUrl}/register`, register);
        Swal.fire("Good job!", "Success Register", "success");
      } catch (err) {
        Swal.fire({
          title: err.response.statusText,
          text: err.response.data.error.message,
          icon: "error",
          confirmButtonText: "Try Again",
        });
      }
    },
    logout() {
      localStorage.clear();
      this.isLogin = false;
    },
  },
});

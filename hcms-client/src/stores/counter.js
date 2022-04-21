import { defineStore } from "pinia";
import axios from "axios";
import Swal from "sweetalert2";
const BASE_URL = "http://localhost:3000";

export const useCounterStore = defineStore({
  id: "counter",
  state: () => ({
    counter: 0,
    ailments: [],
    readDoctors: [],
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
  },
  actions: {
    increment() {
      this.counter++;
    },
    async getAilments(input) {
      console.log(input, "input get ailment <<<<<");
      if (input.symptomp1 === "") {
        Swal.fire({
          title: "Error!",
          text: "first symptomp must be filled",
          icon: "error",
          confirmButtonText: "Ok",
        });
      } else {
        const options = {
          method: "GET",
          url: "https://priaid-symptom-checker-v1.p.rapidapi.com/diagnosis",
          params: {
            gender: "male",
            year_of_birth: "1984",
            symptoms: `[${input.symptomp1},${input.symptomp2},${input.symptomp3}]`,
            language: "en-gb",
          },
          headers: {
            "X-RapidAPI-Host": "priaid-symptom-checker-v1.p.rapidapi.com",
            "X-RapidAPI-Key":
              "bb088dc3c4msh1af0d175453527ep16d716jsn8b8330b43a1b",
          },
        };
        try {
          const response = await axios.request(options);
          console.log(response, "<<<< response store");
          if (response.data.length === 0) {
            Swal.fire({
              title: "Error!",
              text: "Sorry, we cannot find your ailments",
              icon: "error",
              confirmButtonText: "Ok",
            });
          }
          this.ailments = response;
        } catch (err) {
          console.log(err);
          Swal.fire({
            title: "Error!",
            text: "Sorry, we cannot find your ailments",
            icon: "error",
            confirmButtonText: "Ok",
          });
        }
      }
    },

    async getDoctors() {
      console.log("getDoctorsStore");
      try {
        const response = await axios({
          method: "GET",
          url: `${BASE_URL}/patient/read`,
        });
        this.readDoctors = response;
      } catch (err) {
        Swal.fire({
          title: "Error!",
          text: "Sorry, there is problem",
          icon: "error",
          confirmButtonText: "Ok",
        });
      }
    },

    async register(payload) {
      await axios({
        method: "POST",
        url: "/patient/register",
        data: {
          username: payload.username,
          password: payload.password,
          email: payload.email,
          phoneNumber: payload.phoneNumber,
          address: payload.address,
        },
      });
    },

    async loginP(payload) {
      const response = await axios({
        method: "POST",
        url: "/customer/login",
        data: {
          username: payload.username,
          password: payload.password,
        },
      });
      console.log(response, "<<< response pada saat login");
      localStorage.setItem("access_token", response.data.access_token);
      localStorage.setItem("customer_id", response.data.customer_id);
      localStorage.setItem(
        "customer_username",
        response.data.customer_username
      );
      this.access_token1 = response.data.access_token;
      this.$router.push("/");
    },
  },
});

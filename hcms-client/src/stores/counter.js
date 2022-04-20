import { defineStore } from "pinia";
import axios from "axios";
import Swal from "sweetalert2";

export const useCounterStore = defineStore({
  id: "counter",
  state: () => ({
    counter: 0,
    ailments: [],
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
  },
});

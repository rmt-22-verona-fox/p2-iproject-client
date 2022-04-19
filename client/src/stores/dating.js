import { defineStore } from "pinia";
import axios from "axios";

export const useDatingStore = defineStore({
  id: "dating",
  state: () => ({
    dataUser: "",
  }),
  getters: {},
  actions: {
    logIn(data) {
      return axios.post("http://localhost:3000/users/login", {
        email: data.email,
        password: data.password,
      });
    },
    register(data) {
      console.log(data);
      return axios.post("http://localhost:3000/users/register", {
        email: data.email,
        password: data.password,
      });
    },
    profile() {
      return axios.get("http://localhost:3000/users/profile", {
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      });
    },
    updateProfile(data) {
      console.log(data.formProfile.name);
      return axios.post(
        "http://localhost:3000/users/addprofile",
        {
          FormData: data.formdata,
          name: data.formProfile.name,
          age: data.formProfile.age,
          gender : data.formProfile.gender,
          phoneNumber: data.formProfile.phoneNumber,
          address : data.formProfile.address
        },
        {
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        }
      );
    },
  },
});

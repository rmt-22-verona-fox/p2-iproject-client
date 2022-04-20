import { defineStore } from "pinia";
import axios from "axios";

export const useDatingStore = defineStore({
  id: "dating",
  state: () => ({
    ProfilesList: [],
    List: [],
    status: [],
    Partner: [],
  }),
  getters: {
    phtotofilter: (state) =>
      state.ProfilesList.map((e) => {
        let obj = {
          id: e.id,
          name: e.name,
          gender: e.gender,
          age: e.age,
          phoneNumber: e.phoneNumber,
          address: e.address,
          photoProfile: `http://localhost:3000/images/${e.photoProfile}`,
          UserId: e.UserId,
        };
        return obj;
      }),
  },
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
      return axios.post("http://localhost:3000/users/addprofile", data, {
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      });
    },
    async listProfile() {
      try {
        const { data } = await axios.get(
          "http://localhost:3000/users/listprofile",
          {
            headers: {
              access_token: localStorage.getItem("access_token"),
            },
          }
        );
        this.ProfilesList = data;
      } catch (error) {
        console.log(error.response.data.message);
      }
    },
    async addPartner(id) {
      try {
        await axios.post(
          "http://localhost:3000/users/addPartner",
          { ProfileId: id },
          {
            headers: {
              access_token: localStorage.getItem("access_token"),
            },
          }
        );
      } catch (error) {
        console.log(error.response.data.message);
      }
    },
    async listRequest() {
      try {
        const { data } = await axios.get(
          "http://localhost:3000/users/listpartner",
          {
            headers: {
              access_token: localStorage.getItem("access_token"),
            },
          }
        );

        this.List = [data];
      } catch (error) {
        console.log(error.response.data.message);
      }
    },
    async cencelRequest(id) {
      try {
        console.log(id);
        await axios.post(
          "http://localhost:3000/users/cencel",
          {
            id,
          },
          {
            headers: {
              access_token: localStorage.getItem("access_token"),
            },
          }
        );
        this.List = [];
      } catch (error) {
        console.log(error.response.data.message);
      }
    },
    async accept(id) {
      try {
        await axios.patch(
          "http://localhost:3000/users/accept",
          {
            id,
          },
          {
            headers: {
              access_token: localStorage.getItem("access_token"),
            },
          }
        );
      } catch (error) {
        console.log(error.response.data.message);
      }
    },
    async yourPartner() {
      try {
        const { data } = await axios.get(
          "http://localhost:3000/users/partner",
          {
            headers: {
              access_token: localStorage.getItem("access_token"),
            },
          }
        );
        this.Partner = data;
        this.List = false
      } catch (error) {
        console.log(error.response.data.message);
      }
    },
  },
});

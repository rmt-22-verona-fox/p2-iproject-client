import { defineStore } from "pinia";
import axios from "axios";

export const useDatingStore = defineStore({
  id: "dating",
  state: () => ({
    ProfilesList: [],
    List: [],
    status: [],
    Partner: [],
    trailer: [],
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
          photoProfile: `https://dating-kacau.herokuapp.com/images/${e.photoProfile}`,
          UserId: e.UserId,
        };
        return obj;
      }),
  },
  actions: {
    logIn(data) {
      console.log(data);
      return axios.post("https://dating-kacau.herokuapp.com/users/login", {
        email: data.email,
        password: data.password,
      });
    },
    register(data) {
      console.log(data);
      return axios.post("https://dating-kacau.herokuapp.com/users/register", {
        email: data.email,
        password: data.password,
      });
    },
    profile() {
      return axios.get("https://dating-kacau.herokuapp.com/users/profile", {
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      });
    },
    updateProfile(data) {
      return axios.post("https://dating-kacau.herokuapp.com/users/addprofile", data, {
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      });
    },
    async listProfile() {
      try {
        const { data } = await axios.get(
          "https://dating-kacau.herokuapp.com/users/listprofile",
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
          "https://dating-kacau.herokuapp.com/users/addPartner",
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
          "https://dating-kacau.herokuapp.com/users/listpartner",
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
          "https://dating-kacau.herokuapp.com/users/cencel",
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
          "https://dating-kacau.herokuapp.com/users/accept",
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
          "https://dating-kacau.herokuapp.com/users/partner",
          {
            headers: {
              access_token: localStorage.getItem("access_token"),
            },
          }
        );
        this.Partner = data;
        this.List = false;
      } catch (error) {
        console.log(error.response.data.message);
      }
    },
    async Imdb(data) {
      try {
        console.log(data);
        console.log("mantap");
        const movie = await axios.get(
          `https://imdb-api.com/en/API/SearchMovie/k_z1dtmxor/${data}`
        );
        console.log(movie);

        const trailer = await axios.get(
          `https://imdb-api.com/en/API/Trailer/k_z1dtmxor/${movie.data.results[0].id}`
        );
        this.trailer = trailer.data;
        console.log(trailer.data);
      } catch (error) {}
    },
    sendEmail(data) {
      return axios.post("https://dating-kacau.herokuapp.com/users/forgorpassword", {
        email: data,
      });
    },
    reset(data) {
      console.log(data);
      return axios.patch("https://dating-kacau.herokuapp.com/users/reserpassword", data);
    },
  },
});

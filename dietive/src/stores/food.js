import { defineStore } from 'pinia'
import axios from 'axios'
import dummy from '../../dummy.json'
import articles from '../../articles.json'
import swal from 'sweetalert';

export const useFoodStore = defineStore({
  id: "food",
  state: () => ({
    baseUrl: "https://dietive.herokuapp.com",
    allFoodData: [],
    province: [],
    city: [],
    isLogin: false,
    userFood: [],
    userInfo: [],
    allArticles: [],
    userDetail: [],
    status: ""
  }),

  actions: {
    async searchFeature(keyword) {
      try {
         const response = await axios.get("https://api.spoonacular.com/recipes/complexSearch", {
           params: {
            apiKey: "abce0ccd9f8c4d4ab2bc324e01d96e2b",
            minCalories: 0,
            number: 6,
            minFat: 0,
            sort: "calories",
            query: keyword
           }
         })

        this.allFoodData = response.data.results;
      } catch (err) {
        const error = err.response.statusText;
        swal("Error", error, "error");
      }
    },
    async getAllProvince() {
      try {
        const response = await axios.get(
          "https://dev.farizdotid.com/api/daerahindonesia/provinsi"
        );
        this.province = response.data.provinsi;
      } catch (err) {
        const error = err.response.statusText;
        swal("Error", error, "error");
      }
    },
    async getAllCities(id) {
      try {
        const response = await axios.get(
          `https://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=${id}`
        );
        this.city = response.data.kota_kabupaten;
      } catch (err) {
        const error = err.response.statusText;
        swal("Error", error, "error");
      }
    },
    async registerAction(payload) {
      try {
        const response = await axios.post(`${this.baseUrl}/register`, payload);
        swal("Success", `Success registrating user with email ${response.data.data.email}`, "success");
      } catch (err) {
        const error = err.response.data.error.message.join("\n");
        swal("Error!", error, "error");
      }
    },
    async loginAction(payload) {
      try {
        const response = await axios.post(`${this.baseUrl}/login`, payload);
        localStorage.setItem("access_token", response.data.access_token)
        localStorage.setItem("email", response.data.data.email)
        localStorage.setItem("dailyCalories", response.data.data.dailyCalories)
        this.isLogin = true
      } catch (err) {
        const error = err.response.data.error.message;
        swal("Error!", error, "error");
      }
    },
    async contactUsAction(payload) {
      try {
        await axios.post(`${this.baseUrl}/contactUs`, payload);
        swal("Success", `Success sent email to us. Thank you!`, "success");
      } catch (err) {
        const error = err.response.statusText;
        swal("Error", error, "error");
      }
    },
    async logoutAction() {
      try {
        localStorage.removeItem("access_token")
        localStorage.removeItem("email")
        localStorage.removeItem("dailyCalories")
        this.isLogin = false
      } catch (err) {
        const error = err.response.statusText;
        swal("Error", error, "error");
      }
    },
    async getUserFood() {
      try {
        const token =  localStorage.getItem("access_token")
        const response = await axios.get(`${this.baseUrl}/food`, {
          headers: {
            access_token: token
          }
        });
        this.userFood = response.data.data
        this.userInfo= response.data.user
      } catch (err) {
        if (err.response.status === 401) {
          this.isLogin = false;
          await this.logoutAction();
          const error = err.response.data.message;
          swal("Error", error, "error");
        } else {
          const error = err.response.statusText;
          swal("Error", error, "error");
        }
      }
    },
    async addFoodAction(payload) {
      try {
        const token =  localStorage.getItem("access_token")
        await axios.post(`${this.baseUrl}/food`, payload, {
          headers: {
            access_token: token
          }
        });

        swal("Success", `Success add food to your food list!`, "success");

      } catch (err) {
        if (err.response.status === 401) {
          this.isLogin = false;
          await this.logoutAction();
          const error = err.response.data.message;
          swal("Error", error, "error");
        } else {
          const error = err.response.statusText;
          swal("Error", error, "error");
        }
      }
    },
    async resetFoodAction() {
      try {
        const token = localStorage.getItem("access_token")
        await axios.delete(`${this.baseUrl}/food`, {
          headers: {
            access_token: token
          }
        });

        swal("Success", `Success reset food list!`, "success");

      } catch (err) {
        if (err.response.status === 401) {
          this.isLogin = false;
          await this.logoutAction();
          const error = err.response.data.message;
          swal("Error", error, "error");
        } else {
          const error = err.response.statusText;
          swal("Error", error, "error");
        }
      }
    },
    async deleteFoodAction(id) {
      try {
        const token = localStorage.getItem("access_token")
        await axios.delete(`${this.baseUrl}/food/${id}`, {
          headers: {
            access_token: token
          }
        });
        swal("Success", `Success delete food from your food list!`, "success");

      } catch (err) {
        if (err.response.status === 401) {
          this.isLogin = false;
          await this.logoutAction();
          const error = err.response.data.message;
          swal("Error", error, "error");
        } else {
          const error = err.response.statusText;
          swal("Error", error, "error");
        }
      }
    },
    async premiumArticle() {
      try {
        const data = articles;
        this.allArticles = data;
      } catch (err) {
        if (err.response.status === 401) {
          this.isLogin = false;
          await this.logoutAction();
          const error = err.response.data.message;
          swal("Error", error, "error");
        } else {
          const error = err.response.statusText;
          swal("Error", error, "error");
        }
      }
    },
    async getUserData() {
      try {
        const token = localStorage.getItem("access_token")
        const response = await axios.get(`${this.baseUrl}/users`, {
          headers: {
            access_token: token
          }
        });
        this.userDetail = response.data.user;
      } catch (err) {
        if (err.response.status === 401) {
          this.isLogin = false;
          await this.logoutAction();
          const error = err.response.data.message;
          swal("Error", error, "error");
        } else {
          const error = err.response.statusText;
          swal("Error", error, "error");
        }
      }
    },
    async premiumPay() {
      try {
        const token = localStorage.getItem("access_token")
        const response = await axios.post(`${this.baseUrl}/payment`, {}, {
          headers: {
            access_token: token
          }
        });
        const tokenToPay = response.data.token

        await snap.pay(tokenToPay, {
  
          onSuccess: function(result) {
            this.status = 'success'
            swal("Success", `Payment success, happy reading!`, "success");

          },
        })

        await this.updateUser()
        await this.premiumArticle()

      } catch (err) {
        if (err.response.status === 401) {
          this.isLogin = false;
          await this.logoutAction();
          const error = err.response.data.message;
          swal("Error", error, "error");
        } else {
          const error = err.response.statusText;
          swal("Error", error, "error");
        }
      }
    },
    async updateUser() {
      try {
        const token = localStorage.getItem("access_token")
     
        await axios.patch(`${this.baseUrl}/users`, {}, {
          headers: {
            access_token: token
          }
        });
        
      } catch (err) {
        if (err.response.status === 401) {
          this.isLogin = false;
          await this.logoutAction();
          const error = err.response.data.message;
          swal("Error", error, "error");
        } else {
          const error = err.response.statusText;
          swal("Error", error, "error");
        }
      }
    },
  },
});

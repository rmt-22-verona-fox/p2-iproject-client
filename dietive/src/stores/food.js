import { defineStore } from 'pinia'
import axios from 'axios'
import dummy from '../../dummy.json'
import articles from '../../articles.json'

export const useFoodStore = defineStore({
  id: "food",
  state: () => ({
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
    async loginAction(payload) {
      try {
        const response = await axios.post("http://localhost:3000/login", payload);
        localStorage.setItem("access_token", response.data.access_token)
        localStorage.setItem("email", response.data.data.email)
        localStorage.setItem("dailyCalories", response.data.data.dailyCalories)
        this.isLogin = true
      } catch (err) {
        console.log(err);
      }
    },
    async contactUsAction(payload) {
      try {
        const response = await axios.post("http://localhost:3000/contactUs", payload);
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    },
    async logoutAction() {
      try {
        localStorage.removeItem("access_token")
        localStorage.removeItem("email")
        localStorage.removeItem("dailyCalories")
        this.isLogin = false
      } catch (err) {
        console.log(err);
      }
    },
    async getUserFood() {
      try {
  
        const token =  localStorage.getItem("access_token")
        const response = await axios.get("http://localhost:3000/food", {
          headers: {
            access_token: token
          }
        });

        console.log(response.data);
        this.userFood = response.data.data
        this.userInfo= response.data.user
      } catch (err) {
        console.log(err);
      }
    },
    async addFoodAction(payload) {
      try {
        const token =  localStorage.getItem("access_token")
        const response = await axios.post("http://localhost:3000/food", payload, {
          headers: {
            access_token: token
          }
        });

        console.log(response.data);
      } catch (err) {
        console.log(err);
      }
    },
    async resetFoodAction() {
      try {
        const token = localStorage.getItem("access_token")
        const response = await axios.delete("http://localhost:3000/food", {
          headers: {
            access_token: token
          }
        });

        console.log(response.data);
      } catch (err) {
        console.log(err);
      }
    },
    async deleteFoodAction(id) {
      try {
        const token = localStorage.getItem("access_token")
        const response = await axios.delete(`http://localhost:3000/food/${id}`, {
          headers: {
            access_token: token
          }
        });

        console.log(response.data);
      } catch (err) {
        console.log(err.response);
      }
    },
    async premiumArticle() {
      try {
        const data = articles;

        this.allArticles = data;
      } catch (err) {
        console.log(err);
      }
    },
    async getUserData() {
      try {
        const token = localStorage.getItem("access_token")
        const response = await axios.get(`http://localhost:3000/users`, {
          headers: {
            access_token: token
          }
        });
        this.userDetail = response.data.user;
        console.log(this.userDetail);
      } catch (err) {
        console.log(err);
      }
    },
    async premiumPay() {
      try {
        const token = localStorage.getItem("access_token")
        const response = await axios.post(`http://localhost:3000/payment`, {}, {
          headers: {
            access_token: token
          }
        });
        const tokenToPay = response.data.token
        
        console.log(tokenToPay);

        await snap.pay(tokenToPay, {
  
          onSuccess: function(result) {
            this.status = 'success'
          },
        })

        await this.updateUser()
        await this.premiumArticle()

      } catch (err) {
        console.log(err.response.data);
      }
    },
    async updateUser() {
      try {
        const token = localStorage.getItem("access_token")
        console.log('masukkk');
        const response = await axios.patch(`http://localhost:3000/users`, {}, {
          headers: {
            access_token: token
          }
        });
      
        
      } catch (err) {
        console.log(err.response);
      }
    },
  },
});

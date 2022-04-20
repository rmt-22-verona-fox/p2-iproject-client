import { defineStore } from 'pinia'
import axios from "@/api/axios";

export const useInventoryStore = defineStore({
  id:'inventory',
  state: () => ({
    isLogin: false,
    posts:[],
    orders:[],
    orderPayment:[],
  }),
  getters: {
  
  },
  actions: {
    isloginAction(payload) {
      this.isLogin = payload
    },
    loginAction(payload) {
    return axios.post("/login", {
    email: payload.email,
    password: payload.password,
    });
    },
    addPostAction(payload) {
    return axios.post("/post/add", 
        {
          location: payload.location,
          category: payload.category,
          imageUrl: payload.imageUrl,
          description: payload.description
        },
        {
            headers:{
              access_token: localStorage.getItem("access_token")
            }
        }
    );
  },
  orderAction(payload){
      console.log(payload);
    return axios.post(`/order/add/${payload.postId}`, {
    location: payload.location,
    message: payload.message,
      },
    {
    headers:{
    access_token: localStorage.getItem("access_token")
    },
    }
    );
  },
  async getPostId(id){
    try {
    await axios.get(`/post/${id}`);
    } catch (error) {
      console.log("error: ", error);
    }
  },
  async getOrderId(id){
    try {
    await axios.get(`/order/${id}`);
    } catch (error) {
      console.log("error: ", error);
    }
  },
  async getPost(){
    try {
    const {data} = await axios.get("/post");
    this.posts = data;
    } catch (error) {
      console.log("error: ", error);
    }
  },
  async orderPay(){
    try {
    const {data} = await axios.get("/order/pay");
    this.orderPayment = data;
    } catch (error) {
      console.log("error: ", error);
    }
  }
}
})

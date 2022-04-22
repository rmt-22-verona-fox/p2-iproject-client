import { defineStore } from 'pinia'
import axios from "@/api/axios";

export const useInventoryStore = defineStore({
  id:'inventory',
  state: () => ({
    isLogin: false,
    posts:[],
    orders:[],
    orderPayment:[],
    payment:[],
    myorder:[]
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
    console.log(payload,"masuk action");
    let formData = new FormData()
    formData.append("location",payload.location)
    formData.append("description",payload.description)
    formData.append("categoryId",payload.categoryId)
    formData.append("imageUrl",payload.imageUrl)
    return axios.post("/post", 
        formData,
        {
        headers:{
            'Content-Type': 'multipart/form-data',
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
    const data = await axios.get(`/order`,
    {
      headers:{
        access_token: localStorage.getItem("access_token")
      }
    });
    this.myorder= data
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
  },
  async getpayment(){
    try {
      const respon = await axios.post("/order/pay",{},{
        headers:{
          access_token: localStorage.getItem("access_token")
        }
      })
      this.payment = respon.data;
    } catch (error) {
      console.log("error: ", error);
    }
  }
}
})

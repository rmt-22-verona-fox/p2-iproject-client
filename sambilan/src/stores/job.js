import { defineStore } from "pinia";
import axios from "axios";
import Swal from "sweetalert2";
import router from '@/router'

export const useJobStore = defineStore({
  id: "job",
  state: () => ({
    serverUrl: "http://localhost:3000",
    provinces: [],
    jobs: [],
    isLogin: false,
    myApplications: [],
  }),
  getters: {},
  actions: {
    async getLocations() {
      try {
        const response = await axios.get(
          "https://dev.farizdotid.com/api/daerahindonesia/provinsi"
        );
        const data = response.data.provinsi;
        this.provinces = data;
      } catch (error) {
        new Swal("Error", "Internet Server Error", "error");
      }
    },

    async submitRegister(data) {
      try {
        const response = await axios.post(`${this.serverUrl}/register`, data);
        const result = response.data;
        await router.push('/login')
        new Swal(
          "Success",
          `User ${result.fullName} successfully created`,
          "success"
        );
      } catch (error) {
        const errorMessage = error.response.data.message;
        new Swal("Error", errorMessage, "error");
      }
    },

    async submitLogin(data) {
      try {
        const response = await axios.post(`${this.serverUrl}/login`, data);
        const result = response.data;
        localStorage.setItem('access_token', result.access_token)
        this.isLogin = true
        await router.push('/')
        new Swal(
          "Success",
          `Login successfully`,
          "success"
        );
      } catch (error) {
        const errorMessage = error.response.data.message;
        new Swal("Error", errorMessage, "error");
      }
    },

    async getJobs(filter) {
      try {
        const response = await axios.get(`${this.serverUrl}/jobs?title=${filter.title}&source=${filter.source}&remote=${filter.remote}`, {
          headers: 
            {
              access_token: localStorage.access_token,
            }
        });
        const data = response.data;
        this.jobs = data
      } catch (error) {
        const errorMessage = error.response.data.message;
        new Swal("Error", errorMessage, "error");
      }
    },

    async addMyApplication(data) {
      try {
        const response = await axios.post(`${this.serverUrl}/myapplications`, data, {
          headers: 
          {
            access_token: localStorage.access_token,
          }
        })
        const result = response.data
        await router.push('/myapp')
        new Swal(
          "Success",
          `Job ${result.myApplication.jobId} successfully add to your application`,
          "success"
        );
      } catch (error) {
        const errorMessage = error.response.data.message;
        new Swal("Error", errorMessage, "error");
      }
    },

    async getMyApplications() {
      try {
        const response = await axios.get(`${this.serverUrl}/myapplications`, {
          headers: 
            {
              access_token: localStorage.access_token,
            }
        })
        const data = response.data
        this.myApplications = data
      } catch (error) {
        const errorMessage = error.response.data.message;
        new Swal("Error", errorMessage, "error");
      }
    },

    async updateStatusMyApplication(id) {
      try {
        const status = 'applied' 
        const response = await axios.patch(`${this.serverUrl}/myapplications/${id}`, {status}, {
          headers: 
            {
              access_token: localStorage.access_token,
            }
        })
        const result = response.data
        new Swal(
          "Success",
          `Job ${result.jobId} successfully applied, please check your email for more information`,
          "success"
        );
      } catch (error) {
        const errorMessage = error.response.data.message;
        new Swal("Error", errorMessage, "error");
      }
    },

    async deleteMyApplication(id) {
      try {
        const response = await axios.delete(`${this.serverUrl}/myapplications/${id}`, {
          headers: 
            {
              access_token: localStorage.access_token,
            }
        })
        const result = response.data
        new Swal(
          "Success",
          `Successfully deleted application`,
          "success"
        );
      } catch (error) {
        const errorMessage = error.response.data.message;
        new Swal("Error", errorMessage, "error");
      }
    }
  },
});

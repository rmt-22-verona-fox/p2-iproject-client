import { defineStore } from "pinia";
import { axiosPackage, axiosTestimony } from "../axios";

export const usePackageStore = defineStore({
  id: "package",
  state: () => ({
    promoPackageList: [],
    packageList: [],
    categoryList: [],
    homeTestimonyList: [],
    packageDetail: {},
    testimonyModalState: false,
  }),
  getters: {},
  actions: {
    renderPromoPackage() {
      return axiosPackage().get("/packages/promos");
    },

    renderAllPackage() {
      return axiosPackage().get("/packages/all");
    },

    renderPackageCategory() {
      return axiosPackage().get("/packages/categories");
    },

    renderUserTestimonies(destination) {
      return axiosPackage().get("/packages/testimonies", {
        params: {
          destination,
        },
      });
    },

    renderPackageDetail(id) {
      return axiosPackage().get(`/packages/${id}`);
    },

    storeUserTestimony(payload) {
      return axiosTestimony().post("/packages/testimonies", {
        review: payload.review,
        rating: payload.rating,
        destination: payload.destination,
      });
    },
  },
});

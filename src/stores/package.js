import { defineStore } from "pinia";
import { axiosPackage } from "../axios";

export const usePackageStore = defineStore({
  id: "package",
  state: () => ({
    promoPackageList: [],
    categoryList: [],
    homeTestimonyList: [],
    packageDetail: {},
  }),
  getters: {},
  actions: {
    renderPromoPackage() {
      return axiosPackage.get("/packages/promos");
    },

    renderPackageCategory() {
      return axiosPackage.get("/packages/categories");
    },

    renderUserTestimonies() {
      return axiosPackage.get("/packages/testimonies");
    },

    renderPackageDetail(id) {
      return axiosPackage.get(`/packages/${id}`);
    },
  },
});

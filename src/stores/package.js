import { defineStore } from "pinia";
import { axiosPackage } from "../axios";

export const usePackageStore = defineStore({
  id: "package",
  state: () => ({
    categoryList: [],
  }),
  getters: {},
  actions: {
    renderPackageCategory() {
      return axiosPackage.get("/packages/categories");
    },
  },
});

import { defineStore } from "pinia";
import { axiosTransaction } from "../axios";

export const useTransactionStore = defineStore({
  id: "transaction",
  state: () => ({
    profileHistoryList: [],
    noHistoryMessage: "",
  }),
  getters: {},
  actions: {
    fetchProfileHistory() {
      return axiosTransaction().get("/profile");
    },
  },
});

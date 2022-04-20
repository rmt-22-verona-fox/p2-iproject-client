import { defineStore } from "pinia";
import { axiosTransaction } from "../axios";

export const useTransactionStore = defineStore({
  id: "transaction",
  state: () => ({
    profileHistoryList: [],
    noHistoryMessage: "",
    verificationModalState: false,
    checkoutModalState: false,
    priceToPayState: 0,
    packageId: 0,
  }),
  getters: {},
  actions: {
    fetchProfileHistory() {
      return axiosTransaction().get("/profile");
    },

    verifyEmail(verificationCode) {
      return axiosTransaction().post("/user/verify", {
        verificationCode,
      });
    },

    paymentHandler(payload) {
      return axiosTransaction().post("/profile/payment", {
        amount: payload.amount,
        fullName: localStorage.getItem("name"),
        email: localStorage.getItem("email"),
      });
    },

    checkoutHandler(payload) {
      return axiosTransaction().post("/profile/checkout", {
        packageId: this.packageId,
        packageQty: payload.packageQty,
      });
    },
  },
});

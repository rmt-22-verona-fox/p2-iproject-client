<script>
import { mapWritableState } from "pinia";
import { useAuthStore } from "./stores/auth";
import VerificationModal from "@/components/VerificationModal/index.vue";
import CheckoutModal from "@/components/CheckoutModal/index.vue";
import TestimonyModal from "@/components/TestimonyModal/index.vue";
import Layout from "@/components/layout/Layout.vue";

export default {
  components: {
    Layout,
    VerificationModal,
    CheckoutModal,
    TestimonyModal,
  },

  computed: {
    ...mapWritableState(useAuthStore, ["isLoggedIn"]),
  },

  created() {
    if (localStorage.getItem("access_token")) {
      this.isLoggedIn = true;
    }
  },
};
</script>

<template>
  <VerificationModal />
  <CheckoutModal />
  <TestimonyModal />

  <router-view></router-view>
</template>

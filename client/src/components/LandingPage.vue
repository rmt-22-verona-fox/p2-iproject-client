<script>
import LoginForm from "./LoginForm.vue";
import PrayerTime from "./PrayerTime.vue";
import RegisterForm from "./RegisterForm.vue";
import { mapActions, mapState } from "pinia";
import { useLoginStore } from "../stores/LoginStore";
export default {
  data() {
    return {
      login: {
        email: "",
        password: "",
      },
    };
  },
  components: {
    LoginForm,
    PrayerTime,
    RegisterForm,
  },
  computed: {
    ...mapState(useLoginStore, ["registerForm", "loginForm"]),
  },
};
</script>

<template>
  <div class="container-fluid">
    <div
      class="d-flex landingPageHeight justify-content-center align-items-center"
    >
      <PrayerTime />
      <LoginForm v-if="loginForm" />
      <RegisterForm v-if="registerForm" />
    </div>
  </div>
</template>

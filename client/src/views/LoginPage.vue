<script>
import { mapActions } from "pinia";
import { useCustomerStore } from "../stores/customer";
export default {
  name: "LoginPage",
  data() {
    return {
      userLogin: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions(useCustomerStore, ["login", "loginGoogle"]),

    async loginButtonHandler() {
      try {
        const { data } = await this.login(this.userLogin);

        localStorage.setItem("access_token", data.access_token);
        localStorage.setItem("CustomerId", data.CustomerId);

        // this.$router.push("/");
        this.$toast.success(data.message, {
          position: "top-right",
          duration: 3000,
        });
      } catch (error) {
        this.$toast.error(error.response.data.message, {
          position: "top-right",
          duration: 3000,
        });
      }
    },
  },
};
</script>

<template>
  <form>
    <input type="text" placeholder="Email" v-model="userLogin.email" />
    <input
      type="password"
      placeholder="Password"
      v-model="userLogin.password"
    />
    <button type="submit" @click.prevent="loginButtonHandler">Login</button>
  </form>
</template>

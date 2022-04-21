<template>
  <!-- LoginPage -->
  <section>
    <div class="container">
      <div class="form-container">
        <form @submit.prevent="LoginEventHandler">
          <h1>Sign In</h1>
          <div class="form-group">
            <input type="text" required v-model="userData.email" />
            <label>Email or phone number</label>
          </div>
          <div class="form-group">
            <input type="password" required v-model="userData.password" />
            <label>Password</label>
          </div>
          <button type="submit">Sign In</button>
          <div class="facebook-login">
            <img src="@/assets/images/fb-logo.png" />
            <a href="#">Login with Facebook</a>
          </div>
          <div class="signup">
            <p>
              New to Movflix?
              <router-link to="/register">Sign up now</router-link>
            </p>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions } from "pinia";
import { useAuthStore } from "@/stores/auth";
export default {
  data() {
    return {
      userData: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions(useAuthStore, ["loginHandler"]),
    async LoginEventHandler() {
      try {
        const response = await this.loginHandler(this.userData);
        localStorage.setItem("access_token", response.data.access_token);
        localStorage.setItem("email", response.data.email);
        const Toast = this.$swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: "success",
          title: "Signed in successfully",
        });
        this.$router.push("/");
      } catch (error) {
        this.$swal({
          icon: "error",
          title: "Oops...",
          text: `${error.response.data}`,
        });
      }
    },
  },
};
</script>

<style></style>

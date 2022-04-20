<script>
import { mapActions } from "pinia";
import { useUserStore } from "../stores/user";
import ThreeComponent from "../components/ThreeComponent.vue";
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  components: {
    ThreeComponent,
  },
  methods: {
    ...mapActions(useUserStore, ["loginAction"]),
    async loginEvent() {
      try {
        const login = await this.loginAction({
          email: this.email,
          password: this.password,
        });
        localStorage.setItem("access_token", login.data.access_token);
        localStorage.setItem("name", login.data.name);
        this.$router.push("/");
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Login Successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
        // this.isLogin = true;
      } catch (err) {
        if (typeof err.response.data.error.message === "string") {
          Swal.fire({
            position: "center",
            icon: "warning",
            title: err.response.data.error.message,
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          Swal.fire({
            position: "center",
            icon: "warning",
            title: err.response.data.error.message.join(`, \n`),
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    },
  },
  props: {},
  created() {},
};
</script>

<template>
  <!-- login-page -->
  <img src="@/assets/logo.png" />
  <div class="login-page">
    <div class="container">
      <div class="row">
        <div class="col-sm-6 col-md-7 intro-section">
          <div class="intro-content-wrapper">
            <h1 class="intro-title">Welcome to Bligspit !</h1>
          </div>
        </div>
        <div class="col-sm-6 col-md-5 form-section">
          <div class="login-wrapper">
            <h2 class="login-title">Sign in</h2>
            <form @submit.prevent="loginEvent()">
              <div class="form-group">
                <label for="email" class="sr-only">Email</label>
                <input
                  type="email"
                  name="email"
                  class="form-control"
                  placeholder="Email"
                  v-model="email"
                />
              </div>
              <div class="form-group mb-3">
                <label for="password" class="sr-only">Password</label>
                <input
                  type="password"
                  name="password"
                  class="form-control"
                  placeholder="Password"
                  v-model="password"
                />
              </div>
              <div
                class="d-flex justify-content-between align-items-center mb-5"
              >
                <input
                  name="login"
                  class="btn login-btn btn-primary"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
            <p class="login-wrapper-footer-text">
              Need an account? <router-link to="/register">Sign Up</router-link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

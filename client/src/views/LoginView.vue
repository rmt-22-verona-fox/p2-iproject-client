<script>
import { mapActions, mapWritableState } from "pinia";
import { useUserStore } from "../stores/user";
import ThreeComponent from "../components/ThreeComponent.vue";
import NavBar from "../components/NavBar.vue";
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  components: {
    ThreeComponent,
    NavBar,
  },
  computed: {
    ...mapWritableState(useUserStore, ["isLogin"]),
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
        this.isLogin = true;
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
  <NavBar></NavBar>
  <!-- login-page -->
  <div class="login-page">
    <div class="container">
      <div class="row">
        <div class="col-sm-6 col-md-7 intro-section">
          <div class="intro-content-wrapper">
            <h1 class="intro-title">Buy 100% Authentic Sneakers !</h1>
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

<style scoped>
.login-page {
  background-image: linear-gradient(
    90deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(136, 136, 136, 0.896796218487395) 42%,
    rgba(94, 103, 113, 0.8295693277310925) 100%
  );
  background-size: cover;
  position: absolute;

  top: 11%;
  right: 0px;
  bottom: 0px;
  left: 0px;
}

.container {
  margin-top: 10%;
}
</style>

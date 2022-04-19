<script>
import { mapActions } from "pinia";
import { useDatingStore } from "@/stores/dating";
export default {
  data() {
    return {
      header: "Login to continue",
      formlogin: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions(useDatingStore, ["logIn"]),
    async signInbtn() {
      try {
        const { data } = await this.logIn(this.formlogin);
        localStorage.setItem("access_token", data.access_token);
        this.$swal({
          icon: "success",
          text: "Success to Register",
        });
        this.$router.push("/");
      } catch (error) {
        this.$swal({
          icon: "error",
          title: "Oops...",
          text: error.response.data.message,
        });
      }
    },
  },
};
</script>

<template>
  <div class="limiter">
    <div class="container-login100">
      <div class="wrap-login100">
        <form class="login100-form validate-form">
          <span class="login100-form-title p-b-43"> {{ header }} </span>

          <div
            class="wrap-input100 validate-input"
            data-validate="Valid email is required: ex@abc.xyz"
          >
            <input
              class="input100"
              type="text"
              name="email"
              v-model="formlogin.email"
              placeholder="Email"
            />
            <span class="focus-input100"></span>
          </div>

          <div
            class="wrap-input100 validate-input"
            data-validate="Password is required"
          >
            <input
              class="input100"
              type="password"
              name="pass"
              placeholder="Password"
              v-model="formlogin.password"
            />
            <span class="focus-input100"></span>
          </div>

          <div class="flex-sb-m w-full p-t-3 p-b-32">
            <div class="contact100-form-checkbox"></div>

            <div>
              <a href="#" class="txt1"> Forgot Password? </a>
            </div>
          </div>

          <div class="container-login100-form-btn">
            <button class="login100-form-btn" @click.prevent="signInbtn">
              Login
            </button>
          </div>
          <div class="text-center p-t-46 p-b-20">
            <router-link to="/register" href="" class="signUpbtn">
              sign up
            </router-link>
          </div>
          <div class="text-center p-t-46 p-b-20">
            <span class="txt2"> or sign up using </span>
          </div>

          <div class="login100-form-social flex-c-m">
            <a href="#" class="login100-form-social-item flex-c-m bg1 m-r-5">
              <i class="fab fa-facebook-f"></i>
            </a>

            <a href="#" class="login100-form-social-item flex-c-m bg2 m-r-5">
              <i class="fa-brands fa-twitter"></i>
            </a>
          </div>
        </form>

        <div class="login100-more"></div>
      </div>
    </div>
  </div>
</template>

<style></style>

<script>
import { mapActions } from "pinia";
import { useDatingStore } from "@/stores/dating";
export default {
  data() {
    return {
      header: "Sign Up",
      registerForm: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions(useDatingStore, ["register"]),
    async signUpbtn() {
      try {
        await this.register(this.registerForm);
        this.$swal({
          icon: "success",
          text: "Success to Register",
        });
        this.$router.push("/login");
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
              placeholder="Email"
              v-model="registerForm.email"
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
              v-model="registerForm.password"
            />
            <span class="focus-input100"></span>
          </div>

          <div class="flex-sb-m w-full p-t-3 p-b-32">
            <div class="contact100-form-checkbox">
              <input
                class="input-checkbox100"
                id="ckb1"
                type="checkbox"
                name="remember-me"
              />
            </div>
          </div>

          <div class="container-login100-form-btn">
            <button class="login100-form-btn" @click.prevent="signUpbtn">
              Sign Up
            </button>
          </div>
          <div class="text-center p-t-46 p-b-20">
            <span>already have account?</span>
            <router-link to="/login" href="" class="signUpbtn">
              sign in
            </router-link>
          </div>
        </form>

        <div class="login100-more"></div>
      </div>
    </div>
  </div>
</template>

<style></style>

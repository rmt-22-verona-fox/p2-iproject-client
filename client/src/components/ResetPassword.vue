<script>
import { mapActions } from "pinia";
import { useDatingStore } from "@/stores/dating";
export default {
  data() {
    return {
      header: "Reset  Password",
      resetpass: {
        password1: "",
        password2: "",
        id: this.$route.params.id,
      },
    };
  },
  methods: {
    ...mapActions(useDatingStore, ["reset"]),
    async resetsend() {
      try {
        await this.reset(this.resetpass);
        this.$swal({
          icon: "success",
          text: "Password has been reset",
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
              v-model="resetpass.password1"
              placeholder="password"
            />
            <span class="focus-input100"></span>
          </div>
          <div
            class="wrap-input100 validate-input"
            data-validate="Valid email is required: ex@abc.xyz"
          >
            <input
              class="input100"
              type="text"
              name="email"
              v-model="resetpass.password2"
              placeholder="retype password"
            />
            <span class="focus-input100"></span>
          </div>

          <div class="container-login100-form-btn">
            <button class="login100-form-btn" @click.prevent="resetsend">
              reset
            </button>
          </div>
        </form>

        <div class="login100-more"></div>
      </div>
    </div>
  </div>
</template>

<style></style>

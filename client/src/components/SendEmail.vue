<script>
import { mapActions } from "pinia";
import { useDatingStore } from "@/stores/dating";
export default {
  data() {
    return {
      header: "Reset  Password",
      email: "",
    };
  },
  methods: {
    ...mapActions(useDatingStore, ["sendEmail"]),
    async send() {
      try {
        await this.sendEmail(this.email);
        this.$router.push("/reset");
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
              v-model="email"
              placeholder="Send your email"
            />
            <span class="focus-input100"></span>
          </div>

          <div class="container-login100-form-btn">
            <button class="login100-form-btn" @click.prevent="send">
              Send
            </button>
          </div>
             <router-link to="/login" href="" class="signIn">
              sign in
            </router-link>
        </form>

        <div class="login100-more"></div>
      </div>
    </div>
  </div>
</template>

<style>
.signIn{
    display: flex;
    margin-top: 70px;
    justify-content: center;
}

</style>

<template>
  <!-- Register -->
  <section>
    <div class="container">
      <div class="form-container">
        <form @submit.prevent="registerEventHandler">
          <h1>Register</h1>
          <div class="form-group">
            <input type="text" required v-model="userData.email" />
            <label>Email or phone number</label>
          </div>
          <div class="form-group">
            <input type="password" required v-model="userData.password" />
            <label>Password</label>
          </div>
          <button type="submit">Sign Up</button>

          <div class="signup">
            <p>
              Already Have an account?
              <router-link to="/login">Login now</router-link>.
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
    ...mapActions(useAuthStore, ["registerHandler"]),
    async registerEventHandler() {
      try {
        const response = await this.registerHandler(this.userData);
        his.$swal({
          position: "top-end",
          icon: "success",
          title: `Success register as ${response.data.email}`,
          showConfirmButton: false,
          timer: 1500,
        });
        this.$router.push("/login");
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

<style lang="scss" scoped></style>

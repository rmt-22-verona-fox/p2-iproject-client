<script>
import { mapActions } from "pinia";
import { useUserStore } from "@/stores/user";
export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      phoneNumber: "",
      address: "",
    };
  },
  components: {},
  methods: {
    ...mapActions(useUserStore, ["registerAction"]),
    async registerEvent() {
      try {
        const response = await this.registerAction({
          name: this.name,
          email: this.email,
          password: this.password,
          phoneNumber: this.phoneNumber,
          address: this.address,
        });
        Swal.fire({
          position: "center",
          icon: "success",
          title: response.data.message,
          showConfirmButton: false,
          timer: 1500,
        });
        this.$router.push("/login");
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
  <!-- register-page -->
  <div class="register-page">
    <div class="row g-3 align-items-center">
      <h2 class="login-title">Sign Up</h2>
      <form @submit.prevent="registerEvent()">
        <div class="form-group align-items-center">
          <label for="email" class="sr-only">Email</label>
          <input
            v-model="email"
            type="email"
            name="email"
            class="form-control"
            placeholder="Email"
          />
        </div>
        <div class="form-group mb-3">
          <label for="password" class="sr-only">Password</label>
          <input
            v-model="password"
            type="password"
            name="password"
            class="form-control"
            placeholder="Password"
          />
        </div>
        <div class="form-group mb-3">
          <label for="name" class="sr-only">Name</label>
          <input
            v-model="name"
            type="text"
            name="name"
            class="form-control"
            placeholder="name"
          />
        </div>
        <div class="form-group mb-3">
          <label for="phone-number" class="sr-only">Phone Number</label>
          <input
            v-model="phoneNumber"
            type="text"
            name="phone-number"
            class="form-control"
            placeholder="example: +62812345678"
          />
        </div>
        <div class="form-group mb-3">
          <label for="address" class="sr-only">Address</label>
          <input
            v-model="address"
            type="text"
            name="address"
            class="form-control"
            placeholder="Address"
          />
        </div>
        <div class="d-flex justify-content-between align-items-center mb-5">
          <input
            name="sign-up"
            class="btn sing-up-btn btn-primary"
            type="submit"
            value="Sign up"
          />
        </div>
      </form>
    </div>
  </div>
</template>

<style>
/* register-page */
.register-page {
  margin: 15%;
}
</style>

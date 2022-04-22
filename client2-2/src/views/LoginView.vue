<script>
import { mapActions } from "pinia";
import { useCounterStore } from "../stores/counter";

export default {
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
    };
  },

  methods: {
    ...mapActions(useCounterStore, ["loginAction", "setUsername"]),
    loginEvent() {
      this.loginAction(this.user);
    },
    SubmitEmail() {
      this.setUsername(this.user.email);
    },
  },
};
</script>

<template>
  <!-- Login Page -->
  <div class="container-fluid loginPage">
    <div class="loginSide">
      <h2 style="color: #06260b">Welcome Back</h2>
      <h6 class="mb-4" style="color: #9ac535">Please enter yout credentials</h6>
      <form @submit.prevent="loginEvent">
        <div class="loginField">
          <div class="mb-3 mt-3">
            <label class="form-label">Email</label>
            <input
              v-model="user.email"
              type="text"
              class="form-control"
              id="formGroupExampleInput"
              placeholder="Email"
              style="width: 30rem"
            />
          </div>
          <div class="mb-3">
            <label class="form-label">Password</label>
            <input
              v-model="user.password"
              type="text"
              class="form-control"
              id="formGroupExampleInput2"
              placeholder="Password"
            />
          </div>
          <button
            @click="SubmitEmail"
            type="submit"
            class="btn btn-success loginField mb-2"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<style>
.loginPage {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
}
</style>

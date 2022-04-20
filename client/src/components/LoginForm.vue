<script>
import { mapActions, mapWritableState } from "pinia";
import { useLoginStore } from "../stores/LoginStore";
export default {
  data() {
    return {
      login: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions(useLoginStore, ["submitLogin"]),

    toRegister() {
      this.loginForm = false;
      this.registerForm = true;
    },
  },
  computed: {
    ...mapWritableState(useLoginStore, ["loginForm", "registerForm"]),
  },
};
</script>

<template>
  <div class="col text-center">
    <div class="container w-75 my-5 bg-light rounded shadow" id="login-page">
      <div class="d-flex align-items-center">
        <div class="col p-5">
          <form @submit.prevent="submitLogin(login)">
            <h1 class="mb-3">Login</h1>
            <div class="mb-3 mx-5">
              <label for="exampleInputEmail1" class="form-label">Email</label>
              <input
                v-model="login.email"
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="mb-3 mx-5">
              <label for="exampleInputPassword1" class="form-label"
                >Password</label
              >
              <input
                v-model="login.password"
                type="password"
                class="form-control"
                id="exampleInputPassword1"
              />
            </div>

            <div class="text-center">
              <button type="submit" class="btn btn-primary">Login</button>
            </div>
            <p class="mt-3">
              Register <a @click.prevent="toRegister" style="text-decoration: none" href="">Here</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

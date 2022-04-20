<script>
import { mapActions, mapWritableState } from "pinia";
import { useLoginStore } from "../stores/LoginStore";
export default {
  data() {
    return {
      register: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions(useLoginStore, ["submitRegister"]),
    toLogin() {
      this.loginForm = true;
      this.registerForm = false;
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
          <form @submit.prevent="submitRegister(register)">
            <h1 class="mb-3">Register</h1>
            <div class="mb-3 mx-5">
              <label for="exampleInputEmail1" class="form-label">Email</label>
              <input
                v-model="register.email"
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
                v-model="register.password"
                type="password"
                class="form-control"
                id="exampleInputPassword1"
              />
            </div>

            <div class="text-center">
              <button type="submit" class="btn btn-primary">Register</button>
              <p class="mt-3">
                Login <a  @click.prevent="toLogin" style="text-decoration: none" href="">Here</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

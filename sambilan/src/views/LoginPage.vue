<script>
import { mapActions } from "pinia";
import { useJobStore } from "../stores/job";

export default {
  data() {
    return {
      dataLogin: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions(useJobStore, ["submitLogin"]),
    async loginUser() {
      await this.submitLogin(this.dataLogin);
    },
  },
};
</script>

<template>
  <div>
    <div class="mb-3">
      <label class="form-label">Email</label>
      <input
        v-model="dataLogin.email"
        type="email"
        class="form-control"
        placeholder="name@example.com"
      />
    </div>
    <div class="mb-3">
      <label class="form-label">Password</label>
      <input
        v-model="dataLogin.password"
        type="password"
        class="form-control"
        placeholder="Minimum 8 character"
      />
    </div>
    <div class="mb-3">
      <button class="btn btn-success" @click.prevent="loginUser">Sign In</button>
      <RouterLink to="/register" class="btn btn-primary">Sign Up</RouterLink>
    </div>
  </div>
</template>

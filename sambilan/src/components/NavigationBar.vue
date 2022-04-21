<script>
import { mapWritableState } from "pinia";
import { useJobStore } from "../stores/job";

export default {
  computed: {
    ...mapWritableState(useJobStore, ["isLogin"]),
  },
  methods: {
    async signOut() {
      await localStorage.removeItem("access_token");
      this.isLogin = false;
      this.$swal(
        "Success",
        `Successfully sign out and have a nice day`,
        "success"
      );
    },
  },
};
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <RouterLink to="/" class="navbar-brand fw-bolder" href="#"
        >Sambilan</RouterLink
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <RouterLink
              v-if="isLogin === true"
              to="/"
              class="nav-link fw-bold"
              aria-current="page"
              href="#"
              >Home</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink
              v-if="isLogin === false"
              to="/"
              class="nav-link fw-bold"
              href="#"
              >Sign In</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink
              v-if="isLogin === false"
              to="/register"
              class="nav-link fw-bold"
              href="#"
              >Sign Up</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink
              v-if="isLogin === true"
              to="/myapp"
              class="nav-link fw-bold"
              href="#"
              >My Application</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink
              v-if="isLogin === true"
              to="/login"
              @click.prevent="signOut"
              class="nav-link fw-bold"
              href="#"
              >Sign Out</RouterLink
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped></style>

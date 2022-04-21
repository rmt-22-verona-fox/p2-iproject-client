<script>
import { mapWritableState } from "pinia";
import { useCounterStore } from "../stores/counter";

export default {
  computed: {
    ...mapWritableState(useCounterStore, ["access_token1"]),
  },
  methods: {
    home() {
      this.$router.push("/");
    },
    login() {
      this.$router.push("/login");
    },
    logout() {
      localStorage.clear();
      this.access_token1 = "";
      this.$router.push("/");
    },
  },
};
</script>
<template>
  <header class="top-header">
    <nav class="navbar header-nav navbar-expand-lg">
      <div class="container">
        <a class="navbar-brand" href="index.html"
          ><img src="@/assets/images/logo.png" alt="image"
        /></a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbar-wd"
          aria-controls="navbar-wd"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbar-wd"
        >
          <ul class="navbar-nav">
            <li>
              <a @click.prevent="home()" class="nav-link active" href="#home"
                >Home</a
              >
            </li>
            <li><a class="nav-link" href="#about">About Us</a></li>
            <li><a class="nav-link" href="#services">Services</a></li>
            <li><a class="nav-link" href="#appointment">Appointment</a></li>
            <li>
              <a
                v-if="!access_token1"
                @click.prevent="login()"
                class="nav-link"
                href="#contact"
                >Login</a
              >
              <a
                v-if="access_token1"
                @click.prevent="logout()"
                class="nav-link"
                href="#contact"
                >Logout</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

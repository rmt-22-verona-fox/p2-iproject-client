<script>
import { mapState, mapActions } from "pinia";
import { useDatingStore } from "@/stores/dating";
export default {
  computed: {
    ...mapState(useDatingStore, ["List", "status"]),
  },
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push("/login");
    },
  },
};
</script>

<template>
  <section class="ftco-section">
    <div class="container">
      <div class="row justify-content-between">
        <div class="col">
          <a class="navbar-brand" href="index.html">To <span>Love Ru</span></a>
        </div>
        <div class="col d-flex justify-content-end">
          <div class="social-media">
            <p class="mb-0 d-flex">
              <a
                href="#"
                class="d-flex align-items-center justify-content-center"
                @click.prevent="logout"
                ><i class="fas fa-sign-out-alt"></i
              ></a>
            </p>
          </div>
        </div>
      </div>
    </div>
    <nav
      class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
      id="ftco-navbar"
    >
      <div class="container">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#ftco-nav"
          aria-controls="ftco-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="fa fa-bars"></span> Menu
        </button>
        <a href="#" class="order-lg-last chat"
          ><i class="far fa-comment"></i
        ></a>
        <form action="#" class="searchform order-lg-last">
        </form>
        <div class="collapse navbar-collapse" id="ftco-nav">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <router-link to="/" class="nav-link">Home</router-link>
            </li>

        
          </ul>
        </div>
      </div>
    </nav>
  </section>
</template>

<style>
@import "@/assets/navbar/style.css";
</style>

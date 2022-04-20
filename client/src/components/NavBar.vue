<script>
import { mapActions, mapState } from "pinia";
import { useLoginStore } from "../stores/LoginStore";

export default {
  methods: {
    ...mapActions(useLoginStore, ["getGeolocation", "logout"]),
    triggerGeo() {
      this.getGeolocation();
    },
  },
  computed: {
    ...mapState(useLoginStore, ["isLogin"]),
  },
};
</script>

<template>
  <nav
    class="navbar navbar-expand-lg navbar-dark bg-dark shadow sticky-top p-4"
  >
    <div class="container-fluid">
      <router-link class="navbar-brand text-white" to="/">iQuran</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item"></li>
          <div v-if="isLogin">
            <li class="nav-item">
              <router-link
                @click.prevent="logout()"
                class="nav-link active"
                to="/login"
                >Logout</router-link
              >
            </li>
          </div>
          <div v-if="isLogin">
            <li class="nav-item">
              <router-link class="nav-link active" to="/bookmarks"
                >Bookmarks</router-link
              >
            </li>
          </div>
           <div v-if="!isLogin">
            <li class="nav-item">
              <router-link class="nav-link active" to="/login"
                >Login</router-link
              >
            </li>
          </div>
        </ul>
      </div>
    </div>
  </nav>
</template>

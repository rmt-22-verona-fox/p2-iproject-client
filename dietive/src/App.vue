<script>
import { RouterLink, RouterView } from "vue-router";
import { useFoodStore } from "./stores/food";
import { mapActions, mapState, mapWritableState } from "pinia";

export default {
  data() {
    return {
      keyword: "",
    };
  },
  components: {
    RouterLink,
    RouterView,
  },
  computed: {
    ...mapState(useFoodStore, ["allFoodData"]),
    ...mapWritableState(useFoodStore, ["isLogin"]),
  },
  methods: {
    ...mapActions(useFoodStore, ["searchFeature", "logoutAction"]),
    async searchFood() {
      try {
        await this.searchFeature(this.keyword);
      } catch (err) {
        const error = err.response.statusText;
        swal("Error", error, "error");
      }
    },
    async logout() {
      try {
        await this.logoutAction();
        this.$router.push("/login");
      } catch (err) {
        const error = err.response.statusText;
        swal("Error", error, "error");
      }
    },
  },
  async created() {
    try {
      await this.searchFeature(this.keyword);
      const token = localStorage.getItem("access_token");
      if (token) {
        this.isLogin = true;
      } else {
        this.isLogin = false;
      }
    } catch (err) {
       if (err.response.status === 401) {
        this.isLogin = false;
        await this.logoutAction();
        this.$router.push("/login");
        const error = err.response.data.message;
        swal("Error", error, "error");
      } else {
        const error = err.response.statusText;
        swal("Error", error, "error");
      }
    }
  },
};
</script>

<template>
  <div>
    <header class="header">
      <div class="header-content responsive-wrapper">
        <div class="header-logo">
          <RouterLink to="/" href="" style="color: green; text-decoration: none">
            <div>
              <img style="height: 50px" src="./assets/DietLogo.jpg" />
            </div>
            <h5 style="color: black; text-decoration: none">Dietiv</h5>
          </RouterLink>
        </div>
        <div class="header-navigation">
          <nav class="header-navigation-links">
            <RouterLink href="" class="action" v-if="isLogin === true" to="/">
              Home
            </RouterLink>
            <RouterLink href="" class="action" to="/contact-us">
              Contact Us
            </RouterLink>
          </nav>
          <div class="header-navigation-actions">
            <a
              v-if="isLogin === true"
              class="button"
              @click.prevent="logout"
              style="font-size: 12px"
            >
              <i class="ph-sign-out-bold"></i><i>Log out</i></a
            >
            <RouterLink
              to="/login"
              v-if="isLogin === false"
              class="button"
              style="font-size: 12px"
            >
              <i class="ph-sign-in-bold"></i><i>Log in</i></RouterLink
            >
          </div>
        </div>
      </div>
    </header>

    <RouterView />
  </div>
</template>

<style>
@import "@/assets/base.css";
.action:hover {
  color: rgb(138, 141, 140);
}
</style>

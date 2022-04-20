<script>
import { mapActions, mapWritableState } from "pinia";
import { useLoginStore } from "./stores/LoginStore";
import NavBar from "./components/NavBar.vue";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapWritableState(useLoginStore, ["longitude", "latitude", "isLogin"]),
  },
  components: {
    NavBar,
  },
  methods: {
    ...mapActions(useLoginStore, [
      "prayerTime",
      "getGeolocation",
      "randomSurahLogin",
    ]),
  },
  async created() {
    try {
      await this.getGeolocation();
      if (localStorage.access_token) {
        this.isLogin = true;
      }
        this.randomSurahLogin();

    } catch (err) {
      console.log(err);
    }
  },
};
</script>

<template>
  <NavBar />
  <router-view></router-view>
</template>

<style>
@import "./assets/base.css";
</style>

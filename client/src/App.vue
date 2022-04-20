<script>
import { RouterLink, RouterView } from "vue-router";
import { mapState, mapWritableState } from "pinia";
import { useAuthenStore } from "./stores/authentication";
import NavigationBar from "@/components/NavigationBar.vue";

export default {
  components: { RouterLink, RouterView, NavigationBar },
  computed: {
    ...mapWritableState(useAuthenStore, ["isLoggedIn"]),
    ...mapState(useAuthenStore, ["trainer"]),
  },
  async created() {
    try {
      if (localStorage.access_token) {
        this.isLoggedIn = true;
      } else {
        if (this.trainer.account === "google") {
          await this.$gAuth.signOut();
        }
        localStorage.clear();
        this.trainer.account = "";
        this.trainer.username = "";
        this.isLoggedIn = false;
        this.$router.push("/login");
      }
    } catch (err) {
      this.$swal({
        title: "Error",
        text: err,
        icon: "error",
      });
    }
  },
};
</script>

<template>
  <NavigationBar v-if="isLoggedIn"></NavigationBar>
  <RouterView
    :class="{
      'min-h-screen': !isLoggedIn,
      'min-h-[calc(100vh_-_168px)]': isLoggedIn,
    }"
  ></RouterView>
  <div v-if="isLoggedIn" class="mt-10 bg-black py-8"></div>
</template>

<style></style>

<script>
import NavBar from "../components/NavBar.vue";
import { mapActions, mapWritableState } from "pinia";
import { useDatingStore } from "../stores/dating";
import ListPartner from "../components/ListPartner.vue";
export default {
  computed: {
    ...mapWritableState(useDatingStore, ["dataUser"]),
  },
  methods: {
    ...mapActions(useDatingStore, ["profile"]),
    async getProfile() {
      try {
        await this.profile();
        localStorage.removeItem("profile");
      } catch (error) {
        this.$swal({
          icon: "error",
          title: "Oops...",
          text: error.response.data.message,
        });
        localStorage.setItem("profile", null);
        this.$router.push("/addProfile");
      }
    },
  },
  components: { NavBar, ListPartner },
  created() {
    this.getProfile();
  },
};
</script>

<template>
  <NavBar />
  <ListPartner />
</template>

<style></style>

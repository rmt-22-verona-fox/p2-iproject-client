<script>
import { mapState } from "pinia";
import { useDatingStore } from "@/stores/dating";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(useDatingStore, ["dataUser"]),
  },
  methods: {
    async signInbtn() {
      try {
        const { data } = await this.logIn(this.formlogin);
        localStorage.setItem("access_token", data.access_token);
        this.$swal({
          icon: "success",
          text: "Success to Register",
        });
        this.$router.push("/");
      } catch (error) {
        this.$swal({
          icon: "error",
          title: "Oops...",
          text: error.response.data.message,
        });
      }
    },
  },
};
</script>

<template>
  <div class="container">
    <div v-if="!dataUser.biodatum">
      <a href="">Add profile</a>
    </div>
  </div>
</template>

<style></style>

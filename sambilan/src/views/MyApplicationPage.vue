<script>
import { mapActions, mapWritableState } from "pinia";
import { useJobStore } from "../stores/job";
import CardJob from "../components/CardJob.vue";

export default {
  computed: {
    ...mapWritableState(useJobStore, ["myApplications", "isLogin"]),
  },
  methods: {
    ...mapActions(useJobStore, [
      "getMyApplications",
      "updateStatusMyApplication",
      "deleteMyApplication",
      "paymentMyApplication",
    ]),
    async applyJob(id) {
      await this.paymentMyApplication();
      await this.updateStatusMyApplication(id);
      await this.getMyApplications();
    },
    async deleteJob(id) {
      await this.deleteMyApplication(id);
      await this.getMyApplications();
    },
  },
  async created() {
    if (localStorage.access_token) {
      this.isLogin = true;
      await this.getMyApplications();
    }
  },
  components: { CardJob },
};
</script>

<template>
  <div class="container-fluid">
    <main class="tm-main">
      <div class="row tm-row">
        <CardJob
          v-for="application in myApplications"
          :key="application.id"
          :application="application"
          @applyJob="applyJob"
          @deleteJob="deleteJob"
        />
      </div>

      <footer class="row tm-row">
        <hr class="col-12" />
        <div class="col-md-6 col-12 tm-color-gray">Design: rickyDefianS</div>
        <div class="col-md-6 col-12 tm-color-gray tm-copyright">
          Copyright 2022 iProject Hacktiv8
        </div>
      </footer>
    </main>
  </div>
</template>

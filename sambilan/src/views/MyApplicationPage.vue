<script>
import { mapActions, mapWritableState } from "pinia";
import { useJobStore } from "../stores/job";
import CardJob from "../components/CardJob.vue";

export default {
  computed: {
    ...mapWritableState(useJobStore, ["myApplications", 'isLogin']),
  },
  methods: {
    ...mapActions(useJobStore, [
      "getMyApplications",
      "updateStatusMyApplication",
      "deleteMyApplication",
    ]),
    async applyJob(id) {
      await this.updateStatusMyApplication(id);
      await this.getMyApplications()
    },
    async deleteJob(id) {
      await this.deleteMyApplication(id);
      await this.getMyApplications()
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
  <div class="row row-cols-1 row-cols-md-3 g-4">
    <CardJob
      v-for="application in myApplications"
      :key="application.id"
      :application="application"
      @applyJob="applyJob"
      @deleteJob="deleteJob"
    />
  </div>
</template>

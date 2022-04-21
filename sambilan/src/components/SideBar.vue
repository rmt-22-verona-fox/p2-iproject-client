<script>
import { mapActions } from "pinia";
import { useJobStore } from "../stores/job";

export default {
  data() {
    return {
      dataFilter: {
        title: "",
        source: "",
        remote: "",
      },
    };
  },
  methods: {
    ...mapActions(useJobStore, ["getJobs"]),
    async submitFilter() {
      await this.getJobs(this.dataFilter);
    },
  },
};
</script>

<template>
  <div class="container">
    <form>
      <div class="row mb-3">
        <label class="col-sm-2 col-form-label">Filter by Title Job</label>
        <div class="col-sm-10">
          <input v-model="dataFilter.title" type="text" class="form-control" />
        </div>
      </div>

      <div class="row g-3">
        <div class="col">
          <div class="mb-3">
            <label class="form-label">Filter by Status Remote Job</label>
            <select
              v-model="dataFilter.remote"
              class="form-select"
              aria-label="filter-remote"
            >
              <option selected disabled value="">Status Remote</option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>
        </div>

        <div class="col">
          <div class="mb-3">
            <label class="form-label">Filter by Source Job</label>
            <select
              v-model="dataFilter.source"
              class="form-select"
              aria-label="filter-source"
            >
              <option selected disabled value="">Job Source</option>
              <option value="stackoverflow">Stack Overflow</option>
              <option value="remoteok">Remote OK</option>
              <option value="weworkremotely">WeWorkRemotely</option>
              <option value="dribbble">Dribbble</option>
              <option value="coroflot">Coroflot</option>
              <option value="berlinstartupjobs">Berlin Startup Jobs</option>
            </select>
          </div>
        </div>
      </div>

      <div class="mb-3">
        <button class="btn btn-primary" @click.prevent="submitFilter">
          Submit
        </button>
      </div>
    </form>
  </div>
</template>

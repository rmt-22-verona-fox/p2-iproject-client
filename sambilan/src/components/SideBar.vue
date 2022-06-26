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
  <div class="row tm-row">
    <div class="col-12 tm-mb-75">
      <div class="form-group row mb-3">
        <div class="col-sm-12">
          <input
            v-model="dataFilter.title"
            type="text"
            class="form-control mr-0 ml-auto"
            placeholder="filter by title job"
          />
        </div>
      </div>

      <div class="row g-3">
        <div class="col">
          <div class="mb-3">
            <select
              v-model="dataFilter.remote"
              class="form-control"
              aria-label="filter-remote"
            >
              <option selected disabled value="">
                filter by status remote
              </option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>
        </div>

        <div class="col">
          <div class="mb-3">
            <select
              v-model="dataFilter.source"
              class="form-control"
              aria-label="filter-source"
            >
              <option selected disabled value="">filter by job source</option>
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

      <div class="form-group row text-right">
        <div class="col-12">
          <button
            class="tm-btn tm-btn-primary tm-btn-small"
            @click.prevent="submitFilter"
          >
            <i class="fas fa-search tm-search-icon"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

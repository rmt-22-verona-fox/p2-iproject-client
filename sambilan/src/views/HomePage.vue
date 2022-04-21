<script>
import { mapActions, mapWritableState } from "pinia";
import { useJobStore } from "../stores/job";
import SideBar from "../components/SideBar.vue";

export default {
  data() {
    return {
      dataFilter: {
        title: "",
        source: "",
        remote: "",
      }
    };
  },
  computed: {
    ...mapWritableState(useJobStore, ["isLogin", "jobs"]),
  },
  methods: {
    ...mapActions(useJobStore, ["getJobs", "addMyApplication"]),
    addApplication(data) {
      this.addMyApplication(data);
    },
  },
  async created() {
    if (localStorage.access_token) {
      this.isLogin = true;
      await this.getJobs(this.dataFilter);
    }
  },
  components: { SideBar },
};
</script>

<template>
  <div class="container flex justify-center items-center">
    <SideBar />
    <!-- card start -->
    <div class="row row-cols-1 row-cols-md-3 g-4">
      <div v-for="job in jobs" :key="job.id" class="col">
        <div class="card h-100">
          <div class="card-body">
            <h5 class="card-title">{{ job.role }}</h5>
            <p class="card-text">
              Company : {{ job.company_name }}
              <br />
              Source : {{ job.source }}
              <br />
              Status remote: {{ job.remote }}
            </p>
            <button
              @click.prevent="
                addApplication({
                  jobId: job.id,
                  title: job.role,
                  remote: job.remote,
                  companyName: job.company_name,
                  description: job.text,
                  source: job.source,
                  createdDate: job.date_posted,
                  jobUrl: job.url
                })
              "
              class="btn btn-success"
            >
              Add to My Application
            </button>
          </div>
          <div class="card-footer">
            <small class="text-muted">{{ job.date_posted }}</small>
          </div>
        </div>
      </div>
    </div>
    <!-- card end -->
  </div>
</template>

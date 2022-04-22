<script>
import { mapActions, mapWritableState } from "pinia";
import { useJobStore } from "../stores/job";
import SideBar from "../components/SideBar.vue";
import ModalJob from "../components/ModalJob.vue";

export default {
  data() {
    return {
      dataFilter: {
        title: "",
        source: "",
        remote: "",
      },
      state: "home",
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
    formatDate(date) {
      const newDate = new Date(date);
      const options = { year: "numeric", month: "long", day: "numeric" };
      return newDate.toLocaleDateString("en-EN", options);
    },
    formatSourceJob(source) {
      switch (source) {
        case "Stackoverflow":
          source = "Stack Overflow";
          break;
        case "Remoteok":
          source = "Remote OK";
          break;
        case "Weworkremotely":
          source = "WeWorkRemotely";
          break;
        case "Berlinstartupjobs":
          source = "Berlin Startup Jobs";
          break;
        case "Ycombinator":
          source = "YCombinator Startups";
          break;
        default:
          source = source;
          break;
      }
      return source;
    },
  },
  async created() {
    if (localStorage.access_token) {
      this.isLogin = true;
      await this.getJobs(this.dataFilter);
    }
  },
  components: { SideBar, ModalJob },
};
</script>

<template>
  <div class="container-fluid">
    <main class="tm-main">
      <SideBar />
      <div class="row tm-row">
        <article
          v-for="job in jobs"
          :key="job.id"
          class="col-12 col-md-6 tm-post"
        >
          <hr class="tm-hr-primary" />
          <h2 class="tm-pt-30 tm-color-primary tm-post-title">
            {{ job.role }}
          </h2>
          <div class="d-flex justify-content-between tm-pt-45">
            <span class="tm-color-primary"
              >Status Remote: {{ job.remote }}</span
            >
            <span class="tm-color-primary">{{ job.company_name }}</span>
          </div>
          <hr />
          <div class="d-flex justify-content-between">
            <span>{{ formatDate(job.date_posted) }}</span>
            <span>Source: {{ formatSourceJob(job.source) }}</span>
          </div>
          <div class="tm-pt-45 text-left">
            <ModalJob
              :job="job"
              :state="state"
              class="position-absolute tm-new-badge"
            />
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
                  jobUrl: job.url,
                })
              "
              class="tm-btn tm-btn-primary tm-btn-small"
              style="margin-left:15px"
            >
              Add to My Application
            </button>
          </div>
        </article>
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

<script>
import ModalJob from "./ModalJob.vue";
export default {
  data() {
    return {
      state: "myapp",
    };
  },
  props: ["application"],
  emits: ["applyJob", "deleteJob"],
  components: { ModalJob },
  methods: {
    formatDate(date) {
      const newDate = new Date(date)
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return newDate.toLocaleDateString('en-EN', options);
    },
    formatSourceJob(source) {
      switch (source) {
        case 'Stackoverflow':
          source = 'Stack Overflow';
          break;
        case 'Remoteok':
          source = 'Remote OK';
          break;
        case 'Weworkremotely':
          source = 'WeWorkRemotely';
          break;
        case 'Berlinstartupjobs':
          source = 'Berlin Startup Jobs';
          break;
        case 'Ycombinator':
          source = 'YCombinator Startups';
          break;
        default:
          source = source;
          break;
      }

      return source
    }
  }
};
</script>

<template>
  <article class="col-12 col-md-6 tm-post">
    <hr class="tm-hr-primary" />
    <h2 class="tm-pt-30 tm-color-primary tm-post-title">
      {{ application.title }}
    </h2>
    <span class="tm-color-primary">ID : {{ application.jobId }}</span>
    <div class="d-flex justify-content-between tm-pt-45">
      <span class="tm-color-primary">Status Remote: {{ application.remote }}</span>
      <span class="tm-color-primary">{{ application.companyName }}</span>
    </div>
    <hr />
    <div class="d-flex justify-content-between">
      <span>{{ formatDate(application.createdDate) }}</span>
      <span>Source: {{ formatSourceJob(application.source) }}</span>
    </div>
    <div class="tm-pt-45 text-left">
      <ModalJob
        :application="application"
        :state="state"
      />
      <button
          v-if="application.status === 'not applied'"
          @click.prevent="this.$emit('applyJob', application.id)"
          class="tm-btn tm-btn-primary tm-btn-small"
          style="margin-left: 5px;"
        >
          Apply Job
        </button>
        <button
          v-if="application.status === 'not applied'"
          @click.prevent="this.$emit('deleteJob', application.id)"
          class="tm-btn tm-btn-primary tm-btn-small"
          style="margin-left: 5px; background-color: #ff6464;"
        >
          Delete Job
        </button>
    </div>
  </article>
</template>

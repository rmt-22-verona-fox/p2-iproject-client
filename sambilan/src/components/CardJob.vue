<script>
import ModalJob from "./ModalJob.vue";
export default {
  data() {
    return {
      state: 'myapp'
    }
  }, 
  props: ["application"],
  emits: ["applyJob", "deleteJob"],
  components: { ModalJob }
};
</script>

<template>
  <div class="col">
    <div class="card h-100">
      <div class="card-body">
        <h5 class="card-title">{{ application.title }}</h5>
        <p class="card-text">
          ID : {{ application.jobId }}
          <br />
          Company : {{ application.companyName }}
          <br />
          Source : {{ application.source }}
          <br />
          Status remote: {{ application.remote }}
        </p>
        <ModalJob :application='application' :state="state" />
        <button
          v-if="application.status === 'not applied'"
          @click.prevent="this.$emit('applyJob', application.id)"
          class="btn btn-success"
        >
          Apply Job
        </button>
        <button
          v-if="application.status === 'not applied'"
          @click.prevent="this.$emit('deleteJob', application.id)"
          class="btn btn-danger"
        >
          Delete Job
        </button>
      </div>
      <div class="card-footer">
        <small class="text-muted">{{ application.createdDate }}</small>
      </div>
    </div>
  </div>
</template>

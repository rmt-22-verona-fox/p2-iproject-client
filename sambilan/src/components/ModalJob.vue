<script>
export default {
  data() {
    return {
      data: {},
    }
  },
  props: ['job', 'application','state'],
  methods: {

  },
  watch: {
    state: {
      handler(val) {
        if (val === 'home') {
          this.data = {
            jobId: this.job.id,
            title: this.job.role,
            remote: this.job.remote,
            companyName: this.job.company_name,
            description: this.job.text,
            source: this.job.source,
            createdDate: this.job.date_posted,
            jobUrl: this.job.url
          }
        } 
        else if (val === 'myapp') {
          this.data = this.application
        }
      },
      immediate: true
    }
  }
}
</script>

<template>
<!-- Button trigger modal -->
<button type="button" class="btn btn-info" data-bs-toggle="modal" data-bs-target="#jobModal">
  Detail
</button>

<!-- Modal -->
<div class="modal fade" id="jobModal" tabindex="-1" aria-labelledby="jobModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="jobModalLabel">{{data.title}}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div v-html="data.description"></div>
        <div>Company : {{ data.companyName }}</div>
        <div>Status Remote : {{ data.remote }}</div>
        <div>Source : {{ data.source }}</div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
</template>
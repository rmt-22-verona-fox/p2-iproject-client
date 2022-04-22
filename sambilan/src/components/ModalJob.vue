<script>
import axios from "axios";

export default {
  data() {
    return {
      data: {},
      videoUrl: ''
    };
  },
  props: ["job", "application", "state"],
  methods: {
    async getVideo() {
      try {
        const response = await axios.get(
          "https://youtube-search6.p.rapidapi.com/search/",
          {
            params: {
              query: "job vacancy",
              limit: 1
            },
            headers: {
              "X-RapidAPI-Host": "youtube-search6.p.rapidapi.com",
              "X-RapidAPI-Key":
                "e49e412044msh20be6c6ef6e18d7p10642ajsn12deb9ab1315",
            },
          }
        );
        const data = response.data.videos
        const videoId = data[0].video_id
        this.videoUrl = `https://www.youtube.com/embed/${videoId}`
      } catch (error) {
        console.log(error.response)
      }
    },
  },
  watch: {
    state: {
      handler(val) {
        if (val === "home") {
          this.data = {
            jobId: this.job.id,
            title: this.job.role,
            remote: this.job.remote,
            companyName: this.job.company_name,
            description: this.job.text,
            source: this.job.source,
            createdDate: this.job.date_posted,
            jobUrl: this.job.url,
          };
        } else if (val === "myapp") {
          this.data = this.application;
        }
      },
      immediate: true,
    },
  },
  async created() {
    await this.getVideo()
  }
};
</script>

<template>
  <!-- Button trigger modal -->
  <button
    type="button"
    class="tm-btn tm-btn-primary tm-btn-small"
    data-bs-toggle="modal"
    data-bs-target="#jobModal"
    style="background-color: #B980F0"
  >
    Detail
  </button>

  <!-- Modal -->
  <div
    class="modal fade"
    id="jobModal"
    tabindex="-1"
    aria-labelledby="jobModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="jobModalLabel">{{ data.title }}</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="fas fa-times"></i>
          </button>
        </div>
        <div class="modal-body">
          <div v-html="data.description"></div>
          <div>
            <iframe src="{{this.videoUrl}}" height="200" width="300" title="Iframe Example"></iframe>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="tm-btn tm-btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

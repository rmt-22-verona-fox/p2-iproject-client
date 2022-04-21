<script>
import { mapActions } from "pinia";

import { useTrainingStore } from "@/stores/trainingStore";
import carousel from "@/components/Carousel.vue";
import carouselSlide from "@/components/CarouselSlide.vue";

export default {
  data() {
    return {
      slides: [{
        videoInfo: {
          title: '',
          description: '',
          publishedBy: ''
        }
      }],
      visibleSlide: 0,
    };
  },
  components: {
    carousel,
    carouselSlide,
  },
  methods: {
    ...mapActions(useTrainingStore, [
      "axiosGetDribble",
      "axiosGetPassing",
      "axiosGetFinishing",
      "axiosGetShooting",
      "axiosGetFootwork",
    ]),
    next() {
      if (this.visibleSlide >= this.slides.length - 1) {
        this.visibleSlide = 0;
      } else {
        this.visibleSlide++;
      }
    },
    prev() {
      if (this.visibleSlide <= 0) {
        this.visibleSlide = this.slides.length - 1;
      } else {
        this.visibleSlide--;
      }
    },
  },
  async created() {
    console.log(this.$route.params.drills)
    try {
      let response
      switch (this.$route.params.drills) {
        case "dribble":
          response = await this.axiosGetDribble()
          this.slides = response.data
          break;
        case "passing":
          response = await this.axiosGetPassing()
          this.slides = response.data
          break;
        case "finishing":
          response = await this.axiosGetFinishing()
          this.slides = response.data
          break;
        case "shooting":
          response = await this.axiosGetShooting()
          this.slides = response.data
          break;
        case "footwork":
          response = await this.axiosGetFootwork()
          this.slides = response.data
          break;
      }
    } catch (err) {
      console.log(err.response)
    }
  },
};
</script>

<template>
  <carousel @next="next" @prev="prev">
    <carousel-slide
      v-for="(slide, index) in slides"
      :key="slide"
      :index="index"
      :visibleSlide="visibleSlide"
    >
      <iframe
        style="margin-left: 60px"
        id="ytplayer"
        type="text/html"
        width="800"
        height="450"
        :src="`https://www.youtube.com/embed/${slide.videoId}?autoplay=1&origin=http://example.com`"
        frameborder="0"
      ></iframe>
    </carousel-slide>
  </carousel>

  <div
    class="my-1"
    style="width: 640px; margin-left: 60px; padding-right: 60px"
  >
    <h1 style="font-size: 1.5rem">Video Description</h1>
    <div class="my-3">
      <va-divider />
    </div>
    <p><b>Title:</b> {{ slides[visibleSlide].videoInfo.title }}</p>
    <br />
    <p><b>Description:</b> {{ slides[visibleSlide].videoInfo.description }}</p>
    <br />
    <p><b>Published by:</b> {{ slides[visibleSlide].videoInfo.publishedBy }}</p>
  </div>
</template>

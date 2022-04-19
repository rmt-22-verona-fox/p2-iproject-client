<script>
import TestimonialCard from "@/views/HomePage/BottomSection/Testimonials/TestimonialCard/index.vue";

export default {
  components: {
    TestimonialCard,
  },
};
</script>

<template>
  <div>
    <h3 class="text-heading-3 font-label font-bold pt-8 mb-5 flex flex-row">
      Testimonial Pelanggan
    </h3>

    <div class="flex justify-between">
      <TestimonialCard v-for="(el, i) in 4" v-bind:key="i" />
    </div>
  </div>
</template>

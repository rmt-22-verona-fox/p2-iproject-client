<script>
import TestimonialCard from "@/views/HomePage/BottomSection/Testimonials/TestimonialCard/index.vue";

export default {
  components: {
    TestimonialCard,
  },

  props: ["testimonies"],
};
</script>

<template>
  <div>
    <h3 class="text-heading-3 font-label font-bold pt-8 mb-5 flex flex-row">
      Testimonial Pelanggan
    </h3>

    <div class="flex flex-row gap-10">
      <TestimonialCard
        v-for="testimony in testimonies"
        v-bind:key="testimony._id"
        v-bind:testimony="testimony"
      />
    </div>
  </div>
</template>

<script>
import TestimonialCard from "./TestimonialCard/index.vue";

export default {
  components: {
    TestimonialCard,
  },
};
</script>

<template>
  <div>
    <h3 class="text-heading-3 font-label font-bold pt-14 mb-1 flex flex-row">
      Testimonial Pelanggan
    </h3>
    <p class="text-heading-4 mb-4">Pendapat pelanggan tentang kami</p>

    <div class="flex justify-between">
      <TestimonialCard v-for="(el, i) in 4" v-bind:key="i" />
    </div>
  </div>
</template>

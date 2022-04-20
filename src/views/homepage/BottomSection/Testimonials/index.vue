<script>
import { mapWritableState, mapActions } from "pinia";
import { usePackageStore } from "../../../../stores/package";
import TestimonialCard from "./TestimonialCard/index.vue";
import { useToast } from "vue-toastification";

export default {
  setup() {
    const toast = useToast();
    return { toast };
  },

  components: {
    TestimonialCard,
  },

  computed: {
    ...mapWritableState(usePackageStore, ["homeTestimonyList"]),
  },

  methods: {
    ...mapActions(usePackageStore, ["renderUserTestimonies"]),

    async renderTestimoniesOnCreate() {
      try {
        const response = await this.renderUserTestimonies();

        this.homeTestimonyList = response.data;
      } catch (err) {
        const response = await this.renderUserTestimonies();

        this.homeTestimonyList = response.data;
        this.toast.warning("Gagal mendapatkan data testimoni");
      }
    },
  },

  async created() {
    await this.renderTestimoniesOnCreate();
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
      <TestimonialCard
        v-for="testimony in homeTestimonyList"
        v-bind:key="testimony.fullName"
        v-bind:testimony="testimony"
      />
    </div>
  </div>
</template>

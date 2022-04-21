<script>
import { mapWritableState, mapActions } from "pinia";
import { usePackageStore } from "../../../../stores/package";
import PromoCard from "./PromoCard/index.vue";
import { useToast } from "vue-toastification";

import { Carousel, Navigation, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

export default {
  setup() {
    const toast = useToast();
    return { toast };
  },

  components: {
    PromoCard,
    Carousel,
    Slide,
    Navigation,
  },

  computed: {
    ...mapWritableState(usePackageStore, ["promoPackageList"]),
  },

  methods: {
    ...mapActions(usePackageStore, ["renderPromoPackage"]),

    async renderPromoPackageOnCreate() {
      try {
        const response = await this.renderPromoPackage();

        this.promoPackageList = response.data;
      } catch (err) {
        this.toast.error(err.response?.data?.message);
      }
    },
  },

  async created() {
    await this.renderPromoPackageOnCreate();
  },
};
</script>

<template>
  <div>
    <h3 class="text-heading-3 text-white font-label font-bold pt-14 mb-4">
      Promo Liburan
    </h3>
    <Carousel v-bind:items-to-show="2.5" v-bind:wrap-around="false">
      <Slide v-for="slide in promoPackageList" v-bind:key="slide">
        <PromoCard
          v-bind:promoPackage="slide"
          class="carousel__item text-left w-full"
        />
      </Slide>

      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </div>
</template>

<style>
.carousel__prev,
.carousel__next {
  opacity: 0.7;
  background-color: #1053b7;
  /* display: none; */
}
</style>

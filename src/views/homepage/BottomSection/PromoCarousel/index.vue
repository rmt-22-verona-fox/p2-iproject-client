<script>
import { mapWritableState, mapActions } from "pinia";
import { usePackageStore } from "../../../../stores/package";
import PromoCard from "./PromoCard/index.vue";
import { useToast } from "vue-toastification";

import { Carousel, Navigation, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";

export default {
  setup() {
    const toast = useToast();
    return { toast, modules: [Pagination] };
  },

  components: {
    PromoCard,
    Carousel,
    Slide,
    Navigation,
    Swiper,
    SwiperSlide,
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
    <!-- <Carousel v-bind:itemsToShow="2.5" v-bind:wrap-around="false">
      <Slide v-for="slide in promoPackageList" v-bind:key="slide">
        <PromoCard
          v-bind:promoPackage="slide"
          class="carousel__item text-left w-full"
        />
      </Slide>
    </Carousel> -->

    <swiper
      class="swiper"
      :modules="modules"
      :space-between="30"
      :slides-per-view="3"
      :pagination="{ clickable: true }"
    >
      <swiper-slide class="slide">Slide 1</swiper-slide>
      <swiper-slide class="slide">Slide 2</swiper-slide>
      <swiper-slide class="slide">Slide 3</swiper-slide>
      <swiper-slide class="slide">Slide 4</swiper-slide>
      <swiper-slide class="slide">Slide 5</swiper-slide>
      <swiper-slide class="slide">Slide 6</swiper-slide>
      <swiper-slide class="slide">Slide 7</swiper-slide>
      <swiper-slide class="slide">Slide 8</swiper-slide>
    </swiper>
  </div>
</template>

<style lang="scss" scoped>
@import "./scss/_variables.scss";
// @import "@/styles/init.scss";
@import "./style.scss";

.swiper {
  @include swiper-wrapper();
}

.slide {
  @include swiper-slide();
}
</style>

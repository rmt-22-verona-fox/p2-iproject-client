<script>
import Flicking from "@egjs/vue3-flicking";
import PromoCard from "./PromoCard/index.vue";

export default {
  components: {
    Flicking: Flicking,
    PromoCard,
  },
};
</script>

<template>
  <div>
    <h3 class="text-heading-3 text-white font-label font-bold pt-14 mb-4">
      Promo Liburan
    </h3>
    <Flicking
      v-bind:options="{
        moveType: 'freeScroll',
        bound: true,
        align: 'center',
      }"
      class="py-5"
    >
      <PromoCard v-for="(el, i) in 3" v-bind:key="i" class="mx-5" />
    </Flicking>
  </div>
</template>

<script>
import Container from "../../container/Container.vue";
import PromoCarousel from "./PromoCarousel/index.vue";
import Package from "./Package/index.vue";
import Categories from "./Categories/index.vue";
import Testimonies from "./Testimonials/index.vue";

export default {
  components: {
    Container,
    PromoCarousel,
    Package,
    Categories,
    Testimonies,
  },
};
</script>

<template>
  <section class="section pb-16">
    <Container>
      <PromoCarousel />
      <Package />
      <Categories />
      <Testimonies />
    </Container>
  </section>
</template>

<style scoped>
.section {
  background-image: url("@/assets/home/blue-bg-second-section.svg");
  background-position: center top;
  background-repeat: no-repeat;
  background-size: contain;
}
</style>

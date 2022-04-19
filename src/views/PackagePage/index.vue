<script>
import Container from "../container/Container.vue";
import Layout from "@/components/layout/Layout.vue";
import ImageCard from "@/views/PackagePage/ImageCard/index.vue";
import Testimonies from "@/views/PackagePage/Testimonials/index.vue";
import Arrow from "@/views/PackagePage/Arrow/index.vue";
import HelperSection from "@/views/PackagePage/HelperSection/index.vue";

export default {
  components: {
    Container,
    Layout,
    ImageCard,
    Testimonies,
    Arrow,
    HelperSection,
  },
};
</script>

<template>
  <Layout>
    <Container>
      <section
        class="py-6 pl-6 flex flex-row items-center select-none cursor-pointer"
      >
        <div>Beranda</div>
        <Arrow />
        <div>Paket</div>
        <Arrow />
        <div>Indonesia</div>
        <Arrow />
        <div>Bali</div>
        <Arrow />
        <div>Nusa Penida</div>
      </section>

      <section class="flex flex-nowrap w-full px-2">
        <div class="md:w-1/2 px-4 mb-8 md:mb-8">
          <img
            class="rounded-xl shadow-md w-full h-full"
            src="@/assets/detail/detail-1.jpg"
            alt=""
          />
        </div>
        <div class="flex flex-wrap flex-row md:w-1/2 items-center">
          <ImageCard v-for="(el, i) in 4" v-bind:key="i" v-bind:test="i" />
        </div>
      </section>

      <section class="flex flex-row px-6 justify-between font-label mb-24">
        <div>
          <p class="font-bold text-heading-3">Nusa Penida, Bali</p>
          <p class="text-gray-70 font-medium text-heading-4">Indonesia</p>
        </div>
        <div>
          <div class="flex gap-3 align-center flex-row mb-8">
            <img src="@/assets/icons/yellow-star.svg" height="20" width="20" />
            <p class="font-bold text-heading-4">4.9 (1527 Review)</p>
          </div>
          <div class="flex gap-3 align-center flex-row">
            <img src="@/assets/icons/share.svg" height="20" width="20" />
            <p class="font-bold text-heading-5">Bagikan</p>
            <img
              src="@/assets/icons/heart-outline.svg"
              height="20"
              width="20"
            />
            <p class="font-bold text-heading-5">Simpan</p>
          </div>
        </div>
      </section>

      <hr />
      <HelperSection />
      <hr />

      <Testimonies class="mb-14" />
    </Container>
  </Layout>
</template>

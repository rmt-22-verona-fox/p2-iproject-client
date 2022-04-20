<script>
import { mapActions, mapWritableState } from "pinia";
import { usePackageStore } from "../../stores/package";
import Button from "@/components/button/index.vue";
import Container from "../container/Container.vue";
import Layout from "@/components/layout/Layout.vue";
import ImageCard from "@/views/PackagePage/ImageCard/index.vue";
import Testimonies from "@/views/PackagePage/Testimonials/index.vue";
import Arrow from "@/views/PackagePage/Arrow/index.vue";
import HelperSection from "@/views/PackagePage/HelperSection/index.vue";
import { useToast } from "vue-toastification";

export default {
  setup() {
    const toast = useToast();
    return { toast };
  },

  components: {
    Button,
    Container,
    Layout,
    ImageCard,
    Testimonies,
    Arrow,
    HelperSection,
  },

  computed: {
    ...mapWritableState(usePackageStore, [
      "packageDetail",
      "homeTestimonyList",
      "testimonyModalState",
    ]),
  },

  methods: {
    ...mapActions(usePackageStore, [
      "renderPackageDetail",
      "renderUserTestimonies",
    ]),

    async fetchPackageDetail() {
      try {
        const response = await this.renderPackageDetail(this.$route.params.id);

        this.packageDetail = response.data;
      } catch (err) {
        this.toast.error(err.response?.data?.message);
      }
    },

    async renderTestimoniesOnCreate(destination) {
      try {
        const response = await this.renderUserTestimonies(destination);

        this.homeTestimonyList = response.data;
      } catch (err) {
        this.toast.error(err.response?.data?.message);
      }
    },

    addTestimony() {
      if (!localStorage.getItem("access_token")) {
        this.$router.push("/masuk");
      } else {
        this.testimonyModalState = true;
      }
    },
  },

  async created() {
    await this.fetchPackageDetail();
    await this.renderTestimoniesOnCreate(this.packageDetail?.destinationName);
  },
};
</script>

<template>
  <Layout>
    <Container>
      <section class="py-6 pl-6 flex flex-row items-center select-none">
        <div>Beranda</div>
        <Arrow />
        <div>Paket</div>
        <Arrow />
        <div>{{ packageDetail?.destinationCountry }}</div>
        <Arrow />
        <div>{{ packageDetail?.destinationName?.split(", ")[1] }}</div>
        <Arrow />
        <div class="underline text-blue-100 font-bold">
          {{ packageDetail?.destinationName?.split(", ")[0] }}
        </div>
      </section>

      <section class="flex flex-nowrap w-full px-2">
        <div class="md:w-1/2 px-4 mb-8 md:mb-8">
          <img
            class="rounded-xl shadow-md w-full h-full"
            v-bind:src="packageDetail?.imageThumbnail"
            v-bind:alt="packageDetail?.destinationName"
          />
        </div>
        <div class="flex flex-wrap flex-row md:w-1/2 items-center">
          <ImageCard
            v-for="(image, i) in packageDetail?.imageUrls"
            v-bind:key="i"
            v-bind:image="image"
          />
        </div>
      </section>

      <section class="flex flex-row px-6 justify-between font-label mb-24">
        <div>
          <p class="font-bold text-heading-3">
            {{ packageDetail?.destinationName }}
          </p>
          <p class="text-gray-70 font-medium text-heading-4">
            {{ packageDetail?.destinationCountry }}
          </p>
        </div>
        <div>
          <div class="flex gap-3 align-center flex-row mb-8">
            <img src="@/assets/icons/yellow-star.svg" height="20" width="20" />
            <p class="font-bold text-heading-4">
              {{ packageDetail?.rating }} ({{ packageDetail?.reviewers }}
              Review)
            </p>
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

      <Testimonies
        v-bind:testimonies="homeTestimonyList"
        v-if="homeTestimonyList.length"
      />

      <Button
        class="w-[190px] justify-center my-10 text-heading-5"
        v-on:click="addTestimony"
        >Tambah Testimoni</Button
      >
    </Container>
  </Layout>
</template>

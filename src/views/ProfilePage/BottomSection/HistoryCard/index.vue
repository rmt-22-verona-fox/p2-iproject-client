<script>
import Button from "@/components/button/index.vue";

export default {
  components: {
    Button,
  },

  props: ["history"],

  methods: {
    detailClickHandler(id) {
      this.$router.push(`/detail-paket/${id}`);
    },
  },
};
</script>

<template>
  <article
    class="flex flex-col bg-white rounded-xl shadow-lg overflow-hidden w-[393px]"
  >
    <figure class="relative w-full h-[268px]">
      <img
        v-bind:src="history?.Package?.imageThumbnail"
        v-bind:alt="history?.Package?.destinationName"
        class="h-full object-cover"
      />
    </figure>

    <div class="flex flex-col p-4">
      <div class="flex items-center mb-4">
        <img src="@/assets/icons/yellow-star.svg" height="20" width="20" />

        <p class="text-heading-5 text-gray-70 ml-1">
          {{ history?.Package?.rating }} ({{ history?.Package?.reviewers }}
          Review)
        </p>
      </div>

      <p class="text-heading-3 text-gray-100 font-label font-bold">
        {{ history?.Package?.destinationName }}
      </p>
      <p class="text-heading-4 text-gray-70 mb-4">
        {{ history?.Package?.destinationCountry }}
      </p>

      <div class="flex justify-between gap-3">
        <Button
          class="w-full bg-white border border-blue-100 text-blue-100 text-sm"
          v-on:click="detailClickHandler(history?.Package?.id)"
        >
          Lihat detail
        </Button>
        <Button class="hidden w-full text-sm">Pesan</Button>
      </div>
    </div>
  </article>
</template>

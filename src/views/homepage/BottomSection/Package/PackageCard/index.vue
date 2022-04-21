<script>
import { mapWritableState } from "pinia";
import { useTransactionStore } from "@/stores/transaction";
import Button from "@/components/button/index.vue";
import { useToast } from "vue-toastification";

export default {
  setup() {
    const toast = useToast();
    return { toast };
  },

  components: {
    Button,
  },

  props: ["eachPackage"],

  computed: {
    ...mapWritableState(useTransactionStore, [
      "verificationModalState",
      "checkoutModalState",
      "priceToPayState",
      "packageId",
    ]),
  },

  methods: {
    detailClickHandler(id) {
      this.$router.push(`/detail-paket/${id}`);
    },

    checkoutHandler(id) {
      if (!localStorage.getItem("access_token")) {
        this.$router.push("/masuk");
      } else if (localStorage.getItem("verified") === "false") {
        this.verificationModalState = true;
      } else if (
        localStorage.getItem("access_token") &&
        localStorage.getItem("verified") === "true"
      ) {
        this.checkoutModalState = true;
        this.priceToPayState = this.eachPackage?.price;
        this.packageId = id;
      }
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
        v-bind:src="eachPackage?.imageThumbnail"
        v-bind:alt="eachPackage?.destinationName"
        class="h-full object-cover"
      />
    </figure>

    <div class="flex flex-col p-4">
      <div class="flex items-center mb-4">
        <img src="@/assets/icons/yellow-star.svg" height="20" width="20" />

        <p class="text-heading-5 text-gray-70 ml-1">
          {{ eachPackage?.rating }} ({{ eachPackage?.reviewers }} Review)
        </p>
      </div>

      <p class="text-heading-3 text-gray-100 font-label font-bold">
        {{ eachPackage?.destinationName }}
      </p>
      <p class="text-heading-4 text-gray-70 mb-4">
        {{ eachPackage?.destinationCountry }}
      </p>

      <p class="text-heading-3 text-gray-100 font-bold mb-4">
        Rp {{ eachPackage?.price?.toLocaleString("id-ID") }}
      </p>

      <p class="text-heading-5 text-gray-70 mb-4">
        {{ eachPackage?.description }}
      </p>

      <div class="flex justify-between gap-3">
        <Button
          class="w-full bg-white border border-blue-100 text-blue-100 text-sm"
          v-on:click="detailClickHandler(eachPackage?.id)"
        >
          Lihat detail
        </Button>
        <Button
          class="w-full text-sm"
          v-on:click="checkoutHandler(eachPackage?.id)"
          >Pesan</Button
        >
      </div>
    </div>
  </article>
</template>

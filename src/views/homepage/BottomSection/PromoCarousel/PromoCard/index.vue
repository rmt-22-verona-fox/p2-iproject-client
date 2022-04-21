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

  props: ["promoPackage"],

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
        this.priceToPayState =
          this.promoPackage?.price - this.promoPackage.price * 0.1;
        this.packageId = id;
      }
    },
  },
};
</script>

<template>
  <article
    class="flex bg-white shadow-lg rounded-xl overflow-hidden w-[500px] h-[312px]"
  >
    <div class="flex h-full">
      <figure class="w-[212px] h-full">
        <img
          v-bind:src="promoPackage?.imageThumbnail"
          v-bind:alt="promoPackage?.destinationName"
          class="h-full object-cover"
        />
      </figure>
      <div class="flex flex-1 flex-col justify-center p-4">
        <p class="text-heading-4 text-gray-100 font-label font-bold">
          {{ promoPackage?.destinationName }}
        </p>
        <p class="text-heading-4 text-gray-70 mb-4">
          {{ promoPackage?.destinationCountry }}
        </p>

        <div class="flex gap-1">
          <p class="text-heading-5 text-gray-70 line-through">
            Rp {{ promoPackage?.price?.toLocaleString("id-ID") }}
          </p>
          <p class="text-heading-5 text-red-100 font-bold">10%</p>
        </div>

        <p class="text-[16px] font-bold text-gray-100 mb-4">
          Rp
          {{
            (promoPackage?.price - promoPackage.price * 0.1)?.toLocaleString(
              "id-ID"
            )
          }}
        </p>

        <p class="text-heading-5 text-gray-70 mb-4">
          {{
            promoPackage?.description <= 75
              ? promoPackage?.description
              : `${promoPackage?.description.slice(0, 78)}...`
          }}
        </p>

        <p class="text-heading-5 text-gray-50 mb-4">
          Berangkat:
          {{
            new Date(promoPackage?.departureDate).toLocaleDateString("id-ID")
          }}
        </p>

        <div class="flex justify-between gap-3">
          <Button
            class="w-full bg-white border border-blue-100 text-blue-100 text-sm"
            v-on:click="detailClickHandler(promoPackage?.id)"
          >
            Lihat Detail
          </Button>
          <Button
            class="w-full text-sm"
            v-on:click="checkoutHandler(promoPackage?.id)"
          >
            Pesan
          </Button>
        </div>
      </div>
    </div>
  </article>
</template>

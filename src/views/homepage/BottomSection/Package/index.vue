<script>
import { mapWritableState, mapActions } from "pinia";
import { useToast } from "vue-toastification";
import { usePackageStore } from "../../../../stores/package";
import PackageCard from "./PackageCard/index.vue";

export default {
  setup() {
    const toast = useToast();
    return { toast };
  },

  components: {
    PackageCard,
  },

  computed: {
    ...mapWritableState(usePackageStore, ["packageList"]),
  },

  methods: {
    ...mapActions(usePackageStore, ["renderAllPackage"]),

    async renderAllPackageOnCreate() {
      try {
        const response = await this.renderAllPackage();

        this.packageList = response.data;
      } catch (err) {
        this.toast.error(err.response?.data?.message);
      }
    },
  },

  async created() {
    await this.renderAllPackageOnCreate();
  },
};
</script>

<template>
  <div>
    <h3 class="text-heading-3 text-white font-label font-bold pt-14 mb-1">
      Paket Liburan Populer
    </h3>
    <p class="text-heading-4 text-white mb-4">
      Paket terbaik yang sering dipilih oleh pelanggan
    </p>

    <div class="flex justify-between">
      <PackageCard
        v-for="(eachPackage, i) in packageList"
        v-bind:key="i"
        v-bind:eachPackage="eachPackage"
      />
    </div>
  </div>
</template>

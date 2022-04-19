<script>
import PackageCard from "./PackageCard/index.vue";

export default {
  components: {
    PackageCard,
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
      <PackageCard />
      <PackageCard />
      <PackageCard />
    </div>
  </div>
</template>

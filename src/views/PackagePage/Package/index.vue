<script>
import PackageCard from "@/views/HomePage/BottomSection/Package/PackageCard/index.vue";

export default {
  components: {
    PackageCard,
  },
};
</script>

<template>
  <p class="text-heading-4 text-primary-black font-label pt-12 mb-8 font-bold">
    Rekomendasi Paket Lain
  </p>

  <div class="flex justify-between mb-10">
    <PackageCard />
    <PackageCard />
    <PackageCard />
  </div>
</template>

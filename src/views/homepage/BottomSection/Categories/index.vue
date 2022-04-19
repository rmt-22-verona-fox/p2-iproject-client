<script>
import CategoryCard from "./CategoryCard/index.vue";

export default {
  components: {
    CategoryCard,
  },
};
</script>

<template>
  <div>
    <h3
      class="text-heading-3 text-gray-100 font-label font-bold pt-14 mb-8 flex flex-row"
    >
      Kategori Tempat
    </h3>

    <div class="flex justify-between">
      <CategoryCard v-for="(el, i) in 6" v-bind:key="6" />
    </div>
  </div>
</template>

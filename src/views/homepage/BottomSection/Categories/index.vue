<script>
import { mapWritableState, mapActions } from "pinia";
import { usePackageStore } from "../../../../stores/package";
import CategoryCard from "./CategoryCard/index.vue";
import { useToast } from "vue-toastification";

export default {
  setup() {
    const toast = useToast();
    return { toast };
  },

  components: {
    CategoryCard,
  },

  computed: {
    ...mapWritableState(usePackageStore, ["categoryList"]),
  },

  methods: {
    ...mapActions(usePackageStore, ["renderPackageCategory"]),

    async renderCategoryOnCreate() {
      try {
        const response = await this.renderPackageCategory();

        this.categoryList = response.data;
      } catch (err) {
        this.toast.error(err.response?.data?.message);
      }
    },
  },

  created() {
    this.renderCategoryOnCreate();
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
      <CategoryCard
        v-for="category in categoryList"
        v-bind:key="category.name"
        v-bind:category="category"
      />
    </div>
  </div>
</template>

<template>
<section class="text-gray-600 body-font h-screen bg-indigo-100">
        <div class="flex container px-5 py-24 mx-auto">
          <cardhome
          v-for="post in posts"
          :key="post.id"
          :post="post">
          </cardhome>
        </div>
      </section>
</template>

<script>
import cardhome from "@/components/cardhome.vue"
import { mapActions,mapState } from "pinia";
import { useInventoryStore } from "@/stores/inventory.js";
export default {
  name: "home",
  components: {
    cardhome
  },
  methods:{
    ...mapActions(useInventoryStore, ["getPost"]),
  },
  computed: {
    ...mapState(useInventoryStore, ["posts"]),
  },
  created() {
    this.getPost();
  },
}
</script>

<style>

</style>
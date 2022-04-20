<script>
import { RouterLink, RouterView } from "vue-router";
import ThreeComponent from "./components/ThreeComponent.vue";
export default {
  components: {
    ThreeComponent,
  },
};
</script>

<template>
  <ThreeComponent />
  <RouterView />
</template>

<style></style>

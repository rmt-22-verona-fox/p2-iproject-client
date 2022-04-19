<script>
import { RouterLink, RouterView } from "vue-router";
import NavigationBar from "@/components/NavigationBar.vue";

export default {
  components: { RouterLink, RouterView, NavigationBar },
};
</script>

<template>
  <NavigationBar></NavigationBar>
  <RouterView></RouterView>
</template>

<style></style>

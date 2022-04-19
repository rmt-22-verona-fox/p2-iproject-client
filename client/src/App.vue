<script>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "@/components/HelloWorld.vue";
import NavigationBar from "@/components/NavigationBar.vue";

export default {
  components: { RouterLink, RouterView, HelloWorld, NavigationBar },
};
</script>

<template>
  <NavigationBar></NavigationBar>
</template>

<style></style>

<script>
import { RouterLink, RouterView } from "vue-router";
import NavigationBar from "@/components/NavigationBar.vue";

export default {
  components: { RouterLink, RouterView, NavigationBar },
};
</script>

<template>
  <NavigationBar></NavigationBar>
  <RouterView class="min-h-[calc(100vh_-_168px)]"></RouterView>
  <div class="mt-10 bg-black py-8"></div>
</template>

<style></style>

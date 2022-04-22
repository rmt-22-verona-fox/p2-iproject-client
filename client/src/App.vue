<script>
import HomePage from "./views/HomePage.vue";
import ListPage from "./views/ListPage.vue";
import Navbar from "./components/Navbar.vue";

export default {
  name: "App",
  components: {
    HomePage,
    Navbar,
    ListPage,
  },
};
</script>

<template>
  <Navbar></Navbar>
  <ListPage></ListPage>
</template>

<style>
body {
  background-color: #9dcd18;
}
</style>

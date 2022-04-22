<script>
import HomePage from "./views/HomePage.vue";
import ListPage from "./views/ListPage.vue";
import Navbar from "./components/Navbar.vue";
import LoginPage from "./views/LoginPage.vue";
import OrderHands from "./views/OrderHandsPage.vue";

export default {
  name: "App",
  components: {
    HomePage,
    Navbar,
    ListPage,
    LoginPage,
    OrderHands,
  },
};
</script>

<template>
  <Navbar></Navbar>
  <LoginPage></LoginPage><br />
  <OrderHands></OrderHands>
</template>

<style>
body {
  background-color: #9dcd18;
}
</style>

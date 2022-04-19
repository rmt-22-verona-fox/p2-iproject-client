<script>
import Container from "@/views/container/Container.vue";
import Button from "@/components/button/index.vue";
import Search from "../Header/Search/index.vue";
import Navigation from "../Header/Navigation/index.vue";

export default {
  components: {
    Container,
    Button,
    Search,
    Navigation,
  },

  methods: {
    loginButtonHandler() {
      this.$router.push("/masuk");
    },
  },
};
</script>

<template>
  <header class="h-[85px] bg-white shadow-lg p-4 z-20">
    <Container>
      <div class="flex justify-between items-center">
        <div class="flex">
          <router-link to="/">
            <img
              src="@/assets/travelio-logo-header.svg"
              alt="header-logo"
              height="48"
              width="200"
            />
          </router-link>
          <Search />
        </div>

        <div class="flex gap-5">
          <Navigation />
          <Button v-on:click="loginButtonHandler" class="w-[190px]"
            >Masuk</Button
          >
        </div>
      </div>
    </Container>
  </header>
</template>

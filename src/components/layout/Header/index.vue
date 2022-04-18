<script>
import Container from "@/views/container/Container.vue";
import Search from "../Header/Search/index.vue";
import Navigation from "../Header/Navigation/index.vue";

export default {
  components: {
    Container,
    Search,
    Navigation,
  },
};
</script>

<template>
  <header class="h-[85px] bg-white shadow-lg p-4 z-20">
    <Container>
      <div class="flex justify-between items-center">
        <div class="flex">
          <img
            src="@/assets/travelio-logo-header.svg"
            alt="header-logo"
            height="48"
            width="200"
          />
          <Search />
        </div>

        <div class="flex">
          <Navigation />
        </div>
      </div>
    </Container>
  </header>
</template>

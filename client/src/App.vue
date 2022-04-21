<script>
import sidebar from "@/components/SideBar.vue";

export default {
  components: {
    sidebar,
  },
  data() {
    return {
      minimized: true,
    };
  },
  methods: {
    sidebarHandler: function () {
      if (this.minimized) {
        this.minimized = false;
      } else {
        this.minimized = true;
      }
    },
  },
};
</script>

<template>
  <!-- navbar -->
  <va-navbar color="dark" shape class="mb-2">
    <template #left>
      <va-navbar-item style="font-size: 1.5rem"
        ><va-icon @click="sidebarHandler" class="mr-2"
          ><img src="@/assets/logo.png" alt="" style="height: 3rem" /> </va-icon
        >Ur Basketball Site</va-navbar-item
      >
    </template>
    <template #right>
      <va-button icon-right="home" to="/">Home</va-button>
    </template>
  </va-navbar>

  <div class="main-content row">
    <!-- sidebar -->
    <sidebar :minimized="minimized" />
    <div class="ml-3">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>
div.main-content {
  min-height: 80vh;
}
</style>

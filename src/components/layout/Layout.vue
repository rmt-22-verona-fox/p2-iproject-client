<script>
import Header from "@/components/layout/Header/index.vue";

export default {
  components: {
    Header,
  },
};
</script>

<template>
  <div>
    <Header />
    <slot></slot>
    <footer></footer>
  </div>
</template>

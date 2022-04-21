<script>
import Header from "@/components/layout/Header/index.vue";
import Footer from "@/components/layout/Footer/index.vue";

export default {
  components: {
    Header,
    Footer,
  },

  props: ["noFooter"],
};
</script>

<template>
  <div>
    <Header />
    <slot></slot>
    <Footer v-bind:class="noFooter ? 'hidden' : ''" />
  </div>
</template>

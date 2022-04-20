<script>
import Layout from "@/components/layout/Layout.vue";
import TopSection from "./TopSection/index.vue";
import BottomSection from "./BottomSection/index.vue";

export default {
  components: {
    Layout,
    TopSection,
    BottomSection,
  },
};
</script>

<template>
  <Layout>
    <TopSection />
    <BottomSection />
  </Layout>
</template>

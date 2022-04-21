<script>
import Layout from "@/components/layout/Layout.vue";
import TopSection from "@/views/ProfilePage/TopSection/index.vue";
import BottomSection from "@/views/ProfilePage/BottomSection/index.vue";

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

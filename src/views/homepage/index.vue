<script>
import Layout from "@/components/layout/Layout.vue";
import TopSection from "./TopSection/index.vue";
import BottomSection from "./BottomSection/index.vue";
import VerificationModal from "@/components/VerificationModal/index.vue";
import CheckoutModal from "@/components/CheckoutModal/index.vue";

export default {
  components: {
    Layout,
    TopSection,
    BottomSection,
    VerificationModal,
    CheckoutModal,
  },
};
</script>

<template>
  <Layout>
    <TopSection />
    <BottomSection />
    <div class="flex flex-row justify-between">
      <VerificationModal />
      <CheckoutModal />
    </div>
  </Layout>
</template>

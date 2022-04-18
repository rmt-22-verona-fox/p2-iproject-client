<script>
import Layout from "@/components/layout/Layout.vue";

export default {
  components: {
    Layout,
  },

  methods: {
    async payment() {
      await snap.pay("2108bf19-7c4f-4b52-9359-548d2549056e");
    },
  },
};
</script>

<template>
  <router-view></router-view>
  <!-- <button class="text-yellow-70 font-label" v-on:click="payment">Bayar!</button> -->
</template>

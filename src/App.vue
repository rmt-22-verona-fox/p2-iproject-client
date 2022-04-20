<script>
import Layout from "@/components/layout/Layout.vue";

export default {
  components: {
    Layout,
  },

  methods: {
    async payment() {
      await snap.pay("8ed9138b-22fc-4f5d-8107-d5b3dd548da0");
    },
  },
};
</script>

<template>
  <router-view></router-view>
  <!-- <button class="text-yellow-70 font-label" v-on:click="payment">Bayar!</button> -->
</template>

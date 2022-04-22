<script>
import { mapActions } from "pinia";
import { useCustomerStore } from "../stores/customer";
export default {
  name: "OrderHands",
  data() {
    return {
      hands: 1,
      snapToken: "",
    };
  },
  methods: {
    ...mapActions(useCustomerStore, ["orderHands"]),

    async orderHands() {
      try {
        const { data } = await this.orderHands(this.hands);

        snap.pay(data.token);
      } catch (error) {
        console.log(error);
        // this.$toast.error(error.response.data.message, {
        //   position: "top-right",
        //   duration: 3000,
        // });
      }
    },
  },
};
</script>

<template>
  <form>
    <label>Hands</label>
    <input type="integer" v-model="hands" />
    <button type="submit" v-on:click.prevent="orderHands">Order!</button>
  </form>
</template>

<template>
  <div class="flex h-screen items-center justify-center bg-indigo-100 ">

  <!-- Card -->
  <card class=" bg-white w-80 rounded-2xl border shadow py-12 px-8 hover:-translate-y-1 hover:shadow-2xl delay-75 duration-100">

    <!-- Header & Price -->
    <p class="text-3xl text-gray-700 font-semibold">  </p>
    <p class="text-xl text-gray-700 font-semibold mt-1"> Total Rp.50000 </p>

    <!-- Description -->
    <p class="text-sm text-gray-700 font-light mt-5 leading-7"> do you really want to make a transaction, if it's true then click the order button below </p>

    <!-- CTA Button -->
    <button @click.prevent="orderPay" class="mt-10 w-full py-3 rounded-xl border border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-gray-50">
      Order
    </button>

  </card>

</div>
</template>

<script>
import { mapActions,mapState } from "pinia";
import { useInventoryStore } from "@/stores/inventory.js";
export default {
  name: "payment",
  methods:{
    ...mapActions(useInventoryStore, ["orderPay","getpayment"]),
    orderPay(){
      window.location.href = this.payment.redirect_url
    }
  },
  computed:{
    ...mapState(useInventoryStore, ["myorder","payment"])
  },
}
</script>

<style>

</style>
<script >
import navbar from '@/components/navbar.vue'
import { mapActions } from "pinia";
import { useInventoryStore } from "@/stores/inventory.js";
export default{
    name :"app",
    components: {
    navbar
  },
  methods:{
    ...mapActions(useInventoryStore, ["isloginAction"]),
  },
  created() {
    if (localStorage.getItem("access_token")) {
      this.isloginAction("true");
    }
  },
}
</script>

<template>
<div>
  <div>
    <navbar></navbar>
  </div>
  <router-view />
</div>

</template>

<style>


</style>

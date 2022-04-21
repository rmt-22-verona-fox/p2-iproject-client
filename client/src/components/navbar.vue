<template>
  <nav >
  <div class="rounded-lg w-full bg-white">
    <div class="flex  border-t py-0 px-4 bg-slate-100">
      <span class="font-bold mt-3 text-xl italic text-sky-800 hover:text-blue-300 focus:text-transparent active:text-transparent border-0 shadow-none">Service Provider</span>
      <div class="flex ml-3">
        <router-link to="/home" class="flex items-center py-2 transition-colors duration-150 text-gray-700 hover:text-blue-600 border-b-4 border-transparent hover:border-blue-500">
        <span class="text-sm font-family-bree-serif">Home</span>
        </router-link>
        <router-link to="/addpost" class="flex items-center py-2 transition-colors duration-150 text-gray-700 hover:text-blue-600 border-b-4 border-transparent hover:border-blue-500 ml-5">
        <span  class="text-sm font-family-bree-serif">Add Service </span>
        </router-link>
        <router-link to="/myorder" class="flex items-center py-2 transition-colors duration-150 text-gray-700 hover:text-blue-600 border-b-4 border-transparent hover:border-blue-500 ml-5">
        <span  class="text-sm font-family-bree-serif">My Order</span>
        </router-link>
        <a v-if="isLogin" @click.prevent="logout" class="flex items-center py-2 transition-colors duration-150 text-gray-700 hover:text-blue-600 border-b-4 border-transparent hover:border-blue-500 ml-5">
        <span  class="text-sm font-family-bree-serif">Logout</span>
        </a>
        <router-link v-if="!isLogin" to="/" class="flex items-center py-2 transition-colors duration-150 text-gray-700 hover:text-blue-600 border-b-4 border-transparent hover:border-blue-500 ml-5">
        <span  class="text-sm font-family-bree-serif">Login</span>
        </router-link>
      </div>
    </div>
  </div>
</nav>
</template>

<script>
import { mapActions,mapState } from "pinia";
import { useInventoryStore } from "@/stores/inventory.js";
export default {
 name: "navbar",
 methods:{
  ...mapActions(useInventoryStore, ["isloginAction"]),
  logout() {
      localStorage.removeItem("access_token");
      this.isloginAction(false);
      this.$router.push("/home");
    },
 },
 computed: {
    ...mapState(useInventoryStore, ["isLogin"]),
  },
}
</script>

<style>

</style>
<template>
  <div class="h-screen bg-indigo-100 flex justify-center items-center">
	<div class="lg:w-2/5 md:w-1/2 w-2/3">
		<form @submit.prevent="submitOrder" class="bg-white p-10 rounded-lg shadow-lg min-w-full">
			<h1 class="text-center text-2xl mb-6 text-gray-600 font-bold font-sans">Order Service Provider</h1>
			<div>
				<label class="text-gray-800 font-semibold block my-3 text-md">Location</label>
				<input v-model="location" class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="text" placeholder="Location" />
      </div>
				<div>
					<label class="text-gray-800 font-semibold block my-3 text-md" >Message</label>
					<input v-model="message" class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" placeholder="Berin Genteng" />
      </div>
			<button type="submit" class="w-full mt-6 bg-indigo-600 rounded-lg px-4 py-2 text-lg text-white tracking-wide font-semibold font-sans">Order</button>
		</form>
	</div>
</div>
</template>

<script>
import { mapActions } from "pinia";
import { useInventoryStore } from "@/stores/inventory.js";
export default {
  name: "formOrder",
  data() {
    return {
      location: "",
      message: "",
    };
  },
  methods: {
    ...mapActions(useInventoryStore, ["orderAction"]),
    async submitOrder() {
      try {
        console.log("masuk submit");
        let postId = this.$route.params.id;
        const data = await this.orderAction({
          postId:postId,
          location: this.location,
          message: this.message,
        });
        console.log(data);
        this.$router.push("/myorder");
      } catch (error) {
        console.log("error: ", error);
      }
    },
  },
}
</script>

<style>

</style>
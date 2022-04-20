<template>
  <div class="h-screen bg-indigo-100 flex justify-center items-center">
	<div class="lg:w-2/5 md:w-1/2 w-2/3">
		<form @submit.prevent="submitPost" class="bg-white p-10 rounded-lg shadow-lg min-w-full">
			<h1 class="text-center text-2xl mb-6 text-gray-600 font-bold font-sans">Form Add your Post Service</h1>
			<div>
				<label class="text-gray-800 font-semibold block my-3 text-md">Location</label>
				<input v-model="location" class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="text" placeholder="Location" />
      </div>
				<div>
					<label class="text-gray-800 font-semibold block my-3 text-md" >Service Category</label>
					<input v-model="category" class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" placeholder="Berin Genteng" />
      </div>
					<div>
						<label class="text-gray-800 font-semibold block my-3 text-md">Image</label>
						<input v-model="imageUrl" class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" placeholder="format.jpg" />
      </div>
						<div>
							<label class="text-gray-800 font-semibold block my-3 text-md" for="confirm">Description Your Service</label>
							<input v-model="description" class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="text" placeholder="bisa benerin genteng dengan sangat cepat" />
      </div>
							<button type="submit" class="w-full mt-6 bg-indigo-600 rounded-lg px-4 py-2 text-lg text-white tracking-wide font-semibold font-sans">Add Post</button>
		</form>
	</div>
</div>
</template>

<script>
import { mapActions } from "pinia";
import { useInventoryStore } from "@/stores/inventory.js";
export default {
  name: "formAddPost",
  data() {
    return {
      location: "",
      category: "",
      imageUrl: "",
      description: "",
    };
  },
  methods: {
    ...mapActions(useInventoryStore, ["addPostAction"]),
    async submitPost() {
      try {
        const data = await this.addPostAction({
          location: this.location,
          category: this.category,
          imageUrl: this.imageUrl,
          description: this.description,
        });
        this.$router.push("/home");
      } catch (error) {
        console.log("error: ", error);
      }
    },
  },
}
</script>

<style>

</style>
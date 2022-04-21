<script>
import Rating from "./Rating/index.vue";

export default {
  props: ["testimony"],

  components: {
    Rating,
  },
};
</script>

<template>
  <article
    class="flex flex-col bg-white rounded-xl shadow w-[288px] h-[281px] p-4"
  >
    <div class="flex mb-4">
      <figure class="relative rounded-full overflow-hidden h-16 w-16 mr-3">
        <img
          v-bind:src="testimony?.imageUrl"
          v-bind:alt="testimony?.fullName"
          class="h-full object-cover w-full"
        />
      </figure>

      <div class="flex flex-col">
        <p class="text-heading-4 text-gray-100 font-label font-bold mb-1">
          {{ testimony?.fullName }}
        </p>
        <p class="text-heading-5 text-gray-50 font-bold">
          {{ testimony?.city }}
        </p>
      </div>
    </div>

    <div class="flex gap-1 align-center flex-row">
      <Rating v-for="i in Math.floor(testimony?.rating)" />
    </div>

    <p class="text-heading-5 text-gray-70 my-4 min-h-[80px]">
      {{ testimony?.review }}
    </p>
    <p class="text-heading-5 text-gray-100 font-bold">
      {{ testimony?.destination }}
    </p>
    <p class="text-heading-6 text-gray-50">
      {{ new Date(testimony?.checkoutDate).toLocaleDateString("id-ID") }}
    </p>
  </article>
</template>

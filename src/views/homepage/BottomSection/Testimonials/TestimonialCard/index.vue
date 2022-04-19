<script>
import Rating from "./Rating/index.vue";

export default {
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
          src="@/assets/home/profile.png"
          alt="Profile dummy"
          class="h-full object-cover"
        />
      </figure>

      <div class="flex flex-col">
        <p class="text-heading-4 text-gray-100 font-label font-bold mb-1">
          Afrilian Frily
        </p>
        <p class="text-heading-5 text-gray-50 font-bold">Bandung, Jawa Barat</p>
      </div>
    </div>

    <Rating />

    <p class="text-heading-5 text-gray-70 my-4">
      Nyari makanan halal gampang banget udah ada tour guidenya. tour guidenya
      juga ramah enak diajak ngobrol, dan penginapannya pun nyaman
    </p>

    <p class="text-heading-5 text-gray-100 font-bold">Nusa Penida, Bali</p>
    <p class="text-heading-6 text-gray-50">17-10-2020</p>
  </article>
</template>

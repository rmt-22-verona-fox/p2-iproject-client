<script>
import Button from "@/components/button/index.vue";

export default {
  components: {
    Button,
  },
};
</script>

<template>
  <div class="h-[650px] relative">
    <section class="section">
      <div
        class="flex flex-wrap justify-center text-center absolute bottom-0 right-1/2 translate-y-2/4 translate-x-2/4"
      >
        <div
          tabindex="0"
          class="focus:outline-none h-28 w-28 mb-4 lg:mb-0 mr-4"
        >
          <img
            src="@/assets/home/profile.png"
            alt="profile"
            class="h-full w-full rounded-full overflow-hidden shadow object-center object-cover"
          />
        </div>
      </div>
    </section>
    <div
      class="flex font-sans items-center justify-center text-center weight mt-24 flex-col"
    >
      <h1 class="select-none font-bold text-3xl text-primary-black">
        Afrilian Frily
      </h1>
      <p class="mt-4 text-gray-70 font-bold">Bandung, Jawa Barat</p>
      <p class="mt-4 text-gray-70 font-medium w-[405px] mb-6">
        Saya sangat senang sekali traveling ke berbagai tempat apa lagi dengan
        tempat seperti pegunungan
      </p>

      <Button
        class="w-[160px] font-normal border border-gray-50 bg-white text-gray-50 hover:bg-blue-100 hover:text-white hover:border-blue-100"
        >Edit Profile</Button
      >
    </div>
  </div>
</template>

<style scoped>
.section {
  position: relative;

  background-image: url("@/assets/home/bromo.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 300px;
}
</style>

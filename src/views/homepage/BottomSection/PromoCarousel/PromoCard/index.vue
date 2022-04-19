<script>
import Button from "@/components/button/index.vue";

export default {
  components: {
    Button,
  },
};
</script>

<template>
  <article
    class="flex bg-white shadow-lg rounded-xl overflow-hidden w-[500px] h-[312px]"
  >
    <div class="flex h-full">
      <figure class="w-[212px] h-full">
        <img
          src="@/assets/home/borobudur.png"
          alt="carousel-img"
          class="h-full object-cover"
        />
      </figure>
      <div class="flex flex-1 flex-col justify-center p-4">
        <p class="text-heading-4 text-gray-100 font-label font-bold">
          Borobudur, Yogyakarta
        </p>
        <p class="text-heading-4 text-gray-70 mb-4">Indonesia</p>

        <div class="flex gap-1">
          <p class="text-heading-5 text-gray-70 line-through">Rp 7.700.000</p>
          <p class="text-heading-5 text-red-100 font-bold">10%</p>
        </div>

        <p class="text-[16px] font-bold text-gray-100 mb-4">Rp 6.930.000</p>

        <p class="text-heading-5 text-gray-70 mb-4">
          Untuk 2 orang, tiket pesawat, tempat penginapan 5 malam, tour guide,
          mak...
        </p>

        <p class="text-heading-5 text-gray-50 mb-4">Berangkat: 27-11-2020</p>

        <div class="flex justify-between gap-3">
          <Button
            class="w-full bg-white border border-blue-100 text-blue-100 text-sm"
          >
            Lihat Detail
          </Button>
          <Button class="w-full text-sm"> Pesan </Button>
        </div>
      </div>
    </div>
  </article>
</template>

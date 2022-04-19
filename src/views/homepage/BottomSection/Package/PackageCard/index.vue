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
    class="flex flex-col bg-white rounded-xl shadow-lg overflow-hidden w-[393px]"
  >
    <figure class="relative w-full h-[268px]">
      <img
        src="@/assets/home/cliff.png"
        alt="cliff-image"
        class="h-full object-cover"
      />
    </figure>

    <div class="flex flex-col p-4">
      <div class="flex items-center mb-4">
        <img src="@/assets/icons/yellow-star.svg" height="20" width="20" />

        <p class="text-heading-5 text-gray-70 ml-1">4.6 (1.242 Review)</p>
      </div>

      <p class="text-heading-3 text-gray-100 font-label font-bold">
        Colloseum, Roma
      </p>
      <p class="text-heading-4 text-gray-70 mb-4">Italia</p>

      <p class="text-heading-3 text-gray-100 font-bold mb-4">Rp. 20.000.000</p>

      <p class="text-heading-5 text-gray-70 mb-4">
        Untuk 1 Orang, tiket pesawat, penginapan 5 malam, tour guide, makan
        siang, makan malam, transportasi travel
      </p>

      <div class="flex justify-between gap-3">
        <Button
          class="w-full bg-white border border-blue-100 text-blue-100 text-sm"
        >
          Lihat detail
        </Button>
        <Button class="w-full text-sm">Pesan</Button>
      </div>
    </div>
  </article>
</template>

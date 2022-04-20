<script>
import Container from "@/views/container/Container.vue";
import Button from "@/components/button/index.vue";
import InfoItem from "./InfoItem.vue";

export default {
  components: {
    Container,
    Button,
    InfoItem,
  },
};
</script>

<template>
  <section class="section h-[764px]">
    <Container>
      <div class="flex flex-col pt-[112px] pb-[58px]">
        <div class="flex flex-col mb-[174px]">
          <h1
            class="text-heading-2 font-bold font-label text-gray-100 w-[500px] mb-8"
          >
            Jelajahi Dunia Yang Indah Dengan Satu Sentuhan
          </h1>

          <p class="text-heading-3 text-gray-70 w-[526px] mb-7">
            Jelajahi dunia yang indah dengan satu sentuhan dengan pesan tiket di
            Travel10. <Kamu></Kamu> akan dapatkan pelayanan terbaik untuk wisata
            liburanmu. Kemana saja dan kapan saja
          </p>

          <Button class="w-[190px]">Lihat Paket</Button>
        </div>

        <div class="flex gap-40 mx-auto">
          <InfoItem label="+30" subLabel="Negara" />
          <InfoItem label="+1500" subLabel="Penginapan" />
          <InfoItem label="+100" subLabel="Tempat Wisata" />
          <InfoItem label="+50.000" subLabel="Pelanggan" />
        </div>
      </div>
    </Container>
  </section>
</template>

<style scoped>
.section {
  background-image: url("@/assets/home/header.png");
  background-position: right top;
  background-repeat: no-repeat;
  background-size: initial;
}
</style>

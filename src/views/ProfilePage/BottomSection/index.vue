<script>
import HistoryCard from "@/views/ProfilePage/BottomSection/HistoryCard/index.vue";
import Container from "../../container/Container.vue";

export default {
  components: {
    Container,
    HistoryCard,
  },
};
</script>

<template>
  <Container class="mb-16">
    <div class="flex flex-row gap-8 justify-center text-gray-70 cursor-pointer">
      <button
        class="font-bold focus:underline focus:text-blue-100 focus:underline-offset-1"
      >
        Riwayat Perjalanan
      </button>
      <button
        class="font-bold focus:underline focus:text-blue-100 focus:underline-offset-1"
      >
        Favorit
      </button>
    </div>
    <div class="flex justify-between mt-10">
      <HistoryCard />
      <HistoryCard />
      <HistoryCard />
    </div>
  </Container>
</template>

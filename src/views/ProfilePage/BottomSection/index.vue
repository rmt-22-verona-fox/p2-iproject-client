<script>
import { mapWritableState, mapActions } from "pinia";
import { useTransactionStore } from "../../../stores/transaction";
import HistoryCard from "@/views/ProfilePage/BottomSection/HistoryCard/index.vue";
import Container from "../../container/Container.vue";
import { useToast } from "vue-toastification";

export default {
  setup() {
    const toast = useToast();
    return { toast };
  },

  components: {
    Container,
    HistoryCard,
  },

  computed: {
    ...mapWritableState(useTransactionStore, [
      "profileHistoryList",
      "noHistoryMessage",
    ]),
  },

  methods: {
    ...mapActions(useTransactionStore, ["fetchProfileHistory"]),
  },

  async created() {
    try {
      const response = await this.fetchProfileHistory();

      if (response.data?.message) {
        this.noHistoryMessage = response.data?.message;
      } else {
        this.profileHistoryList = response.data;
      }
    } catch (err) {
      this.toast.error(err.response?.data?.message);
    }
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

    <p
      class="my-14 text-heading-3 text-blue-100 text-center font-bold"
      v-if="noHistoryMessage"
    >
      {{ noHistoryMessage }}
    </p>
    <div class="flex justify-between mt-10" v-if="!noHistoryMessage">
      <HistoryCard
        v-for="(history, i) in profileHistoryList"
        v-bind:key="i"
        v-bind:history="history"
      />
    </div>
  </Container>
</template>

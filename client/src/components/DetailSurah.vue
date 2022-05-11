<script>
import { mapActions, mapState } from "pinia";
import { useSurahStore } from "../stores/SurahStore";
import ListAyat from "./ListAyat.vue";
export default {
  methods: {
    ...mapActions(useSurahStore, ["detailSurah"]),
  },
  created() {
    this.detailSurah(this.$router.currentRoute.value.params.id);
    
  },
  computed: {
    ...mapState(useSurahStore, ["oneSurah"]),
  },
  components: {
    ListAyat,
  },
};
</script>

<template>
  <div class="container-fluid">
    <div class="d-flex justify-content-center align-items-center flex-column">
      <p class="my-3 ms-3 fs-3 fst-italic fw-bold">{{ oneSurah.name }}</p>
      <p class="mb-3 ms-3 fw-bold fs-5 fst-italic fw-bold">
        "{{ oneSurah.translation }}"
      </p>
      <ListAyat
        v-for="verse in oneSurah.verses"
        :key="oneSurah.number"
        :verse="verse"
        :number="oneSurah.number"
      />
    </div>
  </div>
</template>

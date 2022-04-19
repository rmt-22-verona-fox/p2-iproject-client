<script>
import { mapActions, mapState } from "pinia";
import { useSurahStore } from "../stores/SurahStore";
import { useLoginStore } from "../stores/LoginStore";
import SurahCard from "./SurahCard.vue";

export default {
  methods: {
    ...mapActions(useSurahStore, ["getSurah", "randomSurah"]),

  },

  created() {
    this.getSurah();
    // this.randomSurah();
  },
  computed: {
    ...mapState(useSurahStore, ["surahs", "randomSurahData"]),
    ...mapState(useLoginStore, ['randomSurahLoginData']),

  },
  components: {
    SurahCard,
  },
};
</script>

<template>
  <div class="row m-2 my-5" id="home-page">
    <div class="row d-flex justify-content-center">
      <div
        class="m-3 d-flex p-1 dailySurah justify-content-between flex-column"
      >
        <p class="my-3 mx-3 fs-3 fst-italic fw-bold breakWord">
          {{ randomSurahLoginData.surah }}
        </p>
        <p class="mb-3 mx-3 fw-bold fs-5 breakWord">Ayat-{{randomSurahLoginData.ayat}}</p>
        <p class="my-3 mx-3 fs-3 fw-bold breakWord hurufArab">
          {{randomSurahLoginData.arab}}
        </p>
        <p class="my-3 mx-3 fs-5 breakWord fst-italic">
        "{{randomSurahLoginData.latin}}"
        </p>
        <p class="my-3 mx-3 fs-5 fst-italic breakWord">
          "{{randomSurahLoginData.indonesia}}"
        </p>
      </div>
    </div>
    <SurahCard v-for="surah in surahs" :key="surah.number" :surah="surah" />
  </div>
</template>

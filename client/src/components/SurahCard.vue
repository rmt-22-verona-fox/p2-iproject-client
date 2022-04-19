<script>
import { mapActions, mapState } from "pinia";
import { useSurahStore } from "../stores/SurahStore";
export default {
    
  props: ["surah"],
  methods:{
      goToDetail(id){
          this.$router.push({ name: "surah", params: { id: `${id}` } });

          this.detailSurah(id)
      },
      ...mapActions(useSurahStore, ['detailSurah'])
  }
};
</script>

<template>
  <div class="mt-5 d-flex col justify-content-start">
    <div
      class="m-3 d-flex p-1 surahBox justify-content-between flex-row align-items-center"
    >
      <a class="ms-3 namaSurah">{{ surah.number }}</a>

      <div class="ms-4">
        <a @click.prevent="goToDetail(surah.number)" class="m-0 namaSurah">{{ surah.name }} ({{ surah.verses }})</a>
        <p class="m-0 fst-italic">{{ surah.translate }}</p>
      </div>
      <div class="mx-4">
        <p class="m-0 text-center fs-3">{{ surah.arab }}</p>
      </div>
      <a href="" class="red-btn"><i class="bi bi-bookmark"></i></a>
    </div>
  </div>
</template>

<script>
import { mapActions } from "pinia";
import { useSurahStore } from "../stores/SurahStore";
export default {
  props: ["bookmark"],
  methods: {
    goToDetail(id) {
      this.$router.push({ name: "surah", params: { id: `${id}` } });

      this.detailSurah(id);
    },
    ...mapActions(useSurahStore, ["detailSurah", "deleteBookmark"]),
    deleteBookmarkComponent(id) {
      this.deleteBookmark(id);
    },
  },
};
</script>

<template>
  <div
    class="m-3 d-flex p-1 surahBox justify-content-between flex-row align-items-center"
  >
    <a class="ms-3 namaSurah">{{ bookmark.number }}</a>

    <div class="ms-4">
      <a @click.prevent="goToDetail(bookmark.number)" class="m-0 namaSurah"
        >{{ bookmark.name }} ({{ bookmark.verses }})</a
      >
      <p class="m-0 fst-italic">{{ bookmark.translate }}</p>
    </div>
    <div class="mx-4">
      <p class="m-0 text-center fs-3">{{ bookmark.arab }}</p>
    </div>
    <a
      href=""
      class="red-btn"
      @click.prevent="deleteBookmarkComponent(bookmark.id)"
      ><i style="color: red" class="bi bi-trash3"></i
    ></a>
  </div>
</template>

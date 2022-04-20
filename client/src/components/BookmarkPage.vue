<script>
import BookmarkCard from "../components/BookmarkCard.vue";
import { mapActions, mapState } from "pinia";
import { useSurahStore } from "../stores/SurahStore";
export default {
  components: {
    BookmarkCard,
  },
  methods: {
    ...mapActions(useSurahStore, ["getBookmarks"]),
  },
  created() {
    this.getBookmarks();
  },
  computed:{
      ...mapState(useSurahStore, ['dataBookmarks'])
  }
};
</script>

<template>
  <div class="row m-2 my-5" id="bookmark">
    <p class="my-3 ms-3 fs-3 fst-italic fw-bold text-center">Bookmarks</p>
    <div
      class="mt-5 ms-5 mx-auto d-flex flex-row justify-content-start flex-wrap"
    >
      <BookmarkCard v-for="bookmark in dataBookmarks" :key="bookmark.id" :bookmark="bookmark" />
    </div>
  </div>
</template>

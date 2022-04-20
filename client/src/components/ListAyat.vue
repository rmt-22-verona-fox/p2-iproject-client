<script>
export default {
  props: ["verse", "number"],
};
</script>

<template>
  <div
    class="d-flex justify-content-start detailSurah flex-column border-bottom"
  >
    <p class="my-3 ms-3 fs-4 fw-bold breakWord hurufArab">
      {{ number }}-{{ verse.ayat }}
    </p>
    <p class="my-3 ms-3 fs-3 fw-bold breakWord hurufArab">
      {{ verse.arab }}
    </p>
    <p class="my-3 ms-3 fs-6 breakWord fst-italic">
      {{ verse.latin }}
    </p>
    <p class="my-3 ms-3 fs-6 fst-italic breakWord">
      {{ verse.indonesia }}
    </p>
    <audio class="my-3 ms-3" controls>
      <source :src="verse.audio" />
    </audio>
  </div>
</template>

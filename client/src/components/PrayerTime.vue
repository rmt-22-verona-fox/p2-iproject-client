<script>
import { mapState, mapActions } from "pinia";
import { useLoginStore } from "../stores/LoginStore";
export default {
  computed: {
    ...mapState(useLoginStore, ["currentPrayerTime"]),
  },
  methods: {
    ...mapActions(useLoginStore, ["getGeolocation"]),
  },
  
};
</script>

<template>
  <div class="col text-center">
    <div class="row d-flex justify-content-center">
      <p class="my-3 mx-3 fs-3 fst-italic fw-bold breakWord">
        {{ currentPrayerTime?.date }}
      </p>
      <div
        class="m-3 d-flex p-1 prayerTimeBox justify-content-center flex-column"
      >
        <p class="m-0">Subuh</p>
        <p class="m-0">{{ currentPrayerTime?.time?.Fajr }}</p>
      </div>
      <div
        class="m-3 d-flex p-1 prayerTimeBox justify-content-center flex-column"
      >
        <p class="m-0">Zuhur</p>
        <p class="m-0">{{ currentPrayerTime?.time?.Dhuhr }}</p>
      </div>
      <div
        class="m-3 d-flex p-1 prayerTimeBox justify-content-center flex-column"
      >
        <p class="m-0">Ashar</p>
        <p class="m-0">{{ currentPrayerTime?.time?.Asr }}</p>
      </div>
      <div
        class="m-3 d-flex p-1 prayerTimeBox justify-content-center flex-column"
      >
        <p class="m-0">Maghrib</p>
        <p class="m-0">{{ currentPrayerTime?.time?.Maghrib }}</p>
      </div>
      <div
        class="m-3 d-flex p-1 prayerTimeBox justify-content-center flex-column"
      >
        <p class="m-0">Isya</p>
        <p class="m-0">{{ currentPrayerTime?.time?.Isha }}</p>
      </div>
    </div>
  </div>
</template>

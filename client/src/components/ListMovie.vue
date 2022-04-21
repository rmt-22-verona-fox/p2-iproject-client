<script>
import { mapActions } from "pinia";
import { useDatingStore } from "@/stores/dating";
export default {
  props: ["trailer"],
};
</script>

<template>
  <!-- <div class="container">
    <div>
      <h2 class="">{{ trailer.title }}</h2>
    </div>
    <br />
    <div>
      <p>
        <img
          :src="trailer.thumbnailUrl"
          :alt="movieId.title"
          width="200"
          height="300"
        />
      </p>
    </div>

    <div>
      <b> Trailer: </b>
      <p>
        <iframe width="560" height="315" :src="trailer.linkEmbed"> </iframe>
      </p>
    </div>
    <div>
      <p>Sinopsis:</p>
      <p>{{ trailer.videoDescription }}</p>
    </div>
  </div> -->
</template>

<style></style>

<script>
import axios from "axios";
import { mapActions, mapState, mapWritableState } from "pinia";
import { usePokemonStore } from "../stores/pokemons";

export default {
  data() {
    return {
      video: {
        id: "",
        thumbnail: "",
        title: "",
      },
    };
  },
  computed: {
    ...mapState(usePokemonStore, ["pokemons"]),
    ...mapState(usePokemonStore, ["currentPokemon"]),
  },
  methods: {
    ...mapActions(usePokemonStore, [
      "getTypeColor",
      "fetchPokemons",
      "getPaginationData",
      "getPokemonDetails",
      "getCurrentPokemon",
    ]),
    getStatsBar(stat) {
      const width = Math.floor((stat / 255) * 100);
      return width;
    },
  },
  async created() {
    try {
      await this.getCurrentPokemon(this.$route.path.split("/")[2]);
      const { data } = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=pokemon%20${
          this.currentPokemon.name
        }%20anime&key=${import.meta.env.VITE_YT_API_KEY}`
      );
      this.video.id = data.items[0].id.videoId;
      this.video.thumbnail = data.items[0].snippet.thumbnails.medium.url;
      this.video.title = data.items[0].snippet.title;
    } catch (err) {
      this.$swal({
        title: "Error",
        text: err,
        icon: "error",
      });
    }
  },
};
</script>

<template>
  <div class="mt-10 flex px-5 py-4 shadow-lg">
    <div class="flex basis-1/4 flex-col justify-between">
      <div>
        <p class="font-medium">
          #{{
            currentPokemon.id < 10
              ? `00${currentPokemon.id}`
              : currentPokemon.id < 100
              ? `0${currentPokemon.id}`
              : currentPokemon.id
          }}
        </p>
        <p class="text-2xl font-medium uppercase tracking-wide">
          {{
            currentPokemon.name.toUpperCase()[0] + currentPokemon.name.slice(1)
          }}
        </p>
        <p class="my-3 text-justify tracking-wide">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec varius
          pulvinar nisi, non luctus libero tincidunt non. Sed finibus leo odio,
          vitae consequat magna fermentum quis. Suspendisse nec nulla in purus
          aliquet cursus quis vel nibh. Maecenas pulvinar nulla accumsan ligula
          pellentesque imperdiet.
        </p>
      </div>
      <div>
        <p class="mb-2 text-xl font-medium">Major appearance</p>
        <div class="h-[157.5px] w-full">
          <iframe
            :src="'https://www.youtube.com/embed/' + video.id"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
    <div class="basis-2/4">
      <div class="overflow-hidden">
        <img
          class="w-full object-contain"
          :src="currentPokemon.imageUrl"
          alt=""
        />
      </div>
    </div>
    <div class="flex basis-1/4 flex-col justify-start gap-y-10">
      <div>
        <p class="text-xl font-medium">Type</p>
        <span
          v-for="typeName in currentPokemon.types"
          :class="getTypeColor(typeName)"
          class="mr-2 rounded-md px-4 text-[11px] font-semibold uppercase"
          >{{ typeName }}</span
        >
      </div>
      <div>
        <p class="text-xl font-medium">Weaknesses</p>
        <span
          :class="getTypeColor('ground')"
          class="mr-2 rounded-md px-4 text-[11px] font-semibold uppercase"
          >Ground</span
        >
        <span
          :class="getTypeColor('grass')"
          class="mr-2 rounded-md px-4 text-[11px] font-semibold uppercase"
          >Grass</span
        >
      </div>
      <div class="flex flex-col gap-y-2">
        <div v-for="stat in currentPokemon.stats" class="">
          <p>HP: {{ stat }}</p>
          <div class="relative h-2 overflow-hidden rounded-lg">
            <div :class="getStatsBar" class="absolute h-full bg-black"></div>
            <div class="h-full w-full bg-gray-400"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

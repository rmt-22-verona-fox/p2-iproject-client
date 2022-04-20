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
      console.log(err);
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
  <div class="flex pt-10">
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
        <p>
          The flame inside its body burns hotter than 3,600 degrees Fahrenheit.
          When Charizard roars, that temperature climbs even higher. It evolves
          from Charmeleon starting at level 36. It is the final form of
          Charmander
        </p>
      </div>
      <div>
        <p>Major appearance</p>
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
    <div class="flex basis-1/4 flex-col justify-between">
      <div>
        <p>Type</p>
        <span
          v-for="typeName in currentPokemon.types"
          :class="getTypeColor(typeName)"
          class="mr-2 rounded-md px-4 text-[11px] font-semibold uppercase"
          >{{ typeName }}</span
        >
      </div>
      <div>
        <p>Weaknesses</p>
        <span>Water</span>
        <span>Electric</span>
        <span>Rock</span>
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

<script>
import { mapState, mapActions } from "pinia";
import { useAuthenStore } from "../stores/authentication";
import { useMyPokemonStore } from "../stores/myPokemons";
import PokemonMiniCard from "./PokemonMiniCard.vue";

export default {
  components: { PokemonMiniCard },
  data() {
    return {
      chatMessage: "",
      chats: [],
      selectedPokemon: -1,
      selectedPokemonDetail: {},
      showPokemonList: false,
      confirmTradeCount: 0,
    };
  },
  computed: {
    ...mapState(useAuthenStore, ["trainer"]),
    ...mapState(useMyPokemonStore, ["myPokemons"]),
  },
  watch: {
    selectedPokemon(val) {
      if (val !== -1) {
        this.selectedPokemonDetail = this.myPokemons.find(
          (el) => el.detail.id == val
        );
      }
    },
  },
  sockets: {
    connect() {
      console.log("connected", this.$socket);
    },
    disconnect() {
      console.log("disconnected", this.$socket);
    },
    customEventFromServer(payload) {
      console.log("customEventFromServer", payload);
    },
    receivedMessageFromServer(chats) {
      this.chats = chats;
    },
  },
  methods: {
    ...mapActions(useMyPokemonStore, ["tradeRequest"]),
    sendMessage() {
      this.$socket.client.emit("sendMessageToServer", {
        UserId: this.trainer.id,
        user: this.trainer.username,
        message: this.chatMessage.trim(),
      });
      this.chatMessage = "";
    },
    togglePokemonList() {
      this.showPokemonList = !this.showPokemonList;
      this.selectedPokemon = -1;
    },
    selectPokemon(id) {
      this.selectedPokemon = id;
    },
    addToTrade() {
      this.$socket.client.emit("sendPokemonToTrade", {
        UserId: this.trainer.id,
        user: this.trainer.username,
        message: "I want to trade my pokemon",
        PokemonId: this.selectedPokemon,
      });
      this.togglePokemonList();
    },
    async confirmTradeHandler() {
      try {
        if (this.confirmTradeCount < 1) {
          this.confirmTradeCount++;
        } else if (this.confirmTradeCount == 1) {
          this.confirmTradeCount++;
          const tradeData = this.chats.slice(-2);
          // firstUserId, firstPokemonId, secondUserId, secondPokemonId
          const { data } = await tradeRequest();
        }
      } catch (err) {
        this.$swal({
          title: "Error",
          text: err.response.data.message,
          icon: "error",
        });
      }
    },
  },
  created() {
    this.$socket.client.emit("sendMessageToServer");
  },
};
</script>

<template>
  <div class="mx-auto mt-10">
    <div class="border">
      <div class="lg:w-[720px]">
        <div class="w-full">
          <div class="relative flex items-center border-b border-gray-300 p-3">
            <img
              class="h-10 w-10 rounded-full object-cover"
              src="../assets/star-pokemon-32.png"
              alt="username"
            />
            <span class="ml-2 block font-bold text-gray-600"
              >Trade Room {{ $route.path[$route.path.length - 1] }}</span
            >
          </div>
          <div class="relative h-[40rem] w-full overflow-y-auto p-6">
            <!-- Chat content -->
            <ul class="space-y-2">
              <li
                v-for="(chat, idx) in chats"
                :key="chat.user + idx"
                :class="{
                  'justify-end': chat.user == trainer.username,
                  'justify-start': chat.user != trainer.username,
                }"
                class="flex"
              >
                <div
                  class="relative max-w-xl rounded px-4 py-2 text-gray-700 shadow"
                >
                  <span class="block font-bold underline">{{ chat.user }}</span>
                  <span class="block">{{ chat.message }}</span>
                  <!-- Pokemon In Chat -->
                  <div
                    v-if="chat.PokemonId"
                    class="inline-flex items-center gap-x-2"
                  >
                    <div class="h-8 w-8 rounded-full border">
                      <img
                        :src="chat.imageUrl"
                        alt=""
                        class="h-full w-full object-contain"
                      />
                    </div>
                    <div class="text-xs font-bold uppercase">
                      {{
                        chat.pokemonName[0].toUpperCase() +
                        chat.pokemonName.slice(1)
                      }}
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <button
                  @click="confirmTradeHandler"
                  class="w-full bg-green-500 py-2 font-semibold uppercase text-white hover:bg-green-700"
                >
                  Confirm Trade ( {{ confirmTradeCount }} / 2 )
                </button>
              </li>
            </ul>
          </div>
          <div
            v-if="showPokemonList"
            class="flex flex-wrap gap-x-4 gap-y-2 border-t py-4"
          >
            <PokemonMiniCard
              v-for="pokemon in myPokemons"
              :key="pokemon.id"
              :pokemon="pokemon"
              :selected-pokemon="selectedPokemon"
              @select-pokemon="selectPokemon"
            ></PokemonMiniCard>
            <button
              @click="addToTrade"
              class="rounded-xl border px-2 py-0 text-xs uppercase shadow-lg hover:bg-gray-200"
            >
              Submit
            </button>
            <button @click="selectedPokemon = -1">
              <img src="../assets/reset-24.png" alt="" />
            </button>
          </div>
          <div
            class="flex w-full items-center justify-between gap-x-4 border-t border-gray-300 p-3"
          >
            <input
              @keyup.enter="sendMessage"
              v-model="chatMessage"
              type="text"
              placeholder="Message"
              class="block w-full rounded-full bg-gray-100 py-2 pl-4 outline-none focus:text-gray-700"
              name="message"
              required
            />
            <button @click="togglePokemonList" type="button">
              <img src="../assets/pokeballs-32.png" alt="" />
            </button>
            <button @click="sendMessage" type="submit">
              <svg
                class="h-5 w-5 origin-center rotate-90 transform text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

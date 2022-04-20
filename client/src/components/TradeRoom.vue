<script>
import { mapState } from "pinia";
import { useAuthenStore } from "../stores/authentication";

export default {
  data() {
    return {
      chatMessage: "",
      chats: [],
    };
  },
  computed: {
    ...mapState(useAuthenStore, ["trainer"]),
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
    clickButton(msg) {
      this.$socket.client.emit("customEventFromClient", {
        message: msg,
      });
    },
    sendMessage() {
      this.$socket.client.emit("sendMessageToServer", {
        user: this.trainer.username,
        message: this.chatMessage.trim(),
      });
      this.chatMessage = "";
    },
  },
  created() {
    // this.$socket.client.emit("setUsername", localStorage.username);
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
                </div>
              </li>
            </ul>
          </div>

          <div
            class="flex w-full items-center justify-between border-t border-gray-300 p-3"
          >
            <input
              @keyup.enter="sendMessage"
              v-model="chatMessage"
              type="text"
              placeholder="Message"
              class="mx-3 block w-full rounded-full bg-gray-100 py-2 pl-4 outline-none focus:text-gray-700"
              name="message"
              required
            />
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

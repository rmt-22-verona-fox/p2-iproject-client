<script>
import { mapState, mapActions } from "pinia";
import { useCounterStore } from "../stores/counter";

export default {
  sockets: {
    receiveMessageServer: function (payload) {
      console.log("receiveMessageServer", payload);
      this.chats = "";
    },
  },
  data() {
    return {
      chats: [],
      chatMessage: "",
    };
  },
  methods: {
    ...mapActions(useCounterStore, ["sendMessage"]),
    sendTheMessage() {
      this.sendMessage(this.chatMessage);
      this.chatMessage = "";
    },
  },
  computed: {
    ...mapState(useCounterStore, ["currentEmail"]),
  },
};
</script>

<template>
  <div>
    <p
      class="border border-dark mt-2"
      style="border-radius: 20px; background-color: white; padding: 10px"
    >
      {{ currentEmail }}
    </p>
  </div>
  <div class="border border-dark" style="height: 200px; border-radius: 20px">
    <div
      class="mb-2 mx-1"
      :class="[chat.user === currentEmail ? 'text-start' : 'text-end']"
      v-for="(chat, i) in chats"
      :key="chat.user + i"
      :chat="chat"
    >
      <div>{{ chat.user }}</div>
      <div>{{ chat.message }}</div>
    </div>
  </div>
  <div
    class="border border-dark mt-2"
    style="height: 90px; border-radius: 20px"
  >
    <textarea
      placeholder="input text here"
      class="mt-1 border border-dark"
      style="height: 80px; width: 98%; border-radius: 20px"
      v-model="chatMessage"
      @keyup.enter="sendTheMessage"
    />
  </div>
</template>

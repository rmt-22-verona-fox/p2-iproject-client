<script>
export default {
  
  methods: {
    joinRoom(path) {
      this.$socket.client.emit("setUsername", localStorage.username);
      this.$router.push(path);
    },
  },
};
</script>

<template>
  <div class="flex flex-col items-center justify-center">
    <div>
      <img src="@/assets/trade-icon.png" alt="" />
    </div>
    <h1 class="mb-10 text-3xl font-semibold uppercase">
      Join a room to start trading
    </h1>
    <div class="grid grid-cols-2 gap-4">
      <div
        class="flex w-96 items-center justify-between rounded-2xl border border-black px-4 py-2 text-2xl font-medium uppercase"
      >
        <div class="">Room 1</div>
        <div
          @click="joinRoom('/trade/room/1')"
          class="cursor-pointer rounded-2xl bg-green-400 px-4 py-2 text-sm text-green-800 hover:scale-105"
        >
          Join
        </div>
      </div>
      <div
        class="flex w-96 items-center justify-between rounded-2xl border border-black px-4 py-2 text-2xl font-medium uppercase"
      >
        <div class="">Room 2</div>
        <div
          @click="joinRoom('/trade/room/2')"
          class="cursor-pointer rounded-2xl bg-green-400 px-4 py-2 text-sm text-green-800 hover:scale-105"
        >
          Join
        </div>
      </div>
      <div
        class="flex w-96 items-center justify-between rounded-2xl border border-black px-4 py-2 text-2xl font-medium uppercase"
      >
        <div class="">Room 3</div>
        <div
          @click="joinRoom('/trade/room/3')"
          class="cursor-pointer rounded-2xl bg-green-400 px-4 py-2 text-sm text-green-800 hover:scale-105"
        >
          Join
        </div>
      </div>
      <div
        class="flex w-96 items-center justify-between rounded-2xl border border-black px-4 py-2 text-2xl font-medium uppercase"
      >
        <div class="">Room 4</div>
        <div
          @click="joinRoom('/trade/room/4')"
          class="cursor-pointer rounded-2xl bg-green-400 px-4 py-2 text-sm text-green-800 hover:scale-105"
        >
          Join
        </div>
      </div>
    </div>
  </div>
</template>

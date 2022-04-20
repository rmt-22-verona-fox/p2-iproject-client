<script>
import { mapActions, mapWritableState } from "pinia";
import { useDatingStore } from "@/stores/dating";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapWritableState(useDatingStore, ["ProfilesList"]),
  },
  props: ["profile", "gender"],
  methods: {
    ...mapActions(useDatingStore, [
      "addPartner",
      "listProfile",
      "listRequest",
      "accept",
    ]),
    accepting(id) {
      this.accept(id);
      this.$router.push("/");
    },
    request(id) {
      this.addPartner(id);
      this.listRequest();
      this.listProfile();
      this.$router.push("/");
    },
  },
};
</script>

<template>
  <div class="card marginlist" style="width: 30rem">
    <img
      :src="profile.photoProfile"
      class="card-img-top"
      alt="..."
      width="400"
      height="300"
    />
    <div class="card-body">
      <h5 class="card-title">{{ profile.name }}</h5>
      <p class="card-text">Gender : {{ profile.gender }}</p>
      <p class="card-text">Age : {{ profile.age }}</p>
      <a
        v-if="gender === 'male'"
        href=""
        class="btn btn-primary"
        @click.prevent="request(profile.id)"
        >Request</a
      >
      <a
        v-if="gender === 'female'"
        href=""
        class="btn btn-primary"
        @click.prevent="accepting(profile.UserId)"
        >accept</a
      >
    </div>
  </div>
</template>

<style>
.marginlist {
  margin-top: 100px;
  margin-left: 430px;
}
</style>

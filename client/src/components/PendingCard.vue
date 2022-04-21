<script>
import { mapActions, mapState } from "pinia";
import { useDatingStore } from "@/stores/dating";
export default {
  data() {
    return {
      local: "https://dating-kacau.herokuapp.com/images/",
    };
  },
  computed: {
    ...mapState(useDatingStore, ["List"]),
  },
  methods: {
    ...mapActions(useDatingStore, [
      "cencelRequest",
      "listRequest",
      "listProfile",
    ]),
    cencel(id) {
      this.cencelRequest(id);
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
      :src="local + List[0].Profile.photoProfile"
      class="card-img-top"
      alt="..."
      width="400"
      height="300"
    />
    <div class="card-body">
      <h5 class="card-title">{{ List[0].Profile.name }}</h5>
      <p class="card-text">Gender : {{ List[0].Profile.gender }}</p>
      <p class="card-text">Age : {{ List[0].Profile.age }}</p>
      <p class="card-text">status : {{ List[0].status }}</p>
      <a href="" class="btn btn-primary" @click.prevent="cencel(List[0].id)"
        >cencel</a
      >
    </div>
  </div>
</template>

<style>
.marginlist {
  margin-top: 20px;
  margin-left: 430px;
}
</style>

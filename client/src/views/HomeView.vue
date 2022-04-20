<script>
import NavBar from "../components/NavBar.vue";
import { mapActions, mapState } from "pinia";
import { useDatingStore } from "../stores/dating";
import ListPartner from "../components/ListPartner.vue";
import PendingCard from "../components/PendingCard.vue";
import PartnerProfile from "../components/PartnerProfile.vue";
export default {
  data() {
    return {
      gender: "",
    };
  },
  computed: {
    ...mapState(useDatingStore, ["phtotofilter", "List", "Partner"]),
  },
  methods: {
    ...mapActions(useDatingStore, [
      "profile",
      "listProfile",
      "listRequest",
      "yourPartner",
    ]),
    async getProfile() {
      try {
        const { data } = await this.profile();
        this.gender = data.Profile.gender;
      } catch (error) {
        this.$swal({
          icon: "error",
          title: "Oops...",
          text: error.response.data.message,
        });
        if (error.response.data.message === "Invalid token") {
          localStorage.clear();
          this.$router.push("/login");
        }
        this.$router.push("/addProfile");
      }
    },
  },
  components: { NavBar, ListPartner, PendingCard, PartnerProfile },
  created() {
    this.yourPartner();
    this.listProfile();
    this.getProfile();
    this.listRequest();
  },
  onUpdated() {
    this.getProfile();
    this.listProfile();
    this.listRequest();
  },
};
</script>

<template>
  <NavBar />
  <div>
    <PartnerProfile v-if="Partner.length > 0" />
  </div>
  <div v-if="List.length > 0 && Partner.length < 0">
    <PendingCard />
  </div>
  <div v-if="List.length === 0 && Partner.length < 0">
    <ListPartner
      v-for="(profile, index) in phtotofilter"
      :key="index"
      :profile="profile"
      :gender="gender"
    />
  </div>
</template>

<style></style>

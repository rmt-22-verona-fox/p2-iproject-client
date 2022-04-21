<script>
import { mapActions, mapState } from "pinia";
import { useCounterStore } from "../stores/counter";
import DynamicCard from "@/components/DynamicCard.vue";

export default {
  methods: {
    ...mapActions(useCounterStore, ["getDoctors", "assignToken"]),
  },
  computed: {
    ...mapState(useCounterStore, ["readDoctors"]),
  },
  components: {
    DynamicCard,
  },
  async created() {
    this.assignToken();
    await this.getDoctors();
  },
};
</script>

<template>
  <div id="contact" class="contact-box">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="title-box">
            <h2>Appoint Us</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>
      <div class="dynamic-card">
        <DynamicCard
          v-for="(element, index) in readDoctors.data"
          :key="index"
          :element="element"
          class="dynamic-component"
        />
      </div>
    </div>
  </div>
</template>

<style>
.dynamic-card {
  display: flex;
  justify-content: space-between;
}
.dynamic-component {
  margin-right: 40px;
}
</style>

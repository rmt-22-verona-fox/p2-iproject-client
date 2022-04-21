<script>
import { mapState } from "pinia";
import { useDatingStore } from "@/stores/dating";

export default {
  data() {
    return {
      local: "https://dating-kacau.herokuapp.com/images/",
    };
  },
  computed: {
    ...mapState(useDatingStore, ["Partner"]),
  },
};
</script>

<template>
  <div class="container page">
   
    <p>
      
    </p>
    <div>
      <h2 class="">{{ Partner[0].name }}</h2>
    </div>
    <div>
      <img
        :src="local + Partner[0].photoProfile"
        class="card-img-top"
        alt="..."
      />
    </div>
    <br />
    <div class="float-left">
      <div>
        <span class="card__status tagGenre">{{ Partner[0].gender }}</span>
      </div>
 
      <div>
        <span class="ratingDetail">age : {{ Partner[0].age }}</span>
      </div>

      <div>
        <span class="ratingDetail">Phone : {{ Partner[0].phoneNumber }}</span>
      </div>
    </div>
  </div>
</template>

<style>

.float {
  float: right;
  margin-right: 20px;
}
.card-img-top {
  width: 400px;
  height: auto;
}
</style>

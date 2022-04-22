<script>
import axios from "axios";
import { mapWritableState } from "pinia";
import { useCounterStore } from "./stores/counter";
import leaflet from "leaflet";
import { onMounted, ref } from "vue";
import MainPage from "./views/MainPage.vue";
import LoginView from "@/views/LoginView.vue";
import DetailPage from "./views/DetailPage.vue";

export default {
  components: {
    MainPage,
    LoginView,
    DetailPage,
  },
};
</script>

<template>
  <router-view />
</template>

<style>
.bookingDetails {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
}
.hotelCard {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 430px;
  height: 175px;
}

.overflow {
  font-size: 20px;
  width: 450px;
  height: 550px;
  overflow: auto;
}

.btn-success {
  margin-top: 1px;
}

.col-md-4 {
  height: 200px;
}
#map {
  height: 100vh;
}
#main {
  padding: 1rem;
}
.actionSide {
  padding: 5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
  top: 0;
}

.back-card {
  border-radius: 40px !important;
  color: white;
  background: linear-gradient(to bottom right, #707070, #434647);
  text-shadow: 2px 2px 2px #707070;
}

.city-name {
  position: absolute;
  width: 100%;
  top: 0;
}

.city-name p {
  font-weight: 400;
  font-size: 16pt;
}

.city-name span {
  top: -60px;
  font-size: 40pt;
  font-family: "Times New Roman", Times, serif;
}

.temp span {
  font-weight: 100;
  font-size: 4em;
  letter-spacing: -5px;
  white-space: nowrap;
}
.card-mid {
  line-height: 0.5;
}
.condition {
  font-size: 1em;
  font-weight: 700;
  line-height: 1em;
  text-transform: capitalize;
}

.high {
  font-size: 15px;
}

.low {
  font-size: 15px;
}

.card-bottom p {
  font-size: 35px;
  font-weight: 100;
  letter-spacing: -3px;
}
.card-bottom {
  line-height: 0.5;
}

.card-bottom span {
  font-size: 12px;
}

.form-control:focus {
  box-shadow: none;
  border-color: inherit;
}

.mapSide {
  padding: 0;
}
</style>

<script>
import CardCityDest from "../components/CardCityDest.vue";
import axios from "axios";

export default {
  data() {
    return {
      hotels: {},
      destination: "",
      city: [],
      cityId: "",
    };
  },
  components: {
    CardCityDest,
  },
  methods: {
    async getCityData() {
      try {
        const data = await axios({
          method: "GET",
          url: "https://priceline-com-provider.p.rapidapi.com/v1/hotels/locations",
          params: { search_type: "ALL", name: this.destination },
          headers: {
            "X-RapidAPI-Host": "priceline-com-provider.p.rapidapi.com",
            "X-RapidAPI-Key":
              "d693f0e4b0mshc42d6ce177e0179p10dcdejsn59499c9fbcae",
          },
        });

        this.city = data.data;

        const idParams = data.data[0].cityID;
        const response = await axios({
          method: "GET",
          url: "https://priceline-com-provider.p.rapidapi.com/v1/hotels/search",
          params: {
            date_checkin: "2022-06-17",
            location_id: idParams,
            date_checkout: "2022-06-18",
            sort_order: "HDR",
          },
          headers: {
            "X-RapidAPI-Host": "priceline-com-provider.p.rapidapi.com",
            "X-RapidAPI-Key":
              "d693f0e4b0mshc42d6ce177e0179p10dcdejsn59499c9fbcae",
          },
        });
        this.hotels = response.data.hotels;
        console.log(response.data.hotels);
        console.log(this.hotels);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<template>
  <div
    class="container-fluid"
    style="
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 1rem;
      padding: 1rem;
    "
  >
    <label for="" class="mb-3">Choose your destination</label>
    <form class="d-flex mb-3">
      <input
        v-model="destination"
        class="form-control me-2"
        type="search"
        placeholder="Your choice"
        aria-label="Search"
      />
      <button
        @click.prevent="getCityData"
        class="btn btn-outline-success"
        type="submit"
      >
        Search
      </button>
    </form>
    <div
      class="card mb-2 mt-3"
      style="max-width: 540px"
      v-for="hotel in hotels"
      :key="hotel.hotelId"
      :hotel="hotel"
    >
      <div class="row g-0">
        <div class="col-md-4">
          <img
            :src="hotel.thumbnailUrl"
            class="img-fluid rounded-start"
            alt="..."
            style="height: 225px"
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{{ hotel.name }}</h5>
            <h6>Rating</h6>
            <h5 class="card-text" style="color: orange">
              {{ hotel.overallGuestRating }}/10
            </h5>
            <h3>
              Rp
              {{
                Math.round(
                  hotel.ratesSummary.minPrice * 14350
                ).toLocaleString()
              }},00 / Night
            </h3>
            <span><button class="btn btn-success">Book</button></span>
          </div>
        </div>
      </div>
    </div>

    <!-- <div class="row mt-3" style="margin-left: 8rem">
      <div
        class="col-2 p-2"
        v-for="dest in city"
        :key="dest.cityID"
        :dest="dest"
      >
        <div class="card h-100" style="width: 11rem">
          <img src="../assets/profile.png" class="card-img-top" alt="..." />
          <div class="card-body">
            <h6 class="card-title">{{ dest.itemName }}</h6>
            <p class="card-text"></p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<style>
.card {
  width: 600px;
  height: 225px;
}

.col-md-4 {
  height: 200px;
}
</style>

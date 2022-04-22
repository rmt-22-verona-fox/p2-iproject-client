<script>
import axios from "axios";
import { mapWritableState, mapActions } from "pinia";
import { useCounterStore } from "../stores/counter";
import { onMounted } from "vue";
import ChatPage from "../components/ChatPage.vue";

export default {
  components: { ChatPage },
  setup() {
    onMounted(() => {
      mapboxgl.accessToken =
        "pk.eyJ1IjoibXVqaWJyYSIsImEiOiJjbDI3ODI0YTMwbG9mM2pvOHYxdXZnNmJwIn0.ZfSJT23rFmZgo-R6mTvhww";

      navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
        enableHighAccuracy: true,
      });

      function successLocation(position) {
        console.log(position);
        setupMap([position.coords.longitude, position.coords.latitude]);
      }

      function errorLocation() {}

      function setupMap(center) {
        const map = new mapboxgl.Map({
          container: "map", // container ID
          style: "mapbox://styles/mapbox/streets-v11", // style URL // starting position [lng, lat]
          zoom: 13, // starting zoom
          center: center,
        });

        const nav = new mapboxgl.NavigationControl();
        map.addControl(nav);

        var directions = new MapboxDirections({
          accessToken:
            "pk.eyJ1IjoibXVqaWJyYSIsImEiOiJjbDI3ODI0YTMwbG9mM2pvOHYxdXZnNmJwIn0.ZfSJT23rFmZgo-R6mTvhww",
        });

        map.addControl(directions, "top-left");
      }
    });
  },
  data() {
    return {
      isPage: false,
      hotels: {},
      cityFound: false,
      visible: false,
      stormy: false,
      cloudy: false,
      clearSky: false,
      clearNight: false,
      snowy: false,
      destination: "",
      city: [],
      cityId: "",

      coordsCityLat: [],
      coordsCityLng: [],
      isDay: true,
      citySearch: "",
      weather: {
        cityName: "Indonesia",
        country: "NG",
        temperature: 12,
        description: "Clouds everywhere",
        lowTemp: "19",
        highTemp: "30",
        feelsLike: "20",
        humidity: "55",
      },
    };
  },
  methods: {
    async getWeather() {
      try {
        const key = "08b9af430477a2a0f1a9fdf062be77b0";
        const baseUrl = await axios(
          `https://api.openweathermap.org/data/2.5/weather?q=${this.citySearch}&appid=${key}&units=metric`
        );

        const data = baseUrl.data;
        this.citySearch = "";
        this.coordsCity = data.coord;
        this.weather.cityName = data.name;
        this.weather.country = data.sys.country;
        this.weather.temperature = Math.round(data.main.temp);
        this.weather.description = data.weather[0].description;
        this.weather.lowTemp = Math.round(data.main.temp_min);
        this.weather.highTemp = Math.round(data.main.temp_max);
        this.weather.feelsLike = Math.round(data.main.feels_like);
        this.weather.humidity = Math.round(data.main.humidity);

        const timeOfDay = data.weather[0].icon;

        ///check for time of day
        if (timeOfDay.includes("n")) {
          this.isDay = false;
        } else {
          this.isDay = true;
        }

        const mainWeather = data.weather[0].main;
        //check weather animations
        if (mainWeather.includes("Clouds")) {
          this.stormy = false;
          this.cloudy = true;
          this.clearSky = false;
          this.clearNight = false;
          this.snowy = false;
        }
        if (mainWeather.includes("Clouds")) {
          this.stormy = false;
          this.cloudy = true;
          this.clearSky = false;
          this.clearNight = false;
          this.snowy = false;
        }
        if (
          mainWeather.includes("Thunderstorm") ||
          mainWeather.includes("Rain")
        ) {
          this.stormy = true;
          this.cloudy = false;
          this.clearSky = false;
          this.clearNight = false;
          this.snowy = false;
        }
        if (mainWeather.includes("Clear") && this.isDay) {
          this.stormy = false;
          this.cloudy = false;
          this.clearSky = true;
          this.clearNight = false;
          this.snowy = false;
        }
        if (mainWeather.includes("Clouds") && !this.isDay) {
          this.stormy = false;
          this.cloudy = false;
          this.clearSky = false;
          this.clearNight = true;
          this.snowy = false;
        }
        if (mainWeather.includes("Snow")) {
          this.stormy = false;
          this.cloudy = false;
          this.clearSky = false;
          this.clearNight = false;
          this.snowy = true;
        }

        this.visible = true;
        this.cityFound = false;
      } catch (error) {
        console.log(error);
      }
    },

    async getCityData() {
      try {
        const data = await axios({
          method: "GET",
          url: "https://priceline-com-provider.p.rapidapi.com/v1/hotels/locations",
          params: { search_type: "ALL", name: this.citySearch },
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
        this.coordsCityLat = response.data.hotels[0].location.latitude;
        this.coordsCityLng = response.data.hotels[0].location.longitude;
        this.hotels = response.data.hotels;
        console.log(this.coordsCity);
      } catch (error) {
        console.log(error);
      }
    },

    async bookData(payload) {
      const harga = Math.round(payload.ratesSummary.minPrice);
      console.log(harga);
      try {
        await axios.post("https://step-inn-i-project.herokuapp.com/booking", {
          hotelName: payload.name,
          price: harga * 14000,
        });
      } catch (error) {
        console.log(error);
      }
    },

    logoutEvent() {
      localStorage.clear();
      this.$router.push("/login");
    },
    ...mapActions(useCounterStore, [
      "sendCustomEventToServer",
      "socket_customEventFromServer",
    ]),

    chatPage() {
      this.isPage = true;
    },
  },
  computed: {
    ...mapWritableState(useCounterStore, ["isLogin"]),
  },
  created() {
    if (localStorage.getItem("email")) {
      this.isLogin = true;
    }
    this.sendCustomEventToServer();
  },
};
</script>

<template>
  <!-- Navbar -->
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">StepInn</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/"
              >Home</router-link
            >
          </li>
          <li class="nav-item">
            <button
              type="button"
              class="btn bg-light nav-link active"
              aria-current="page"
              @click="chatPage"
            >
              Chat
            </button>
          </li>
          <li class="nav-item">
            <button
              class="btn bg-light nav-link active"
              aria-current="page"
              @click="logoutEvent"
            >
              Logout
            </button>
          </li>
          <li class="nav-item"></li>
        </ul>
        <form class="d-flex" @submit.prevent="getWeather">
          <input
            v-model="citySearch"
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            @click="getCityData"
            class="btn btn-outline-success"
            type="submit"
          >
            Search
          </button>
        </form>
        <router-link to="/detail" class="btn mx-3 bg-light" style="border: 0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-cart"
            viewBox="0 0 16 16"
          >
            <path
              d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
            />
          </svg>
        </router-link>
      </div>
    </div>
  </nav>

  <!-- Wheater card -->
  <div class="container-fluid">
    <div class="row">
      <div class="col-5 actionSide">
        <div class="row" style="padding: 0">
          <div class="col-5">
            <div id="main">
              <div style="width: 300px">
                <div
                  class="card rounded my-3 shadow-lg back-card overflow-hidden"
                  v-if="visible"
                >
                  <!-- weather animation container -->

                  <!-- Top of card starts here -->
                  <div class="card-top text-center" style="margin-bottom: 6rem">
                    <div class="city-name my-2">
                      <p>{{ weather.cityName }}</p>
                      <span>...</span>
                      <span
                        ><p class="" style="margin-top: -10px">
                          {{ weather.country }}
                        </p></span
                      >
                    </div>
                  </div>
                  <!-- top of card ends here -->

                  <!--card middle body, card body used cos I want to just update the innerHTML -->
                  <div class="card-body">
                    <!-- card middle starts here -->
                    <div class="card-mid">
                      <div class="row">
                        <div class="col-12 text-center temp">
                          <span>{{ weather.temperature }}&deg;C</span>
                          <p class="my-4">{{ weather.description }}</p>
                        </div>
                      </div>
                      <div class="row">
                        <div
                          class="col d-flex justify-content-between px-5 mx-5"
                        >
                          <p>
                            <img src="../assets/up.svg" alt="" />
                            {{ weather.lowTemp }}&deg;C
                          </p>
                          <p>
                            <img src="../assets/up.svg" alt="" />
                            {{ weather.highTemp }}&deg;C
                          </p>
                        </div>
                      </div>
                    </div>
                    <!-- card middle ends here -->

                    <!-- card bottom starts here -->
                    <div class="card-bottom px-5 py-2 row">
                      <div class="col text-center">
                        <p>{{ weather.feelsLike }}&deg;C</p>
                        <span>Feels like</span>
                      </div>
                      <div class="col text-center">
                        <p>{{ weather.humidity }}%</p>
                        <span>humidity</span>
                      </div>
                    </div>

                    <!-- card bottom ends here -->
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            v-if="isPage"
            class="col-7"
            style="
              display: flex;
              flex-direction: column;
              background-color: #d1fffa;
              border-radius: 20px;
              text-align: center;
            "
          >
            <ChatPage></ChatPage>
          </div>
        </div>
        <div>
          <h2 v-if="visible">List destination hotel</h2>
          <div class="overflow">
            <div
              class="card hotelCard mb-2 mt-3"
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
                    style="height: 175px"
                  />
                </div>
                <div class="col-md-8" style="height: 175px">
                  <div class="card-body" style="height: 175px">
                    <h6 class="card-title">
                      {{ hotel.name ? hotel.name : "Unknown" }}
                    </h6>
                    <h6>Rating</h6>
                    <h6 class="card-text" style="color: orange">
                      {{ hotel.overallGuestRating }}/10
                    </h6>
                    <h6>
                      Rp
                      {{
                        Math.round(
                          hotel.ratesSummary.minPrice * 14350
                        ).toLocaleString()
                      }},00 / Night
                    </h6>
                    <button
                      @click.prevent="bookData(hotel)"
                      class="btn btn-success"
                    >
                      Book
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-7 mapSide">
        <div class="" id="map"></div>
      </div>
    </div>
  </div>

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
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
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
  position: relative;
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

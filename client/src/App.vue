<script>
import axios from "axios";
import { mapActions, mapState } from "pinia";
import { useCounterStore } from "./stores/counter";
import leaflet from "leaflet";
import { onMounted, ref } from "vue";
import GeoErrorModal from "./components/GeoErrorModal.vue";

export default {
  components: {
    GeoErrorModal,
  },
  setup() {
    onMounted(() => {
      mapboxgl.accessToken =
        "pk.eyJ1IjoibXVqaWJyYSIsImEiOiJjbDI3ODI0YTMwbG9mM2pvOHYxdXZnNmJwIn0.ZfSJT23rFmZgo-R6mTvhww";

      navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
        enableHighAccuracy: true,
      });

      function successLocation(coordsCity) {
        console.log(position);
        setupMap([position.coords.longitude, position.coords.latitude]);
      }

      function errorLocation() {}

      function setupMap(center) {
        const map = new mapboxgl.Map({
          container: "map", // container ID
          style: "mapbox://styles/mapbox/streets-v11", // style URL
          center: [-74.5, 40], // starting position [lng, lat]
          zoom: 14, // starting zoom
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
      hotels: [],
      cityFound: false,
      visible: false,
      stormy: false,
      cloudy: false,
      clearSky: false,
      clearNight: false,
      snowy: false,

      coordsCity: [],
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

    async getHotel() {
      try {
        const response = await axios({
          method: "GET",
          url: `https://hotel-price-aggregator.p.rapidapi.com/search`,
          params: { q: this.citySearch },
          headers: {
            "X-RapidAPI-Host": "hotel-price-aggregator.p.rapidapi.com",
            "X-RapidAPI-Key":
              "d693f0e4b0mshc42d6ce177e0179p10dcdejsn59499c9fbcae",
          },
        });
        console.log(response);
        this.hotels = response;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<template>
  <!-- Navbar -->
  <nav class="navbar navbar-expand-lg navbar-light">
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
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li>
                <a class="dropdown-item" href="#">Something else here</a>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled">Disabled</a>
          </li>
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
            @click="getHotel"
            class="btn btn-outline-success"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  </nav>

  <!-- Wheater card -->
  <div class="container-fluid">
    <div class="row">
      <div class="col-3 actionSide">
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
                    <div class="col d-flex justify-content-between px-5 mx-5">
                      <p>
                        <img src="./assets/down.svg" alt="" />
                        {{ weather.lowTemp }}&deg;C
                      </p>
                      <p>
                        <img src="./assets/up.svg" alt="" />
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
        <div>
          <h6 v-if="visible">{{ hotels }}</h6>
        </div>
      </div>
      <div class="col-9 mapSide">
        <GeoErrorModal></GeoErrorModal>
        <div class="" id="map"></div>
      </div>
    </div>
  </div>
</template>

<style>
#map {
  height: 100vh;
}
#main {
  padding: 1rem;
}
.actionSide {
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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

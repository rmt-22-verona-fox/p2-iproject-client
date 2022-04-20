<script>
import axios from "axios";
import { mapActions } from "pinia";
import { useCounterStore } from "./stores/counter";
import leaflet from "leaflet";
import { onMounted } from "vue";

export default {
  setup() {
    let map;
    onMounted(() => {
      map = leaflet.map("map").setView([28.538336, -81.379234], 10);

      // Add tile layer
      L.tileLayer(
        `https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibXVqaWJyYSIsImEiOiJjbDI3YTRoNzMwNmYwM2RxbHlydzM5eHppIn0.rjQY1Zd4Mnn78rU6HkCjUg`,
        {
          attribution:
            'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
          maxZoom: 18,
          id: "mapbox/streets-v11",
          tileSize: 512,
          zoomOffset: -1,
          accessToken:
            "pk.eyJ1IjoibXVqaWJyYSIsImEiOiJjbDI3YTRoNzMwNmYwM2RxbHlydzM5eHppIn0.rjQY1Zd4Mnn78rU6HkCjUg",
        }
      ).addTo(map);
    });
  },
  data() {
    return {
      cityFound: false,
      visible: false,
      stormy: false,
      cloudy: false,
      clearSky: false,
      clearNight: false,
      snowy: false,

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
    ...mapActions(useCounterStore, ["getCity"]),

    async getWeather() {
      try {
        const key = "08b9af430477a2a0f1a9fdf062be77b0";
        const baseUrl = await axios(
          `https://api.openweathermap.org/data/2.5/weather?q=${this.citySearch}&appid=${key}&units=metric`
        );

        const data = baseUrl.data;
        console.log(data);
        this.citySearch = "";
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
  },
  created() {
    this.getCity();
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
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>

  <!-- Wheater card -->
  <div class="container-fluid">
    <div class="row">
      <div class="col-3 actionSide">
        <div id="main" :class="isDay ? 'day' : 'night'">
          <div class="container" style="width: 400px; min-width: 360px">
            <div
              class="card rounded my-3 shadow-lg back-card overflow-hidden"
              v-if="visible"
            >
              <!-- weather animation container -->

              <!-- Top of card starts here -->
              <div class="card-top text-center" style="margin-bottom: 15rem">
                <div class="city-name my-3">
                  <p>{{ weather.cityName }}</p>
                  <span>...</span>
                  <p class="">{{ weather.country }}</p>
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
                <div class="card-bottom px-5 py-4 row">
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
      <div class="col-9 mapSide">
        <div class="contaier" id="map"></div>
      </div>
    </div>
  </div>
</template>

<style>
#map {
  height: 100vh;
}
.actionSide {
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  justify-items: center;
}

.day {
  background: linear-gradient(to bottom left, #d7d3ac, #ffffff);
  height: 100vh;
  width: 100vw;
}
.night {
  background: linear-gradient(to bottom left, #4854a2, #3d3d3d);
  color: white;
}

.title {
  font-size: 30px;
  font-weight: 500;
}

.form-rounded {
  border-radius: 2rem;
  height: 2rem;
  width: 15rem;
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
}

.city-name p {
  font-weight: 400;
  font-size: 16pt;
}

.city-name span {
  position: relative;
  top: -50px;
  font-size: 40pt;
  font-family: "Times New Roman", Times, serif;
}

.temp span {
  font-weight: 100;
  font-size: 5em;
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
  font-size: 50px;
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

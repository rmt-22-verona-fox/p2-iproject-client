<script>
import { defineComponent } from "vue";
import { GoogleMap, Marker, InfoWindow } from "vue3-google-map";
import { useHotelStore } from "../stores/hotel.js";
import { mapActions, mapWritableState } from "pinia";
import axios from "axios";

export default defineComponent({
  data() {
    return {
      center: { lat: -6.223189, lng: 106.84785 },
      CE: {},
      NE: {},
      SW: {},
      mark: {
        position: {},
      },
      marks: [],
      hotelData: {
        name: "",
        price: 0,
        roomType: "",
        checkIn: "",
        checkOut: "",
        hotelClass: "",
        lat: 0,
        lng: 0,
      },
    };
  },
  components: { GoogleMap, Marker, InfoWindow },
  computed: {
    ...mapWritableState(useHotelStore, ["hotelData"]),
  },
  methods: {
    ...mapActions(useHotelStore, ["booking"]),
    getCoordinates: function () {
      let mapDiv = document.getElementById("map");
      let mapOptions = {
        zoom: 17,
        center: new google.maps.LatLng(this.center.lat, this.center.lng),
      };
      let map = new google.maps.Map(mapDiv, mapOptions);

      google.maps.event.addListener(map, "bounds_changed", () => {
        let bounds = map.getBounds(),
          northEast = {
            lat: bounds.getNorthEast().lat(),
            lng: bounds.getNorthEast().lng(),
          },
          southWest = {
            lat: bounds.getSouthWest().lat(),
            lng: bounds.getSouthWest().lng(),
          },
          center = {
            lat: bounds.getCenter().lat(),
            lng: bounds.getCenter().lng(),
          };

        this.NE = northEast;
        this.SW = southWest;
        this.CE = center;
      });
    },
    showPoint: function (position) {
      let mapDiv = document.getElementById("map");
      let mapOptions = {
        zoom: 17,
        center: new google.maps.LatLng(position.lat, position.lng),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
      };
      let map = new google.maps.Map(mapDiv, mapOptions);

      new google.maps.Marker({
        position: new google.maps.LatLng(position.lat, position.lng),
        map: map,
      });

      google.maps.event.addListener(map, "bounds_changed", () => {
        let bounds = map.getBounds(),
          northEast = {
            lat: bounds.getNorthEast().lat(),
            lng: bounds.getNorthEast().lng(),
          },
          southWest = {
            lat: bounds.getSouthWest().lat(),
            lng: bounds.getSouthWest().lng(),
          },
          center = {
            lat: bounds.getCenter().lat(),
            lng: bounds.getCenter().lng(),
          };
        this.NE = northEast;
        this.SW = southWest;
        this.CE = center;
      });
    },
    getHotels: async function () {
      try {
        const options = {
          method: "GET",
          url: "https://travel-advisor.p.rapidapi.com/hotels/list-in-boundary",
          params: {
            bl_latitude: this.SW.lat,
            bl_longitude: this.SW.lng,
            tr_longitude: this.NE.lng,
            tr_latitude: this.NE.lat,
          },
          headers: {
            "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
            "X-RapidAPI-Key":
              "253d42d414msh4d146002ed12dbbp1cf8bcjsn5a561bb3fd3a",
          },
        };
        const response = await axios.get(options.url, {
          params: options.params,
          headers: options.headers,
        });
        let data = [];
        for (let i = 0; i < response.data.data.length; i++) {
          if (response.data.data[i].photo) {
            data.push({
              name: response.data.data[i].name,
              photo: response.data.data[i].photo.images.original.url,
              position: {
                lat: Number(response.data.data[i].latitude),
                lng: Number(response.data.data[i].longitude),
              },
              hotelClass: response.data.data[i].hotel_class,
            });
          }
        }
        this.marks = data;
        let map = new google.maps.Map(document.getElementById("map"), {
          zoom: 17,
          center: new google.maps.LatLng(this.CE.lat, this.CE.lng),
          mapTypeId: google.maps.MapTypeId.ROADMAP,
        });

        let infowindow = new google.maps.InfoWindow();
        let marker, i;
        for (i = 0; i < data.length; i++) {
          marker = new google.maps.Marker({
            position: new google.maps.LatLng(
              data[i].position.lat,
              data[i].position.lng
            ),
            map: map,
          });
          google.maps.event.addListener(
            marker,
            "click",
            (function (marker, i) {
              return function () {
                infowindow.setContent(data[i].name);
                infowindow.open(map, marker);
              };
            })(marker, i)
          );
        }
        google.maps.event.addListener(map, "bounds_changed", () => {
          let bounds = map.getBounds(),
            northEast = {
              lat: bounds.getNorthEast().lat(),
              lng: bounds.getNorthEast().lng(),
            },
            southWest = {
              lat: bounds.getSouthWest().lat(),
              lng: bounds.getSouthWest().lng(),
            },
            center = {
              lat: bounds.getCenter().lat(),
              lng: bounds.getCenter().lng(),
            };
          this.NE = northEast;
          this.SW = southWest;
          this.CE = center;
        });
      } catch (error) {
        this.$swal.fire({
          icon: "error",
          title: error.response.data.message,
          text: "Something went wrong!",
        });
      }
    },
    bookHotelData: async function (data) {
      try {
        console.log(data);
        this.hotelData = {
          hotel: data.name,
          price: 300000,
          roomType: "Suites",
          checkIn: new Date(),
          checkOut: new Date(),
          hotelClass: +data.hotelClass,
          lat: data.position.lat,
          lng: data.position.lng,
        };
        console.log(this.hotelData);
        await axios.post('http://localhost:3000/booking', this.hotelData, {
          headers: {
            access_token: localStorage.access_token,
          },
        });
      } catch (error) {
        this.$swal.fire({
          icon: "error",
          title: error.response.data.message,
          text: "Something went wrong!",
        });
      }
    },
  },
});
</script>

<template>
  <div
    style="
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
    "
  >
    <div
      class="hotelCard"
      style="
        height: calc(100vh - 80px);
        background: #222;
        width: 40%;
        display: flex;
        flex-wrap: wrap;
        overflow-y: scroll;
        padding-bottom: 70px;
      "
    >
      <div
        style="
          position: fixed;
          display: flex;
          justify-content: space-around;
          background: rgb(255, 0, 0);
          width: 40%;
        "
      >
        <a
          @click.prevent="getCoordinates"
          style="
            margin: 10px;
            color: white;
            cursor: pointer;
            text-align: center;
          "
          >Click to Start</a
        >
        <a
          @click.prevent="getHotels"
          style="
            margin: 10px;
            color: white;
            cursor: pointer;
            text-align: center;
          "
        >
          Get Hotels
        </a>
      </div>

      <br />
      <div
        style="
          width: 100%;
          height: 420px;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          margin-top: 80px;
          margin-bottom: 0px;
        "
        v-for="(hotel, index) in marks"
        :key="index"
      >
        <div
          style="
            width: 90%;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            background: white;
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
            box-shadow: 5px 5px 10px grey;
            align-items: center;
          "
        >
          <p
            style="
              color: black;
              text-align: center;
              height: 50px;
              width: 90%;
              display: flex;
              align-items: center;
              justify-content: center;
            "
            @click="showPoint(hotel.position)"
          >
            {{ hotel.name }} ({{ hotel.hotelClass }})
          </p>
          <a
            style="
              width: 10%;
              align-items: center;
              color: red;
              font-weight: bold;
            "
            @click.prevent="bookHotelData(hotel)"
            >Book</a
          >
          <img
            :src="hotel.photo"
            style="width: 100%; height: 400px; object-fit: cover"
          />
        </div>
      </div>
    </div>
    <GoogleMap
      id="map"
      api-key="AIzaSyA2iEASRtMt6erUFj3Eff7_99kV0B9vtAo"
      style="width: 60%; height: calc(100vh - 80px)"
      :center="center"
      :zoom="17"
    >
    </GoogleMap>
  </div>
</template>

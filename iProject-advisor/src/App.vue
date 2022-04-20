<script>
import { defineComponent, onMounted } from "vue";
import { GoogleMap, Marker, InfoWindow } from "vue3-google-map";
import axios from "axios";

const url = "https://travel-advisor.p.rapidapi.com/hotels/list-in-boundary";

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
      hotelData: [],
    };
  },
  components: { GoogleMap, Marker, InfoWindow },
  methods: {
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
        console.log(southWest);
        console.log(northEast);
        console.log(center, 'ini center')
        this.NE = northEast;
        this.SW = southWest;
        this.CE = center
      });
      console.log(this.NE, this.SW);
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
        console.log(response.data);
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
            });
          }
        }
        console.log(data);
        this.marks = data;

        var map = new google.maps.Map(document.getElementById("map"), {
          zoom: 17,
          center: new google.maps.LatLng(this.CE.lat, this.CE.lng),
          mapTypeId: google.maps.MapTypeId.ROADMAP,
        });

        var infowindow = new google.maps.InfoWindow();

        var marker, i;

        for (i = 0; i < data.length; i++) {
          marker = new google.maps.Marker({
            position: new google.maps.LatLng(data[i].position.lat, data[i].position.lng),
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

        // let mapDiv = document.getElementById("map");
        // for (let j = 0; j < data.length; j++) {
        //   let mapOptions = {
        //     zoom: 17,
        //     center: new google.maps.LatLng(
        //       data[j].position.lat,
        //       data[j].position.lng
        //     ),
        //     mapTypeId: google.maps.MapTypeId.ROADMAP,
        //   };
        //   let map = new google.maps.Map(mapDiv, mapOptions);

        //   new google.maps.Marker({
        //     position: new google.maps.LatLng(
        //       data[j].position.lat,
        //       data[j].position.lng
        //     ),
        //     map: map,
        //   });
        // }
      } catch (error) {
        console.log(error.response.data.message);
      }
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
    },
  },
});
</script>

<template>
  <div style="display: flex; justify-content: center; align-items: center">
    <div
      style="
        background: black;
        width: 40%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        overflow-y: scroll;
      "
      :style="marks.length === 0 ? 'height:auto' : 'height:100vh'"
    >
      <a
        @click.prevent="getCoordinates"
        style="
          margin: 10px;
          color: white;
          cursor: pointer;
          width: 100%;
          text-align: center;
        "
        >Card for hotel</a
      >
      <a
        @click.prevent="getHotels"
        style="
          margin: 10px;
          color: white;
          cursor: pointer;
          width: 100%;
          text-align: center;
        "
      >
        Get Hotels
      </a>
      <br />
      <div
        style="
          width: 100%;
          height: 420px;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          margin-top: 20px;
          margin-bottom: 50px;
        "
        v-for="hotel in marks"
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
          "
        >
          <p
            style="
              color: black;
              text-align: center;
              height: 50px;
              width: 100%;
              display: flex;
              align-items: center;
              justify-content: center;
            "
            @click="showPoint(hotel.position)"
          >
            {{ hotel.name }}
          </p>
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
      style="width: 60%; height: 100vh"
      :center="center"
      :zoom="17"
    >
      <!-- <Marker
        :options="{ position: center }"
      /> -->
      <!-- <InfoWindow
        :options="{
          position: center,
          content: JSON.stringify(center, null, 2),
        }"
      /> -->
    </GoogleMap>
  </div>
</template>

<style>
* {
  margin: 0;
}
</style>

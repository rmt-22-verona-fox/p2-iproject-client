<script>
import axios from "axios";
export default {
  data() {
    return {
      bookData: [],
    };
  },

  methods: {
    async FeetchBooking() {
      try {
        const data = await axios.get("http://localhost:8080/booking");
        this.bookData = data.data;
        console.log(this.bookData);
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.FeetchBooking();
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
            <router-link class="nav-link active" aria-current="page" to="/"
              >Home</router-link
            >
          </li>
          <li class="nav-item"></li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="container-fluid bookingDetails">
    <h1 class="mb-5 mt-3">Booking detail</h1>
    <table class="table" style="width: 60rem">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Hotel</th>
          <th scope="col">Price</th>
          <th scope="col">Total</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(book, i) in bookData" :key="book.id" :book="book">
          <td>{{ book.id }}</td>
          <td>{{ book.hotelName }}</td>
          <td>Rp{{ book.price.toLocaleString() }}</td>
          <td>{{ book[i].price++ }}</td>
        </tr>
      </tbody>
    </table>
    <h6>User : {{ bookData[0].User.email }}</h6>
    <h6>Total :</h6>
  </div>
</template>

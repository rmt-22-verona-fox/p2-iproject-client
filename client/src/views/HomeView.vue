<script>
import CardReusable from "../components/CardReusable.vue";
export default {
  data() {
    return {
      searchFilter: "",
      brandFilter: "",
      sneakers: "",
    };
  },
  components: {
    CardReusable,
  },
  methods: {
    paginationEvent(num) {},
    filterEvent() {},
  },
};
</script>

<template>
  <!-- home-page -->
  <div class="home-page d-flex">
    <!-- container -->
    <div class="container-fluid mx-0 px-0 d-flex">
      <!-- sidebar -->
      <div class="sidebar col-2">
        <ul class="d-flex flex-column col-sm">
          <li class="sidebar-menu text-dark">Brands</li>
          <select
            class="form-select"
            v-model="brandFilter"
            @change="filterEvent"
          >
            <option selected value=" ">All</option>
            <!-- <option
              v-for="category in categories"
              :key="category.id"
              :value="category.id"
            >
              {{ category.name }}
            </option> -->
          </select>
          <input
            @input="filterEvent"
            v-model="searchFilter"
            class="sidebar-menu form-control"
            type="text"
            name="title"
            placeholder="search title here..."
          />
        </ul>
      </div>
      <div class="content col-10">
        <div class="jumbotron p-3 p-md-5 text-dark rounded">
          <div class="col-md-6 px-0">
            <h1 class="display-4 font-italic">text</h1>
            <p class="lead my-3">text</p>
            <p class="lead mb-0">
              <a href="#" class="text-white font-weight-bold"
                >Continue reading...</a
              >
            </p>
          </div>
        </div>
        <!-- card -->
        <h1 v-if="sneakers.length === 0" class="text-center">
          No Sneakers Found
        </h1>
        <div class="row">
          <div class="col col-xl d-flex">
            <hr />
            <CardReusable></CardReusable>
            <CardReusable></CardReusable>
            <CardReusable></CardReusable>
            <CardReusable></CardReusable>
          </div>
        </div>
        <div class="pagination-bar">
          <ul class="pagination pagination-lg justify-content-center">
            <!-- <li class="page-item" v-for="i in totalPages" :key="i">
              <a class="page-link" @click.prevent="paginationEvent(i)">{{
                i
              }}</a>
            </li> -->
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
/* container */

.jumbotron {
  /* background: linear-gradient(
    90deg,
    rgba(243, 255, 117, 1) 0%,
    rgba(106, 255, 188, 1) 42%,
    rgba(103, 172, 255, 1) 100%
  ); */
  background-image: url("../assets/jumbotron-bg3.jpg");
  background-size: cover;
  margin-right: 5%;
  margin-top: 3%;
  height: 30vw;
}

.content {
  padding: 0;
  padding-right: 3%;
  align-content: center;
  margin-left: 2%;
  width: 80%;
}

.sidebar-menu {
  margin-top: 15%;
}
.row {
  margin: 0;
  width: 100%;
}

.col {
  display: flex;
  flex-wrap: wrap;
  padding: 0;
}

/* sidebar */
.sidebar {
  bottom: 0;
  padding: 0;
  height: 91.1%;
  margin-left: 1%;
  /* background: rgb(223, 238, 252); */
}

/* pagination */
.pagination-bar {
  margin-top: 5%;
  margin-bottom: 5%;
}
</style>

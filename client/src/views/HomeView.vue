<script>
import NavBar from "../components/NavBar.vue";
import CardReusable from "../components/CardReusable.vue";
import { mapActions, mapState } from "pinia";
import { useProductsStore } from "@/stores/product";
export default {
  data() {
    return {
      sneakers: "",
      brand: "",
      name: "",
    };
  },
  components: {
    CardReusable,
    NavBar,
  },
  computed: {
    ...mapState(useProductsStore, ["brands", "products"]),
  },
  methods: {
    ...mapActions(useProductsStore, ["fetchBrands", "fetchProducts"]),
    paginationEvent(num) {
      this.fetchProducts(num, this.brand);
      this.$router.push({
        path: "/",
        query: { page: num, brand: this.brand },
      });
    },
    filterBrandEvent(string) {
      this.brand = string.toLowerCase();
      this.fetchProducts(0, this.brand);
      this.$router.push({
        path: "/",
        query: { brand: this.brand },
      });
    },
    productDetailEvent(id) {
      localStorage.setItem("detail_id", id);

      this.$router.push({
        path: "/products/detail/" + id,
      });
    },
  },
  created() {
    this.fetchBrands();
    this.fetchProducts();
  },
};
</script>

<template>
  <NavBar></NavBar>
  <!-- home-page -->
  <div class="home-page d-flex">
    <!-- container -->
    <div class="container-fluid mx-0 px-0 d-flex">
      <!-- sidebar -->
      <div class="sidebar col-2">
        <ul class="d-flex flex-column col-sm">
          <li class="sidebar-menu text-dark">
            <h1>Brands</h1>
          </li>
          <li v-for="brand in brands" :key="brand">
            <a @click.prevent="filterBrandEvent(brand)">{{ brand }}</a>
          </li>
        </ul>
      </div>
      <div class="content col-10">
        <div class="jumbotron p-3 p-md-5 text-dark rounded">
          <div class="col-md-6 px-0">
            <h1 class="display-4 font-italic">4 Kicks</h1>
            <p class="lead my-3 text-white text-container">
              Sneakers go back a long way. In the late 18th century, people wore
              rubber soled shoes called plimsolls, but they were pretty
              crude?for one thing, there was no right foot or left foot. Around
              1892, the U.S. Rubber Company came up with more comfortable rubber
              sneakers with canvas tops, called Keds. By 1917, these sneakers
              began to be mass produced.
            </p>
            <p class="lead mb-0">
              <button
                href="https://www.factmonster.com/culture-entertainment/fashion/history-sneakers"
                class="btn btn-outline-info"
              >
                Continue reading...
              </button>
            </p>
          </div>
        </div>
        <!-- card -->
        <h1 v-if="products.length === 0" class="text-center">
          No Sneakers Found
        </h1>
        <div class="row">
          <div class="col col-xl d-flex">
            <hr />
            <CardReusable
              v-for="product in products"
              :key="product.id"
              :product="product"
              @click="productDetailEvent(product.id)"
            ></CardReusable>
          </div>
        </div>
        <div class="pagination-bar">
          <ul class="pagination pagination-lg justify-content-center">
            <li class="page-item" v-for="i in 10" :key="i">
              <a class="page-link" @click.prevent="paginationEvent(i)">{{
                i
              }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
/* container */

.text-container {
  text-shadow: 2px 2px 8px #000000;
}
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

ul {
  list-style-type: none;
  padding: 0;
  border: 1px solid #ddd;
}

ul li {
  padding: 8px 16px;
  border-bottom: 1px solid #ddd;
}

ul li:last-child {
  border-bottom: none;
}

.content {
  padding: 0;
  padding-right: 3%;
  align-content: center;
  margin-left: 2%;
  width: 80%;
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
  margin-top: 1%;
  /* background: rgb(223, 238, 252); */
}

/* pagination */
.pagination-bar {
  margin-top: 5%;
  margin-bottom: 5%;
}

.page-item {
  padding: 0;
}
</style>

<script>
import NavBar from "../components/NavBar.vue";
import { mapActions, mapState } from "pinia";
import { useProductsStore } from "@/stores/product";
import ThreeComponent from "../components/ThreeComponent.vue";
export default {
  data() {
    return {
      itemName: "",
      price: "",
      size: "",
      quantity: "",
    };
  },
  computed: {
    ...mapState(useProductsStore, ["productDetail"]),
    idrPrice: function () {
      return `IDR ${+this.productDetail.retailPrice * 14000},00`;
    },
  },
  components: {
    ThreeComponent,
    NavBar,
  },
  methods: {
    ...mapActions(useProductsStore, ["fetchProductDetail"]),
    submitInvoiceEvent() {
      let obj = {
        itemName: this.productDetail.name,
        price: +this.productDetail.retailPrice * 14000,
        size: this.size,
        quantity: this.quantity,
      };
      console.log(obj);
    },
  },
  props: {},
  created() {
    this.fetchProductDetail(localStorage.getItem("detail_id"));
  },
};
</script>

<template>
  <NavBar></NavBar>
  <div class="container-fluid mx-0 px-0 d-flex">
    <div class="product-img">
      <!-- <ThreeComponent /> -->
      <img :src="productDetail.image.original" />
    </div>
    <div class="product-desc col-7">
      <h1>{{ productDetail.name }}</h1>
      <h5>{{ productDetail.colorway }}</h5>
      <p style="text-align: right">{{ idrPrice }}</p>
      <form @submit.prevent="submitInvoiceEvent()">
        <select v-model="size" name="size" class="form-control">
          <option disabled selected value>Select Size</option>
          <option value="40">40</option>
          <option value="41">41</option>
          <option value="42">42</option>
          <option value="43">43</option>
          <option value="44">44</option>
          <option value="45">45</option>
        </select>
        <select v-model="quantity" name="quantity" class="form-control">
          <option disabled selected value>Select Quantity</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <div class="text-center my-4">
          <button class="btn btn-dark" value="submit">Buy</button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
@media (min-width: 720px) {
  .tp-dfwv {
    margin-left: 16.4rem;
  }
}
.container-fluid {
  margin-top: 0;
  align-content: center;
  background-color: rgb(232, 234, 236);
  margin-left: 10%;
  margin-right: 10%;
  padding: 5%;
}

img {
  width: 500px;
}

form {
  width: 25%;
}
</style>

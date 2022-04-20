<script>
import { mapActions } from "pinia";
import { useProductsStore } from "@/stores/product";
export default {
  data() {
    return {
      name: "",
    };
  },
  methods: {
    ...mapActions(useProductsStore, ["fetchProducts"]),
    filterNameEvent() {
      this.fetchProducts(0, this.name);
      this.$router.push({
        path: "/",
        query: { name: this.name },
      });
    },
  },
};
</script>

<template>
  <nav class="navbar navbar-dark bg-dark">
    <div class="container-fluid">
      <h1><router-link to="/" class="navbar-brand">4 Kicks</router-link></h1>
      <form
        class="d-flex input-group w-auto"
        @submit.prevent="filterNameEvent()"
      >
        <input
          type="search"
          class="form-control rounded"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="search-addon"
          v-model="name"
        />
        <span class="input-group-text border-0" id="search-addon">
          <button type="submit" class="btn">
            <i value="submit" class="bi bi-search"></i>
          </button>
        </span>
      </form>
    </div>
  </nav>
</template>

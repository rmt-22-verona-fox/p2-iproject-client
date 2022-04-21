<script>
import { mapActions, mapWritableState } from "pinia";
import { useProductsStore } from "@/stores/product";
import { useInvoiceStore } from "../stores/invoice";
import { useUserStore } from "../stores/user";
export default {
  data() {
    return {
      name: "",
    };
  },
  computed: {
    ...mapWritableState(useInvoiceStore, ["invoices"]),
    ...mapWritableState(useUserStore, ["isLogin"]),
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
    logoutEvent() {
      localStorage.clear();
      this.invoices = [];
      this.isLogin = false;
      this.$router.push({
        path: "/login",
      });
    },
  },
};
</script>

<template>
  <nav class="navbar navbar-dark bg-dark">
    <div class="container-fluid">
      <div class="d-flex col-auto navbar-link">
        <h1>
          <router-link to="/" class="navbar-brand">4 Kicks</router-link>
        </h1>
      </div>
      <div class="d-flex col-5 navbar-link">
        <router-link to="/login" class="navbar-brand" v-if="!isLogin"
          >Login</router-link
        >
        <router-link to="/invoice" class="navbar-brand" v-if="isLogin"
          >Invoice</router-link
        >
        <a @click.prevent="logoutEvent()" class="navbar-brand" v-if="isLogin"
          >Logout</a
        >
      </div>
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

<style>
.navbar-link {
  justify-content: space-between;
}

ul {
  list-style: none;
}
</style>

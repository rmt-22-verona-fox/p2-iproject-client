<script>
import NavBar from "../components/NavBar.vue";
import { mapActions, mapState } from "pinia";
import { useInvoiceStore } from "../stores/invoice";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(useInvoiceStore, ["invoices"]),
  },
  components: {
    NavBar,
  },
  methods: {
    ...mapActions(useInvoiceStore, ["fetchInvoices"]),
  },
  props: {},
  created() {
    this.fetchInvoices();
  },
};
</script>

<template>
  <NavBar></NavBar>
  <div class="container-fluid">
    <div class="card" v-for="invoice in invoices" :key="invoice.id">
      <h3>{{ invoice.invoiceNumber }}</h3>
      <p>{{ invoice.itemName }}</p>
      <p>{{ invoice.price }}</p>
    </div>
  </div>
</template>

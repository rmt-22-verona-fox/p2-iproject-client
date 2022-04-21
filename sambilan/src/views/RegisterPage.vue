<script>
import { mapActions, mapState } from "pinia";
import { useJobStore } from "../stores/job";

export default {
  data() {
    return {
      dataRegister: {
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        location: "",
      },
      locations: [],
    };
  },
  computed: {
    ...mapState(useJobStore, ["provinces"]),
  },
  methods: {
    ...mapActions(useJobStore, ["getLocations", "submitRegister"]),
    async registerUser() {
      await this.submitRegister(this.dataRegister);
    },
  },
  async created() {
    await this.getLocations();
  },
};
</script>

<template>
  <div>
    <div class="mb-3">
      <label class="form-label">Email</label>
      <input
        v-model="dataRegister.email"
        type="email"
        class="form-control"
        placeholder="name@example.com"
      />
    </div>
    <div class="mb-3">
      <label class="form-label">Password</label>
      <input
        v-model="dataRegister.password"
        type="password"
        class="form-control"
        placeholder="Minimum 8 character"
      />
    </div>
    <div class="mb-3">
      <label class="form-label">First name</label>
      <input
        v-model="dataRegister.firstName"
        type="text"
        class="form-control"
      />
    </div>
    <div class="mb-3">
      <label class="form-label">Last name</label>
      <input v-model="dataRegister.lastName" type="text" class="form-control" />
    </div>
    <div class="mb-3">
      <label class="form-label">Location</label>
      <select
        v-model="dataRegister.location"
        class="form-select"
        aria-label="Default select example"
      >
        <option selected disabled value="">Choose your location</option>
        <option
          v-for="province in provinces"
          :key="province.id"
          :value="province.nama"
        >
          {{ province.nama }}
        </option>
      </select>
    </div>
    <div class="mb-3">
      <button class="btn btn-success" @click.prevent="registerUser">
        Register
      </button>
      <RouterLink to="/login" class="btn btn-primary">Sign In</RouterLink>
    </div>
  </div>
</template>

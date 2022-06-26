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
  <div class="container-fluid">
    <main class="tm-main mt-5">
      <div class="row tm-row tm-mb-120">
        <div class="col-12">
          <h2 class="tm-color-primary tm-post-title tm-mb-60">Sign Up</h2>
        </div>
        <div class="col-lg-9 tm-contact-left">
          <form class="mb-5 ml-auto mr-0 tm-contact-form">
            <div class="form-group row mb-4">
              <label class="col-sm-4 col-form-label text-right tm-color-primary"
                >Email</label
              >
              <div class="col-sm-8">
                <input
                  class="form-control mr-0 ml-auto"
                  v-model="dataRegister.email"
                  type="email"
                  placeholder="name@example.com"
                  required
                />
              </div>
            </div>
            <div class="form-group row mb-4">
              <label class="col-sm-4 col-form-label text-right tm-color-primary"
                >Password</label
              >
              <div class="col-sm-8">
                <input
                  class="form-control mr-0 ml-auto"
                  v-model="dataRegister.password"
                  type="password"
                  placeholder="minimum 8 character"
                  required
                />
              </div>
            </div>
            <div class="form-group row mb-4">
              <label class="col-sm-4 col-form-label text-right tm-color-primary"
                >First Name</label
              >
              <div class="col-sm-8">
                <input
                  class="form-control mr-0 ml-auto"
                  v-model="dataRegister.firstName"
                  type="text"
                  placeholder="your first name"
                  required
                />
              </div>
            </div>
            <div class="form-group row mb-4">
              <label class="col-sm-4 col-form-label text-right tm-color-primary"
                >Last Name</label
              >
              <div class="col-sm-8">
                <input
                  class="form-control mr-0 ml-auto"
                  v-model="dataRegister.lastName"
                  type="text"
                  placeholder="your last name"
                  required
                />
              </div>
            </div>
            <div class="form-group row mb-4">
              <label class="col-sm-4 col-form-label text-right tm-color-primary"
                >Location</label
              >
              <div class="col-sm-8">
                <select
                  v-model="dataRegister.location"
                  class="form-control mr-0 ml-auto"
                  required
                >
                  <option selected disabled value="">
                    Choose your location
                  </option>
                  <option
                    v-for="province in provinces"
                    :key="province.id"
                    :value="province.nama"
                  >
                    {{ province.nama }}
                  </option>
                </select>
              </div>
            </div>
            <div class="form-group row text-right">
              <div class="col-12">
                <button
                  class="tm-btn tm-btn-primary tm-btn-small"
                  @click.prevent="registerUser"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <footer class="row tm-row">
        <hr class="col-12" />
        <div class="col-md-6 col-12 tm-color-gray">
          Design:
          rickyDefianS
        </div>
        <div class="col-md-6 col-12 tm-color-gray tm-copyright">
          Copyright 2022 iProject Hacktiv8
        </div>
      </footer>
    </main>
  </div>
</template>

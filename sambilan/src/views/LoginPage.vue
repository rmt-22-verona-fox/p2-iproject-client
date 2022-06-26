<script>
import { mapActions } from "pinia";
import { useJobStore } from "../stores/job";

export default {
  data() {
    return {
      dataLogin: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions(useJobStore, ["submitLogin"]),
    async loginUser() {
      await this.submitLogin(this.dataLogin);
    },
  },
};
</script>

<template>
  <div class="container-fluid">
    <main class="tm-main mt-5">
      <div class="row tm-row tm-mb-120">
        <div class="col-12">
          <h2 class="tm-color-primary tm-post-title tm-mb-60">Sign In</h2>
        </div>
        <div class="col-lg-9 tm-contact-left">
          <form
            class="mb-5 ml-auto mr-0 tm-contact-form"
          >
            <div class="form-group row mb-4">
              <label
                class="col-sm-4 col-form-label text-right tm-color-primary"
                >Email</label
              >
              <div class="col-sm-8">
                <input
                  class="form-control mr-0 ml-auto"
                  v-model="dataLogin.email"
                  type="email"
                  placeholder="name@example.com"
                  required
                />
              </div>
            </div>
            <div class="form-group row mb-4">
              <label
                class="col-sm-4 col-form-label text-right tm-color-primary"
                >Password</label
              >
              <div class="col-sm-8">
                <input
                  class="form-control mr-0 ml-auto"
                  v-model="dataLogin.password"
                  type="password"
                  placeholder="minimum 8 character"
                  required
                />
              </div>
            </div>
            <div class="form-group row text-right">
              <div class="col-12">
                <button class="tm-btn tm-btn-primary tm-btn-small" @click.prevent="loginUser">
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
  <!-- <div>
    <div class="mb-3">
      <label class="form-label">Email</label>
      <input
        v-model="dataLogin.email"
        type="email"
        class="form-control"
        placeholder="name@example.com"
      />
    </div>
    <div class="mb-3">
      <label class="form-label">Password</label>
      <input
        v-model="dataLogin.password"
        type="password"
        class="form-control"
        placeholder="Minimum 8 character"
      />
    </div>
    <div class="mb-3">
      <button class="btn btn-success" @click.prevent="loginUser">
        Sign In
      </button>
      <RouterLink to="/register" class="btn btn-primary">Sign Up</RouterLink>
    </div>
  </div> -->
</template>

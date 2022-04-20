<script>
import { mapActions, mapWritableState } from "pinia";
import { useAuthenStore } from "../stores/authentication";

export default {
  data() {
    return {
      loginData: {
        email: "",
        password: "",
      },
    };
  },
  computed: {
    ...mapWritableState(useAuthenStore, ["isLoggedIn", "trainer"]),
  },
  methods: {
    ...mapActions(useAuthenStore, ["loginRequest", "googleLoginRequest"]),
    async loginAction() {
      try {
        const { data: response } = await this.loginRequest(this.loginData);
        localStorage.setItem("access_token", response.access_token);
        this.trainer.username = response.username;
        localStorage.username = response.username;
        this.isLoggedIn = true;
        this.$router.push("/");
      } catch (err) {
        this.$swal({
          title: "Error",
          text: err.response.data.error.message,
          icon: "error",
        });
      }
    },
    async googleLoginAction() {
      try {
        const googleUser = await this.$gAuth.signIn();
        const token = googleUser.getAuthResponse().id_token;
        const { data: response } = await this.googleLoginRequest(token);
        localStorage.setItem("access_token", response.access_token);
        this.trainer.account = "google";
        this.isLoggedIn = true;
        this.$router.push("/");
      } catch (err) {
        this.$swal({
          title: "Error",
          text: err.response.data.error.message,
          icon: "error",
        });
      }
    },
  },
};
</script>

<template>
  <section class="flex items-center justify-center">
    <div class="hidden w-[1024px] lg:block">
      <img
        class="h-full w-full object-contain"
        src="https://assets.pokemon.com/assets//cms2/img/watch-pokemon-tv/_downloads/movie14_wallpaper2_1920.jpg"
        alt=""
      />
    </div>
    <div
      class="flex h-[600px] w-full max-w-sm flex-col items-center justify-center gap-y-16 rounded md:max-w-xl lg:max-w-2xl"
    >
      <h1 class="font-garamond text-center text-3xl font-medium">
        Welcome back.
      </h1>
      <form @submit.prevent="loginAction" class="mb-4 w-3/4 px-8 pb-8">
        <div class="mb-4">
          <label class="font-lato block text-sm font-semibold" for="email">
            Email adress
          </label>
          <input
            v-model="loginData.email"
            class="font-lato w-full appearance-none border-b-2 border-black py-2 leading-tight outline-none placeholder:text-sm"
            name="email"
            type="text"
            placeholder="email adress"
          />
        </div>
        <div class="mb-14">
          <label class="font-lato block text-sm font-semibold" for="password">
            Password
          </label>
          <input
            v-model="loginData.password"
            class="font-lato w-full appearance-none border-b-2 border-black py-2 leading-tight outline-none placeholder:text-sm"
            name="password"
            type="password"
            placeholder="password"
          />
        </div>
        <div class="mb-4 flex items-center justify-between border-b-2 pb-4">
          <button
            class="font-lato rounded-3xl bg-gray-900 px-4 py-2 font-semibold text-white hover:bg-black"
            type="submit"
          >
            <span>Sign in</span>
          </button>
          <span class="text-sm text-gray-500">
            Register?
            <router-link
              to="/register"
              class="inline-block align-baseline font-semibold text-green-500 hover:text-green-800"
              href="#"
            >
              Sign up
            </router-link>
          </span>
        </div>
        <div class="flex items-center justify-between text-sm">
          <span class="text-gray-500"> Or Sign up with Google</span>
          <button
            @click.prevent="googleLoginAction"
            class="flex space-x-2 rounded-3xl border-2 bg-white py-2 px-4 font-semibold shadow-lg hover:border-black"
            type="button"
          >
            <img
              src="https://img.icons8.com/color/48/000000/google-logo.png"
              class="h-[20px] w-[20px]"
            />
            <span>Google</span>
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

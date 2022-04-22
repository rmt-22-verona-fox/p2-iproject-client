<script>
import { mapWritableState } from "pinia";
import { useAuthenStore } from "../stores/authentication";

export default {
  computed: {
    ...mapWritableState(useAuthenStore, ["isLoggedIn", "trainer"]),
  },
  methods: {
    async logoutAction() {
      try {
        if (this.trainer.account === "google") {
          await this.$gAuth.signOut();
        }
        localStorage.clear();
        this.trainer.account = "";
        this.trainer.username = "";
        this.isLoggedIn = false;
        this.$router.push("/login");
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
  <nav class="bg-white shadow">
    <div class="mx-auto max-w-6xl px-4">
      <div class="flex justify-between">
        <div class="flex space-x-7">
          <div>
            <!-- Website Logo -->
            <router-link to="/" class="flex cursor-pointer items-center py-4">
              <img
                src="@/assets/logo-48.png"
                alt="Logo"
                class="mr-2 h-8 w-8 object-contain"
              />
              <span class="font-pkmnsolid">Pokenomo</span>
            </router-link>
          </div>
        </div>
        <!-- Primary Navbar items -->
        <div v-if="isLoggedIn" class="hidden items-center space-x-1 md:flex">
          <router-link
            to="/"
            class="cursor-pointer py-4 px-2 text-sm font-semibold uppercase text-gray-500 transition duration-300 hover:border-b hover:border-black hover:text-black"
            >Home</router-link
          >
          <router-link
            to="/pokedex"
            class="cursor-pointer py-4 px-2 text-sm font-semibold uppercase text-gray-500 transition duration-300 hover:border-b hover:border-black hover:text-black"
            >Pokédex</router-link
          >
          <router-link
            to="/trade"
            class="cursor-pointer py-4 px-2 text-sm font-semibold uppercase text-gray-500 transition duration-300 hover:border-b hover:border-black hover:text-black"
            >Trade</router-link
          >
        </div>
        <!-- Secondary Navbar items -->
        <div class="hidden items-center space-x-3 md:flex">
          <router-link
            v-if="!isLoggedIn"
            to="/login"
            class="cursor-pointer py-4 px-2 text-sm font-semibold uppercase text-gray-500 transition duration-300 hover:border-b hover:border-black hover:text-black"
          >
            Log In
          </router-link>
          <router-link
            v-if="!isLoggedIn"
            to="/register"
            class="rounded-3xl bg-gray-800 py-2 px-4 text-sm font-medium uppercase text-white transition duration-300 hover:bg-black"
          >
            Sign Up
          </router-link>
          <a
            v-if="isLoggedIn"
            @click.prevent="logoutAction"
            class="cursor-pointer py-4 px-2 text-sm font-semibold uppercase text-gray-500 transition duration-300 hover:border-b hover:border-black hover:text-black"
          >
            Logout
          </a>
        </div>
        <!-- Mobile menu button -->
        <div class="flex items-center md:hidden">
          <button class="mobile-menu-button outline-none">
            <svg
              class="h-6 w-6 text-gray-500 transition duration-300 hover:text-black"
              x-show="!showMenu"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
    <!-- mobile menu -->
    <div class="mobile-menu hidden">
      <ul class="">
        <li>
          <a
            class="cursor-pointer py-4 px-2 text-sm font-semibold uppercase text-gray-500 transition duration-300 hover:border-b hover:border-black"
            >Home</a
          >
        </li>
        <li>
          <a
            class="cursor-pointer py-4 px-2 text-sm font-semibold uppercase text-gray-500 transition duration-300 hover:border-b hover:border-black"
            >Services</a
          >
        </li>
        <li>
          <a
            class="cursor-pointer py-4 px-2 text-sm font-semibold uppercase text-gray-500 transition duration-300 hover:border-b hover:border-black"
            >About</a
          >
        </li>
        <li>
          <a
            class="cursor-pointer py-4 px-2 text-sm font-semibold uppercase text-gray-500 transition duration-300 hover:border-b hover:border-black"
            >Contact Us</a
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

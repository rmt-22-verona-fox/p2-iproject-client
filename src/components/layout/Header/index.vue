<script>
import { mapWritableState } from "pinia";
import { useAuthStore } from "../../../stores/auth";
import Container from "@/views/container/Container.vue";
import Button from "@/components/button/index.vue";
import Search from "../Header/Search/index.vue";
import Navigation from "../Header/Navigation/index.vue";

export default {
  components: {
    Container,
    Button,
    Search,
    Navigation,
  },

  data() {
    return {
      picture: "",
    };
  },

  computed: {
    ...mapWritableState(useAuthStore, ["isLoggedIn"]),
  },

  methods: {
    loginButtonHandler() {
      this.$router.push("/masuk");
    },

    logoutButtonHandler() {
      localStorage.clear();
      this.isLoggedIn = false;
      this.$router.push("/masuk");
    },
  },

  created() {
    this.picture = localStorage.getItem("picture");
  },
};
</script>

<template>
  <header class="h-[85px] bg-white shadow-lg p-4 z-20">
    <Container>
      <div class="flex justify-between items-center">
        <div class="flex">
          <router-link to="/">
            <img
              src="@/assets/travelio-logo-header.svg"
              alt="header-logo"
              height="48"
              width="200"
            />
          </router-link>
          <Search class="hidden" />
        </div>

        <div class="flex gap-5">
          <Navigation />
          <Button
            v-on:click="loginButtonHandler"
            class="w-[190px]"
            v-if="!isLoggedIn"
            >Masuk</Button
          >

          <div class="group inline-block" v-if="isLoggedIn">
            <figure
              class="relative rounded-full overflow-hidden h-11 w-11 mr-3 cursor-pointer select-none group inline-block"
            >
              <img
                v-bind:src="picture"
                alt="Profile dummy"
                class="h-full object-cover w-full"
              />
            </figure>
            <ul
              class="bg-white border rounded-sm cursor-pointer transform scale-0 group-hover:scale-100 absolute transition duration-150 ease-in-out origin-top min-w-32 mr-24 z-50"
            >
              <router-link
                to="/profil"
                class="flex flex-row w-full rounded-sm px-5 py-1 hover:bg-blue-100 hover:text-white"
              >
                <div class="mr-3">
                  <svg
                    class="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    ></path>
                  </svg>
                </div>
                Profil
              </router-link>
              <li
                class="flex flex-row rounded-sm px-5 py-1 hover:bg-blue-100 hover:text-white"
                v-on:click="logoutButtonHandler"
              >
                <div class="mr-3 text-red-600">
                  <svg
                    class="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    ></path>
                  </svg>
                </div>
                Keluar
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  </header>
</template>

<style scoped>
/* since nested groupes are not supported we have to use 
     regular css for the nested dropdowns 
  */
li > ul {
  transform: translatex(100%) scale(0);
}
li:hover > ul {
  transform: translatex(101%) scale(1);
}
li > button svg {
  transform: rotate(-90deg);
}
li:hover > button svg {
  transform: rotate(-270deg);
}

/* Below styles fake what can be achieved with the tailwind config
     you need to add the group-hover variant to scale and define your custom
     min width style.
  	 See https://codesandbox.io/s/tailwindcss-multilevel-dropdown-y91j7?file=/index.html
  	 for implementation with config file
  */
.group:hover .group-hover\:scale-100 {
  transform: scale(1);
}
.group:hover .group-hover\:-rotate-180 {
  transform: rotate(180deg);
}
.scale-0 {
  transform: scale(0);
}
.min-w-32 {
  min-width: 8rem;
}
</style>

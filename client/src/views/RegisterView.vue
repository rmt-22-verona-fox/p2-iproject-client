<script>
import { mapActions } from "pinia";
import { useRegisterStore } from "../stores/register";

export default {
  data() {
    return {
      registerData: {
        email: "",
        password: "",
        username: "",
        phoneNumber: "",
        address: "",
      },
    };
  },
  methods: {
    ...mapActions(useRegisterStore, ["registerRequest"]),
    async registerAction() {
      try {
        await this.registerRequest(this.registerData);
        this.$swal({
          title: "Register success.",
          icon: "success",
        });
        this.$router.push("/login");
        this.registerData.email = "";
        this.registerData.password = "";
        this.registerData.username = "";
        this.registerData.phoneNumber = "";
        this.registerData.address = "";
      } catch (err) {
        this.$swal({
          title: "Error",
          text: err.response.data.error.messages[0],
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
        this.trainer.username = response.username;
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
    <div
      class="mt-2 flex w-full max-w-sm flex-col items-center justify-center gap-y-16 rounded bg-white md:max-w-lg lg:max-w-2xl"
    >
      <h1 class="mt-10 text-center text-3xl font-medium">
        Be A Pokemon Trainer.
      </h1>
      <form @submit.prevent="registerAction" class="mb-4 w-3/4 px-8 pb-8">
        <div class="mb-4">
          <label class="block text-sm font-semibold" for="email">
            Email adress
          </label>
          <input
            v-model="registerData.email"
            class="mb-1 w-full appearance-none border-b-2 border-black py-2 leading-tight outline-none placeholder:text-sm"
            name="email"
            type="text"
            placeholder="email adress"
          />
          <p class="text-xs italic text-gray-600">e.g. example@email.com</p>
        </div>
        <div class="mb-14">
          <label class="block text-sm font-semibold" for="password">
            Password
          </label>
          <input
            v-model="registerData.password"
            class="mb-1 w-full appearance-none border-b-2 border-black py-2 leading-tight outline-none placeholder:text-sm"
            name="password"
            type="password"
            placeholder="password"
          />
          <p class="text-xs italic text-gray-600">
            Minimum 5 characters, you can make it as long as you'd like
          </p>
        </div>
        <!-- <div class="mb-4">
          <label class="block text-sm font-semibold" for="username">
            Username
          </label>
          <input
            v-model="registerData.username"
            class="w-full appearance-none border-b-2 border-black py-2 leading-tight outline-none placeholder:text-sm"
            name="username"
            type="text"
            placeholder="username"
          />
        </div> -->
        <div class="mb-4 flex items-center justify-between border-b-2 pb-4">
          <button
            class="rounded-3xl bg-gray-900 px-4 py-2 font-semibold text-white hover:bg-black"
            type="submit"
          >
            <span>Sign up</span>
          </button>
          <span class="text-sm text-gray-500">
            Have an account?
            <router-link
              to="/login"
              class="inline-block align-baseline font-semibold text-green-500 hover:text-green-800"
              href="#"
            >
              Sign in
            </router-link>
          </span>
        </div>
        <div class="flex items-center justify-between text-sm">
          <span class="text-gray-500">Or Sign up with Google</span>
          <button
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
    <div class="hidden w-[1024px] lg:block">
      <img
        class="h-full w-full object-contain"
        src="https://assets.pokemon.com/assets//cms2/img/watch-pokemon-tv/_downloads/movie14_wallpaper1_1920.jpg"
        alt=""
      />
    </div>
  </section>
</template>

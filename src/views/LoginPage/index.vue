<script>
import { useAuthStore } from "../../stores/auth";
import { mapActions, mapWritableState } from "pinia";
import { useToast } from "vue-toastification";
import Layout from "@/components/layout/Layout.vue";
import Button from "@/components/button/index.vue";

export default {
  setup() {
    const toast = useToast();
    return { toast };
  },

  components: {
    Layout,
    Button,
  },

  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      error: "",
    };
  },

  computed: {
    ...mapWritableState(useAuthStore, ["isLoggedIn"]),
  },

  methods: {
    ...mapActions(useAuthStore, ["formLoginHandler"]),

    async login() {
      try {
        this.error = "";
        const response = await this.formLoginHandler(this.form);

        this.isLoggedIn = true;

        localStorage.setItem("access_token", response.data?.access_token);
        localStorage.setItem("id", response.data?.profile?.id);
        localStorage.setItem("email", response.data?.profile?.email);
        localStorage.setItem("name", response.data?.profile?.fullName);
        localStorage.setItem("bio", response.data?.profile?.bio);
        localStorage.setItem("city", response.data?.profile?.city);
        localStorage.setItem("picture", response.data?.profile?.profilePicture);
        localStorage.setItem("verified", response.data?.profile?.isVerified);

        this.$router.push("/");
        this.toast.success("Berhasil melakukan login");
      } catch (err) {
        this.error = err.response?.data?.message;
      }
    },
  },
};
</script>

<template>
  <Layout noFooter="true">
    <section class="section h-screen">
      <div class="formWrapper flex flex-1 flex-col">
        <p class="text-heading-3 font-label font-extrabold">Masuk</p>
        <div class="flex mt-3">
          <p class="text-heading-5 text-gray-50 font-semibold">
            Belum punya akun?
          </p>
          <router-link
            to="/daftar"
            class="text-heading-5 text-blue-100 font-semibold ml-2 hover-underline"
          >
            Daftar disini
          </router-link>
        </div>

        <form v-on:submit.prevent="login" class="flex flex-col mt-8">
          <label class="relative text-heading-5 fon-label font-bold w-full">
            <div class="mb-3">Email</div>
            <input
              type="text"
              placeholder="Masukkan alamat email"
              class="mb-6 appearance-none border rounded-lg border-gray-70 text-heading-5 text-gray-50 py-3 px-4 w-full focus:outline-none focus:ring-blue-100 focus:border-blue-100 focus:text-primary-black"
              v-model="form.email"
            />
          </label>
          <label class="relative text-heading-5 fon-label font-bold w-full">
            <div class="mb-3">Password</div>
            <input
              type="password"
              placeholder="Masukkan kata sandi"
              class="appearance-none border rounded-lg border-gray-70 text-heading-5 text-gray-50 py-3 px-4 w-full focus:outline-none focus:ring-blue-100 focus:border-blue-100 focus:text-primary-black"
              v-model="form.password"
            />
          </label>
          <p class="mb-3 mt-3 text-red-100 font-bold" v-if="error">
            {{ error }}
          </p>

          <a
            class="text-heading-5 text-blue-100 font-semibold mt-4 mb-4 hover:underline"
            v-bind:class="error ? 'mb-3' : 'mb-9'"
          >
            Lupa kata sandi?
          </a>

          <Button type="submit" class="w-full">Masuk</Button>
        </form>

        <p class="hidden text-heading-5 text-gray-70 my-8 font-bold">
          Atau masuk dengan
        </p>
        <Button class="hidden first-letter:mb-4 bg-red-100"
          >Masuk dengan Google
        </Button>
        <Button class="hidden bg-facebook">Masuk dengan Facebook</Button>
      </div>
    </section>
  </Layout>
</template>

<style scoped>
.section {
  position: relative;

  background-image: url("@/assets/login/login-bg.png");
  background-position: left top;
  background-repeat: no-repeat;
  background-size: contain;
}

.formWrapper {
  position: absolute;
  left: 60%;
  top: 55%;
  transform: translateY(-50%);
  min-width: 393px;
}
</style>

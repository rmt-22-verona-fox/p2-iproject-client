<script>
import { mapActions } from "pinia";
import { useAuthStore } from "../../stores/auth";
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
        fullName: "",
        email: "",
        password: "",
      },
      errors: {
        fullName: "",
        email: "",
        password: "",
      },
    };
  },

  methods: {
    ...mapActions(useAuthStore, ["formRegisterHandler"]),

    async register() {
      try {
        this.errors = {};
        await this.formRegisterHandler(this.form);

        this.$router.push("/masuk");
        this.toast.success("Berhasil mendaftar");
      } catch (err) {
        err.response.data.errors.forEach((error) => {
          this.errors[error.type] = error.message;
        });
      }
    },
  },
};
</script>

<template>
  <Layout noFooter="true">
    <section class="section h-screen">
      <div class="formWrapper flex flex-1 flex-col">
        <p class="text-heading-3 font-label font-extrabold">Daftar</p>
        <div class="flex mt-3">
          <p class="text-heading-5 text-gray-50 font-semibold">
            Sudah punya akun?
          </p>
          <router-link
            to="/masuk"
            class="text-heading-5 text-blue-100 font-semibold ml-2 hover-underline"
          >
            Masuk disini
          </router-link>
        </div>

        <form v-on:submit.prevent="register" class="flex flex-col mt-8">
          <label class="relative text-heading-5 fon-label font-bold w-full">
            <div class="mb-3">Nama Lengkap</div>
            <input
              type="text"
              placeholder="Masukkan nama lengkap"
              class="mb-2 appearance-none border rounded-lg border-gray-70 text-heading-5 text-gray-50 py-3 px-4 w-full focus:outline-none focus:ring-blue-100 focus:border-blue-100 focus:text-primary-black"
              v-model="form.fullName"
            />
            <p class="mb-3 text-red-100" v-if="errors.fullName">
              {{ errors.fullName }}
            </p>
          </label>
          <label class="relative text-heading-5 fon-label font-bold w-full">
            <div class="mb-3">Email</div>
            <input
              type="text"
              placeholder="Masukkan alamat email"
              class="mb-2 appearance-none border rounded-lg border-gray-70 text-heading-5 text-gray-50 py-3 px-4 w-full focus:outline-none focus:ring-blue-100 focus:border-blue-100 focus:text-primary-black"
              v-model="form.email"
            />
            <p class="mb-3 text-red-100" v-if="errors.email">
              {{ errors.email }}
            </p>
          </label>
          <label class="relative text-heading-5 fon-label font-bold w-full">
            <div class="mb-3">Password</div>
            <input
              type="password"
              placeholder="Masukkan kata sandi"
              class="appearance-none border rounded-lg border-gray-70 text-heading-5 text-gray-50 py-3 px-4 w-full focus:outline-none focus:ring-blue-100 focus:border-blue-100 focus:text-primary-black"
              v-bind:class="!errors.password ? 'mb-10' : 'mb-2'"
              v-model="form.password"
            />
            <p class="mb-9 text-red-100" v-if="errors.password">
              {{ errors.password }}
            </p>
          </label>

          <Button type="submit" class="w-full">Daftar</Button>
        </form>
      </div>
    </section>
  </Layout>
</template>

<style scoped>
.section {
  padding-top: 85px;
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

<script>
import { useCounterStore } from "@/stores/counter";
import { mapWritableState, mapActions } from "pinia";
export default {
  data() {
    return {
      input: {
        username: "",
        password: "",
      },
    };
  },
  computed: {
    ...mapWritableState(useCounterStore, ["access_token1"]),
  },
  methods: {
    ...mapActions(useCounterStore, ["loginGoogle"]),
    async loginSubmit(payload) {
      console.log("loginSubmit");
      console.log(payload, "<<<< payload");
    },
    async googleOAuth() {
      console.log("google oauth yow");
      try {
        const googleUser = await this.$gAuth.signIn();
        if (!googleUser) {
          return null;
        }
        const token = googleUser.getAuthResponse().id_token;

        this.loginGoogle(token);
        this.$router.push("/");
      } catch (error) {
        //on fail do something
        console.error(error);
        return null;
      }
    },
    async register() {
      this.$router.push("/register");
    },
  },
};
</script>
<template>
  <form class="form-input" @submit.prevent="loginSubmit(input)">
    <div class="form-group">
      <label for="exampleInputEmail1">email</label>
      <input
        type="text"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        placeholder="Enter email"
        v-model="input.username"
      />
      <small id="username" class="form-text text-muted"
        >We'll never share your information with anyone else.</small
      >
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input
        type="password"
        class="form-control"
        id="exampleInputPassword1"
        placeholder="Password"
        v-model="input.password"
      />
    </div>
    <br />
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
  <br />
  <button class="button-below btn btn-success" @click="register()">
    Register</button
  ><br />
  <button class="button-below btn btn-info" @click="googleOAuth()">
    Login With Google
  </button>
</template>

<style>
.form-input {
  padding: 20px 20px 20px 20px;
  padding-left: 50px;
  padding-right: 50px;
}
.button-below {
  margin-left: 50px;
  margin-bottom: 20px;
}
</style>

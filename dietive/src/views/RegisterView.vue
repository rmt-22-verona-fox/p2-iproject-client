<script>
import { useFoodStore } from "@/stores/food";
import { mapActions, mapState } from "pinia";

export default {
  data() {
    return {
      prov: "",
      city_reg: "",
      email: "",
      password: "",
      gender: "",
      age: "",
      weight: "",
    };
  },
  methods: {
    ...mapActions(useFoodStore, [
      "getAllProvince",
      "getAllCities",
      "registerAction",
    ]),
    async cityPick() {
      try {
        await this.getAllCities(this.prov);
      } catch (err) {
        console.log(err);
      }
    },
    async registerClick() {
      try {
        let payload = {
          email: this.email,
          password: this.password,
          gender: this.gender,
          age: this.age,
          weight: this.weight,
          location: this.city_reg,
        };
        await this.registerAction(payload);
        this.$router.push("/login");
      } catch (err) {
        console.log(err);
      }
    },
  },
  computed: {
    ...mapState(useFoodStore, ["province", "city"]),
  },
  async created() {
    try {
      await this.getAllProvince();
    } catch (err) {
      console.log(err);
    }
  },
};
</script>

<template>
  <div class="wrapper fadeInDown">
    <br />
    <div id="formContent">
      <br /><br />

      <div class="fadeIn first logo">
        <img
          style="width: 110px"
          src="../assets/Diet.jpg"
          id="icon"
          alt="User Icon"
        />
      </div>
      <br />
      <hr style="height: 1px; background-color: #ccc; border: none" />

      <h2 style="color: forestgreen">Sign Up</h2>
      <br /><br />

      <form>
        <input
          type="text"
          v-model="email"
          id="login"
          class="fadeIn second"
          name="login"
          placeholder="email"
        /><br /><br />
        <input
          type="password"
          v-model="password"
          id="password"
          class="fadeIn third"
          name="login"
          placeholder="password"
        /><br /><br />
        <select name="gender" v-model="gender">
          <option value="" selected disabled>gender</option>
          <option value="female">Female</option>
          <option value="male">Male</option></select
        ><br /><br />
        <input
          type="number"
          class="fadeIn third"
          name="login"
          v-model="age"
          placeholder="age (min 18 year)"
        /><br /><br />
        <input
          type="number"
          class="fadeIn third"
          name="login"
          v-model="weight"
          placeholder="weight (in kg)"
        /><br /><br />

        <select name="prov" v-model="prov" v-on:change="cityPick">
          <option value="" selected disabled>province</option>
          <option :value="prov.id" v-for="prov in province" :key="prov.id">
            {{ prov.nama }}
          </option></select
        ><br /><br />

        <select name="city" v-model="city_reg">
          <option value="" selected disabled>city</option>
          <option :value="c.nama" v-for="c in city" :key="c.id">
            {{ c.nama }}
          </option></select
        ><br /><br />
        <input
          @click.prevent="registerClick"
          type="submit"
          class="fadeIn fourth"
          value="Sign Up"
        />
      </form>

      <div id="formFooter">
        <p>
          Already have an account ?
          <RouterLink to="/login" class="underlineHover" href="#">
            Log In</RouterLink
          >
        </p>
      </div>
    </div>
    <br />
    <br />
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Poppins");

/* BASIC */

html {
  background-color: #1ec041;
}

body {
  font-family: "Poppins", sans-serif;
  height: 100vh;
}

a {
  color: #3ba837;
  display: inline-block;
  text-decoration: none;
  font-weight: 400;
}

h2 {
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  display: inline-block;
  margin: 40px 8px 10px 8px;
  color: #cccccc;
}

/* STRUCTURE */

.wrapper {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  min-height: 100%;
  padding: 20px;
}

.logo {
  display: flex;
  text-align: center;
  justify-content: center;
  width: 100%;
  object-fit: cover;
}

#icon {
  width: 40px;
}

#formContent {
  -webkit-border-radius: 10px 10px 10px 10px;
  border-radius: 10px 10px 10px 10px;
  background: #fff;
  padding: 30px;
  width: 90%;
  max-width: 600px;
  position: relative;
  padding: 0px;
  -webkit-box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.3);
  box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.3);
  text-align: center;
}

#formFooter {
  background-color: #f6f6f6;
  border-top: 1px solid #dce8f1;
  padding: 25px;
  text-align: center;
  -webkit-border-radius: 0 0 10px 10px;
  border-radius: 0 0 10px 10px;
}

/* TABS */

h2.inactive {
  color: #cccccc;
}

h2.active {
  color: #0d0d0d;
  border-bottom: 2px solid #3ad135;
}

/* FORM TYPOGRAPHY*/

input[type="button"],
input[type="submit"],
input[type="reset"] {
  background-color: #3ba837;
  border: none;
  color: white;
  padding: 15px 80px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  text-transform: uppercase;
  font-size: 13px;
  -webkit-box-shadow: 0 10px 30px 0 rgba(95, 186, 233, 0.4);
  box-shadow: 0 10px 30px 0 rgba(95, 186, 233, 0.4);
  -webkit-border-radius: 5px 5px 5px 5px;
  border-radius: 5px 5px 5px 5px;
  margin: 5px 20px 40px 20px;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}

input[type="button"]:hover,
input[type="submit"]:hover,
input[type="reset"]:hover {
  background-color: #3ad135;
}

input[type="button"]:active,
input[type="submit"]:active,
input[type="reset"]:active {
  -moz-transform: scale(0.95);
  -webkit-transform: scale(0.95);
  -o-transform: scale(0.95);
  -ms-transform: scale(0.95);
  transform: scale(0.95);
}

input[type="text"] {
  background-color: #f6f6f6;
  border: none;
  color: #0d0d0d;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 5px;
  width: 85%;
  border: 2px solid #f6f6f6;
  -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -ms-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
  -webkit-border-radius: 5px 5px 5px 5px;
  border-radius: 5px 5px 5px 5px;
}

input[type="text"]:focus {
  background-color: #fff;
  border-bottom: 2px solid #3ad135;
}

input[type="text"]:placeholder {
  color: #cccccc;
}

input[type="password"] {
  background-color: #f6f6f6;
  border: none;
  color: #0d0d0d;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 5px;
  width: 85%;
  border: 2px solid #f6f6f6;
  -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -ms-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
  -webkit-border-radius: 5px 5px 5px 5px;
  border-radius: 5px 5px 5px 5px;
}

input[type="password"]:focus {
  background-color: #fff;
  border-bottom: 2px solid #3ad135;
}

input[type="password"]:placeholder {
  color: #cccccc;
}
input[type="number"] {
  background-color: #f6f6f6;
  border: none;
  color: #0d0d0d;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 5px;
  width: 85%;
  border: 2px solid #f6f6f6;
  -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -ms-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
  -webkit-border-radius: 5px 5px 5px 5px;
  border-radius: 5px 5px 5px 5px;
}

input[type="number"]:focus {
  background-color: #fff;
  border-bottom: 2px solid #3ad135;
}

input[type="number"]:placeholder {
  color: #cccccc;
}

input[type="password"] {
  background-color: #f6f6f6;
  border: none;
  color: #0d0d0d;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 5px;
  width: 85%;
  border: 2px solid #f6f6f6;
  -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -ms-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
  -webkit-border-radius: 5px 5px 5px 5px;
  border-radius: 5px 5px 5px 5px;
}

input[type="password"]:focus {
  background-color: #fff;
  border-bottom: 2px solid #3ad135;
}

input[type="password"]:placeholder {
  color: #cccccc;
}

select {
  background-color: #f6f6f6;
  border: none;
  color: #0d0d0d;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 5px;
  width: 85%;
  border: 2px solid #f6f6f6;
  -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -ms-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
  -webkit-border-radius: 5px 5px 5px 5px;
  border-radius: 5px 5px 5px 5px;
}

select:focus {
  background-color: #fff;
  border-bottom: 2px solid #3ad135;
}

select:disabled {
  color: #cccccc;
}

/* ANIMATIONS */

/* Simple CSS3 Fade-in-down Animation */
.fadeInDown {
  -webkit-animation-name: fadeInDown;
  animation-name: fadeInDown;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

@-webkit-keyframes fadeInDown {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }
  100% {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

@keyframes fadeInDown {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }
  100% {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

/* Simple CSS3 Fade-in Animation */
@-webkit-keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@-moz-keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.fadeIn.second {
  -webkit-animation-delay: 0.6s;
  -moz-animation-delay: 0.6s;
  animation-delay: 0.6s;
}

.fadeIn.third {
  -webkit-animation-delay: 0.8s;
  -moz-animation-delay: 0.8s;
  animation-delay: 0.8s;
}

.fadeIn.fourth {
  -webkit-animation-delay: 1s;
  -moz-animation-delay: 1s;
  animation-delay: 1s;
}

/* Simple CSS3 Fade-in Animation */
.underlineHover:after {
  display: block;
  left: 0;
  bottom: -10px;
  width: 0;
  height: 2px;
  background-color: #3ad135;
  content: "";
  transition: width 0.2s;
}

.underlineHover:hover {
  color: #0d0d0d;
}

.underlineHover:hover:after {
  width: 100%;
}

/* OTHERS */

*:focus {
  outline: none;
}

#icon {
  width: 60%;
}

* {
  box-sizing: border-box;
}
</style>

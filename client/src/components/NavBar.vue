<template>
  <div class="topnav nav">
    <router-link
      to="/login"
      >Home</router-link
    >
    <a @click.prevent="logoutHandler"> <i class="fa fa-sign-out" aria-hidden="true"></i>Logout</a>
  </div>
</template>

<script>
export default {

  methods: {
     logoutHandler() {
      localStorage.clear();
      this.$router.push("/login");
    },
  },
};
</script>

<style>
.topnav {
  overflow: hidden;
  background-color: #333;
}

.topnav a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.topnav a:hover {
  background-color: #ddd;
  color: black;
}

.topnav a.active {
  background-color: #d80c0c;
  color: white;
}
</style>

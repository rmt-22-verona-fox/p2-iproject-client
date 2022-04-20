<script>
import { RouterLink, RouterView } from "vue-router";
import { useFoodStore } from "./stores/food";
import { mapActions, mapState } from "pinia";

export default {
  data () {
    return {
      keyword: ""
    }
  },
  components: {
    RouterLink,
    RouterView
  },
  computed: {
    ...mapState(useFoodStore, ['allFoodData'])
  },
  methods: {
    ...mapActions(useFoodStore, ['searchFeature']),
    async searchFood () {
      try {
        await this.searchFeature(this.keyword)
      } catch (err) {
        console.log(err);
      }
    }
  },
  async created() {
    await this.searchFeature(this.keyword)
  }
}
</script>

<template>
  <div>
    <header class="header">
      <div class="header-content responsive-wrapper">
        <div class="header-logo">
          <a href="#" style="color: green; text-decoration: none ;">
            <div>
              <img style="height: 50px"
                src="./assets/DietLogo.jpg"
              />
            </div>
            <!-- <img src="https://assets.codepen.io/285131/untitled-ui.svg" /> -->
            <h5 style="color:black ; text-decoration: none ;">Dietiv</h5>
          </a>
        </div>
        <div class="header-navigation">
          <nav class="header-navigation-links">
            <a href="#"> <RouterLink to="/" @click.prevent="toHome">
                Home
              </RouterLink></a>
            <a href="#"> Contact Us </a>
          </nav>
          <div class="header-navigation-actions">
            <!-- <a href="#" class="button">
              <i class="ph-lightning-bold"></i>
              <span>Upgrade now</span>
            </a> -->
            <!-- <a href="#" class="icon-button">
              <i class="ph-sign-out-bold"></i>
            </a> -->
            <a class="button" style="font-size: 15px">  <i class="ph-sign-out-bold"></i><i>Log out</i></a> 
          </div>
        </div>
        <a href="#" class="button">
          <i class="ph-list-bold"></i>
          <span>Menu</span>
        </a>
      </div>
    </header>
    
   <RouterView />
  </div>
</template>

<style>
@import "@/assets/base.css";

</style>

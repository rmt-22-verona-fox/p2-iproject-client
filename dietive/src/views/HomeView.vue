<script>
import { useFoodStore } from "../stores/food";
import { mapActions, mapState } from "pinia";

export default {
  data () {
    return {
      keyword: ""
    }
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
    <main class="main">
      <div class="responsive-wrapper">
        <div class="main-header">
          <h1>Welcome to Dietiv, diet start today ( ͡❛ ͜ʖ ͡❛)✊</h1>
          
        </div>
        <br>
       
        <!-- <div class="horizontal-tabs">
          <a href="#">My details</a>
          <a href="#">Profile</a>
          <a href="#">Password</a>
          <a href="#">Team</a>
          <a href="#">Plan</a>
          <a href="#">Billing</a>
          <a href="#">Email</a>
          <a href="#">Notifications</a>
          <a href="#" class="active">Integrations</a>
          <a href="#">API</a>
        </div> -->
        <div class="content-header">

           

          <div class="content-header-intro">
            <h2>Search Your Food</h2>
            <p>
              Dietiv is a tool you use every day to maintain your health.
            </p>
          </div>
          <div class="content-header-actions">
            <!-- <a href="#" class="button">
              <i class="ph-faders-bold"></i>
              <span>Filters</span>
            </a> -->
            <div class="search" style="width: 450px">
            <input type="text" v-model="keyword" placeholder="e.g. Cake" />
            <button @click.prevent="searchFood" type="submit">
              <i class="ph-magnifying-glass-bold"></i>
            </button>
            <br><br>
          </div>
          </div>
        </div>
        <div class="content">
          <div class="content-panel">
            <div class="vertical-tabs">
              <a href="#" class="active">All Food</a>
              <a href="#">My Food</a>
              <a href="#">Article For You</a>
              <a href="#">Chat Room</a>
            </div>
          </div>
          <div class="content-main">
            <div class="card-grid" >


              <article class="card" v-for="data in allFoodData" :key="data.id">
                <div class="card-header">
                  <div>
             
                    <img style="width: 500px" :src="data.image"
                    />
                  </div>
                  
                </div>
                <div>
                   
                   
                  </div>
                <div class="card-body">
                   <h3 style=" font-weight: bold;">{{data.title}}</h3>
                   <br>
                 
                  <p style="  padding-bottom: 10px;">Calories: {{data.nutrition.nutrients[0].amount}} kcal</p>
                  <p style="  padding-bottom: 10px;">Fat: {{data.nutrition.nutrients[1].amount}} g</p>
                </div>
                <div>

                </div>
                <div class="card-footer">
                  <a href="#">+ Add to My Food</a>
                </div>
              </article>

            
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style>
@import "@/assets/base.css";

</style>

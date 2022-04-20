<script >
import { useFoodStore } from "../stores/food";
import { mapActions, mapState, mapWritableState } from "pinia";

export default {
  data () {
    return {
      message : "",
    }
  },
  computed: {
    ...mapState(useFoodStore, ['userFood', 'userInfo']),
    ...mapWritableState(useFoodStore, ['isLogin'])
  },
  methods: {
    ...mapActions(useFoodStore, ['getUserFood', 'resetFoodAction', 'deleteFoodAction']),
    async resetFood () {
      try {
        await this.resetFoodAction()
        await this.getUserFood()
        this.$router.push("/food")
      } catch (err) {
        console.log(err);
      }
    },
    async deleteFood (id) {
      try {
        await this.deleteFoodAction(id)
        await this.getUserFood()
        this.$router.push("/food")
      } catch (err) {
        console.log(err);
      }
    },
  },
 watch: {
    userInfo: {
      handler(val) {
        if (val.caloriesIntake === "0" || val.caloriesIntake === "0.00") {
          this.message = `⚠️ Your have not added any food. Your daily need is ${val.dailyCalories} kcal. ${(val.dailyCalories)} kcal calories left.`
        } else if (val.status === 'lack') {
          this.message = `🟢 Your calories intake is still lack. Your daily need is ${val.dailyCalories} kcal and you already ate ${Number(val.caloriesIntake).toFixed(2)} kcal. ${(val.dailyCalories - val.caloriesIntake).toFixed(2)} kcal calories left.`
        } else {
          this.message = `🔴 Your calories intake is already over. Your daily need is ${val.dailyCalories} kcal and you already ate ${Number(val.caloriesIntake).toFixed(2)} kcal. ${(val.caloriesIntake - val.dailyCalories).toFixed(2)} kcal calories over today.`
        }
      },
    
      immediate: true
    }
  },
  async created() {
    try {
      await this.getUserFood()
      const token = localStorage.getItem("access_token")
      if (token) {
        this.isLogin = true
      } else {
        this.isLogin = false
      }
    } catch (err) {
      console.log(err);
    }

  }
}
</script>

<template>
   <div>
    <main class="main">
      <div class="responsive-wrapper">
        <div class="main-header">
          <h1>My Food ( ͡❛ ͜ʖ ͡❛)🥗</h1>
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
            <h2>Today's report :</h2>
            <p>
              {{message}}
            </p>
          </div>
          <div class="content-header-actions">
            <!-- <a href="#" class="button">
              <i class="ph-faders-bold"></i>
              <span>Filters</span>
            </a> -->
              <div style="padding-top: 30px">
             <button class="button" @click.prevent="resetFood" style="font-size: 12px"><i class="ph-delete"></i><i>Reset Today's Food</i></button> 
            <br><br>
          </div>
          </div>
        </div>
        <div class="content">
          <div class="content-panel">
            <div class="vertical-tabs">
              <RouterLink to="/">
                All Food
              </RouterLink>
              <RouterLink class="active"  to="/food" href="#">My Food</RouterLink>
              <a href="#">Article For You</a>
              <a href="#">Chat Room</a>
            </div>
          </div>
          <div class="content-main">
            <div class="card-grid" >


              <article class="card" v-for="data in userFood" :key="data.id">
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
                 
                  <p style="  padding-bottom: 10px;"> 🔥 Calories: {{data.calories}} kcal</p>
                </div>
                <div>

                </div>
                <div class="card-footer">
                  <a @click.prevent="deleteFood(data.id)">Delete Food</a>
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


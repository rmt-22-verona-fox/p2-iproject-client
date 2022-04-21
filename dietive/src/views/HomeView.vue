<script>
import { useFoodStore } from "../stores/food";
import { mapActions, mapState, mapWritableState } from "pinia";

export default {
  data () {
    return {
      keyword: "",
      // title: "",
      // seriesNumber: "",
      // image: "", 
      // calories: ""
    }
  },
  computed: {
    ...mapState(useFoodStore, ['allFoodData']),
    ...mapWritableState(useFoodStore, ['isLogin'])
  },
  methods: {
    ...mapActions(useFoodStore, ['searchFeature', 'addFoodAction', 'logoutAction']),
    async searchFood () {
      try {
        await this.searchFeature(this.keyword)
      } catch (err) {
        const error = err.response.statusText;
        swal("Error", error, "error");
      }
    },
    async addClick (payload) {
      try {
        await this.addFoodAction(payload)
      } catch (err) {
        const error = err.response.statusText;
        swal("Error", error, "error");
      }
    }
  },
  async created() {
    try {
      await this.searchFeature(this.keyword)
      const token = localStorage.getItem("access_token")
      if (token) {
        this.isLogin = true
      } else {
        this.isLogin = false
      }
    } catch (err) {
        if (err.response.status === 401) {
        this.isLogin = false;
        await this.logoutAction();
        this.$router.push("/login");
        const error = err.response.data.message;
        swal("Error", error, "error");
      } else {
        const error = err.response.statusText;
        swal("Error", error, "error");
      }
    }

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
       
        <div class="content-header">

           

          <div class="content-header-intro">
            <h2>Search Your Food</h2>
            <p>
              Dietiv is a tool you use every day to maintain your health.
            </p>
          </div>
          <div class="content-header-actions">

            <div class="search" style="width: 450px;">
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
              <RouterLink class="active" to="/">
                All Food
              </RouterLink>
              <RouterLink to="/food" >My Food</RouterLink>
              <RouterLink to="/premium" >Premium Article</RouterLink>
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
                 
                  <p style="  padding-bottom: 10px;"> 🔥 Calories: {{data.nutrition.nutrients[0].amount.toFixed(2)}} kcal</p>
                  <p style="  padding-bottom: 10px;"> ♨️ Fat: {{data.nutrition.nutrients[1].amount.toFixed(2)}} g</p>
                </div>
                <div>

                </div>
                <div class="card-footer">
                  <a href="" class="action" @click.prevent="addClick({
                    title: data.title,
                    seriesNumber: data.id,
                    image: data.image,
                    calories: data.nutrition.nutrients[0].amount.toFixed(2)
                  })">+ Add to My Food</a>
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

.action:hover {
  color: rgb(138, 141, 140);
}

</style>

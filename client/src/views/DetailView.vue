<template>
      <!-- Movie Detail -->
      
 <section class="detail">
    <div class="apadah">
      <div class="cover">
        <img
          :src="movieDetails.imageUrl"
          alt=""
        />
      </div>
      <div class="content">
        <div class="content-body">
          <div class="black-label">
            <span class="title"><b>{{movieDetails.title}}</b></span>
            <div class="prix">
              <span><b>Rating: 8</b></span>
              <span><b> Genre : {{movieDetails.genre}} </b></span>
            </div>
            <p>
       {{movieDetails.synopsis}}
            </p>
            <div class="price">
              <span><b>Price: Rp.35.000,00</b></span>
            </div>
            <button type="button" class="buttonDetail" @click.prevent="paymentHandler">Buy this movie</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useMovieStore } from "@/stores/movie";
    export default {
         computed: {
    ...mapState(useMovieStore, ["movieDetails", 'paymentData']),
  },
  methods: {
    ...mapActions(useMovieStore,['payment']),
    paymentHandler(){
      this.payment()
       window.location.href = this.paymentData.redirect_url
    }
  },
  created(){
    this.payment()
  }
    }
</script>

<style>

</style>
<template>
  <div class="flex m-4">
            <div class="p-4 md:w-auto">
              <div class="h-full rounded-xl shadow-cla-blue bg-gradient-to-r from-indigo-50 to-blue-50 overflow-hidden">
                <img class="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100" :src="post.imageUrl" alt="blog">
                <div class="p-6">
                  <h1 class="title-font text-lg font-medium text-gray-600 mb-3">{{post.category}}</h1>
                  <p class="leading-relaxed mb-3">{{post.description}}</p>
                  <div class="flex items-center flex-wrap ">
                    <button @click.prevent="orderform(post.id)" class="bg-gradient-to-r from-cyan-400 to-blue-400 hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg">Order</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
</template>
<script>
export default {
 name:"cardhome",
 props:["post"],
 methods:{
  orderform(id){
    this.$router.push("/addorder/"+id)
  }
 }
}
</script>

<style>

</style>
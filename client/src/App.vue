<script >
import navbar from '@/components/navbar.vue'
export default{
    name :"app",
    components: {
    navbar
  },
}
</script>

<template>
<div>
  <div>
    <navbar></navbar>
  </div>
  <router-view />
</div>

</template>

<style>


</style>

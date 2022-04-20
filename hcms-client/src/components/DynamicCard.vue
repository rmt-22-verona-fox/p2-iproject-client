<script>
export default {
  props: ["element"],
};
</script>
<template>
  <div class="card" style="width: 18rem">
    <img :src="element.imageUrl" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">{{ element.name }}</h5>
      <p class="card-text">Speciality: {{ element.speciality }}</p>
      <a href="#" class="btn btn-primary">Appoint</a>
    </div>
  </div>
</template>

<style>
.card-img-top {
  width: 100%;
  height: 20vw;
  object-fit: cover;
}
</style>

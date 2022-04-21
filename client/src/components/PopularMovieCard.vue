<template>
  <img
    :src="popularMovie.imageUrl"
    alt=""
    class="row_poster row_posterLarge"
  />
</template>

<script>
export default {
props:['popularMovie']

};
</script>

<style lang="scss" scoped></style>

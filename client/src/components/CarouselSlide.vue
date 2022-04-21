<script>
export default {
  props: ['visibleSlide', 'index']
}
</script>

<template>
  <div class="carousel-slide" v-show="visibleSlide === index">
    <slot></slot>
  </div>
</template>
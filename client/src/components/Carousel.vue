<script>
export default {
  data() {
    return {
      
    }
  },
  methods: {
    next () {
      this.$emit('next')
    },
    prev () {
      this.$emit('prev')
    }
  }
}
</script>

<template>
<div class="carousel">
  <slot></slot>

  <button @click="next" class="next">Next</button>
  <button @click="prev" class="prev">Prev</button>
</div>
</template>

<style scoped>
  .carousel {
    position: relative;
    width: 920px;
    height: 480px;
    overflow: hidden;
  }
  button {
    position: absolute;
    height: 40px;
    width: 50px;
    top: calc(50% - 20px);
    background-color: rgba(0, 0, 0, 0.502);
    border: none;
    color: #fff;
  }
  button:active, button:hover {
    outline: none;
    cursor: pointer;
  }
  .next {
    right: 0;
  }

  .prev {
    left: 0;
  }
</style>
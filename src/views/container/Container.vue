<script>
export default {
  props: ["size"],
};
</script>

<template>
  <div
    v-bind:class="size == 'lg' ? 'max-w-screen-lg' : 'max-w-screen-xl'"
    class="mx-auto"
  >
    <slot></slot>
  </div>
</template>

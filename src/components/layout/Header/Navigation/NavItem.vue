<script>
export default {
  props: ["link", "label"],
};
</script>

<template>
  <router-link
    v-bind:to="link"
    class="text-heading-4 text-gray-70 font-label font-bold"
  >
    {{ label }}
  </router-link>
</template>

<script>
export default {
  props: ["title", "content"],
};
</script>

<template>
  <div class="flex flex-col">
    <h2 class="text-gray-100 font-label font-bold text-heading-3 mb-4">
      {{ title }}
    </h2>

    <div
      v-for="(item, i) in content"
      v-bind:key="i"
      class="text-heading-4 text-gray-50 mb-3"
    >
      <p v-if="!item.href">
        {{ item }}
      </p>

      <router-link v-if="item.href" v-bind:to="item.href">
        {{ item.label }}
      </router-link>
    </div>
  </div>
</template>

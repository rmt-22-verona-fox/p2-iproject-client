<script>
export default {
  props: ["label", "subLabel"],
};
</script>

<template>
  <div class="flex flex-col text-center">
    <p class="text-gray-100 text-heading-2 font-label font-bold mb-2">
      {{ label }}
    </p>
    <p class="text-heading-4 text-gray-70 font-bold">
      {{ subLabel }}
    </p>
  </div>
</template>

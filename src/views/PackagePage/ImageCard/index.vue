<script>
export default {
  props: ["image"],
};
</script>

<template>
  <div class="md:w-1/2 px-4 mb-4 md:mb-8">
    <img
      class="rounded-xl shadow-md h-[172px] w-[288px]"
      v-bind:src="image"
      alt="imageList"
    />
  </div>
</template>

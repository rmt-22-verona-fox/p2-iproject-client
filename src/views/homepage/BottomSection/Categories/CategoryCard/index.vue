<script>
export default {
  props: ["category"],
};
</script>

<template>
  <article class="flex flex-col w-[182px]">
    <figure class="relative w-full h-[179px] rounded-xl overflow-hidden mb-5">
      <img
        v-bind:src="category?.imageThumbnail"
        alt="Borobudur"
        class="h-full object-cover w-full"
      />
    </figure>

    <p class="text-heading-3 text-gray-100 font-bold">{{ category?.name }}</p>
  </article>
</template>

<template>
  <div class="flex gap-1 align-center flex-row">
    <img
      v-for="(el, i) in 5"
      v-bind:key="i"
      src="@/assets/icons/yellow-star.svg"
      height="20"
      width="20"
    />
  </div>
</template>

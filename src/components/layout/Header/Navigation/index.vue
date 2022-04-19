<script>
import NavItem from "./NavItem.vue";

export default {
  components: {
    NavItem,
  },
};
</script>

<template>
  <nav class="flex items-center gap-5">
    <NavItem link="/" label="Beranda" />
    <NavItem link="/profile" label="profile" />
    <NavItem link="/detil/1" label="Paket" />
    <NavItem link="/" label="Testimonial" />
  </nav>
</template>

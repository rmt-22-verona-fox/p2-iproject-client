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
    <NavItem link="/home" label="Beranda" />
    <NavItem link="/" label="Kontak" />
    <NavItem link="/" label="Paket" />
    <NavItem link="/" label="Testimonial" />
  </nav>
</template>

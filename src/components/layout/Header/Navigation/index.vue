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
    <NavItem link="/profil" label="profile" />
    <NavItem link="/detil-paket/1" label="Paket" />
    <NavItem link="/" label="Testimonial" />
  </nav>
</template>

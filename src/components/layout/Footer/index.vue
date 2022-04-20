<script>
import Container from "@/views/container/Container.vue";
import FooterInfo from "./FooterInfo.vue";

export default {
  components: {
    Container,
    FooterInfo,
  },
};
</script>

<template>
  <footer class="footer">
    <Container size="lg">
      <div class="flex bg-white p-16">
        <figure>
          <img
            src="@/assets/travelio-logo-footer.svg"
            alt="footer-logo"
            height="100"
            width="170"
          />
        </figure>

        <div class="flex flex-1 justify-between ml-[106px]">
          <FooterInfo
            title="Info"
            v-bind:content="[
              {
                label: 'Tentang kami',
                href: '/',
              },
              {
                label: 'Testimonial',
                href: '/',
              },
              {
                label: 'Kontak',
                href: '/',
              },
            ]"
          />

          <FooterInfo
            title="Perusahaan"
            v-bind:content="[
              {
                label: 'Syarat & Ketentuan',
                href: '/',
              },
              {
                label: 'Kebijakan privasi',
                href: '/',
              },
              {
                label: 'Blog',
                href: '/',
              },
              {
                label: 'Bantuan pelayanan',
                href: '/',
              },
            ]"
          />

          <FooterInfo
            title="Kontak"
            v-bind:content="[
              'Jl. Cisitu Lama No VA/160B',
              'Bandung, Jawa Barat',
              'Indonesia',
              '(022)8888888',
              'diazlinggaputra@gmail.com',
            ]"
          />
        </div>
      </div>
    </Container>

    <div class="bg-blue-100 p-3">
      <p class="text-heading-5 text-white font-bold text-center">
        Diaz Linggaputra &copy; 2022 Travel10. All Rights Reserved.
      </p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
}
</style>

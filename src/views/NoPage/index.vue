<template>
  <!-- This is an example component -->
  <div class="h-screen w-screen bg-white flex items-center font-label">
    <div
      class="container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700 gap-40"
    >
      <div class="max-w-md">
        <div class="text-heading-1 font-dark font-bold">404</div>
        <p class="text-heading-2 md:text-3xl font-medium leading-normal">
          Maaf, sepertinya anda tersasar dari halaman yang anda cari
        </p>
        <p class="mb-8">Mari kita kembali ke halaman awal</p>

        <router-link
          class="px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-blue-100 active:bg-blue-100"
          to="/"
        >
          Kembali ke halaman utama
        </router-link>
      </div>
      <div class="max-w-lg align-middle">
        <img
          src="@/assets/travelio-logo-footer.svg"
          alt="travel10-logo"
          width="350"
          height="350"
        />
      </div>
    </div>
  </div>
</template>

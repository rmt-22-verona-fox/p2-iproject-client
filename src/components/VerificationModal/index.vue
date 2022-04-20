<script>
// const modal = document.querySelector(".main-modal");
// const closeButton = document.querySelectorAll(".modal-close");

export default {
  data() {
    return {
      isModalOpen: false,
    };
  },

  methods: {
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
  },
};

// for (let i = 0; i < closeButton.length; i++) {
//   const elements = closeButton[i];

//   elements.onclick = (e) => modalClose();

//   modal.style.display = "none";

//   window.onclick = function (event) {
//     if (event.target == modal) modalClose();
//   };
// }
</script>

<template>
  <div>
    <button
      v-on:click="openModal"
      class="bg-blue-500 text-white p-2 rounded text-2xl font-bold"
    >
      Verifikasi Modal
    </button>
  </div>

  <div
    class="fixed w-full h-100 inset-0 z-50 overflow-hidden flex justify-center items-center animated faster"
    v-on:click="closeModal"
    v-bind:class="isModalOpen ? 'fadeIn flex' : 'fadeOut none'"
    style="background: rgba(0, 0, 0, 0.7)"
    v-if="isModalOpen"
  >
    <div
      class="border rounded-xl shadow-lg modal-container bg-white w-11/12 md:max-w-md mx-auto z-50 overflow-y-auto"
      v-on:click.stop="openModal"
    >
      <div class="modal-content py-4 text-left px-6">
        <!--Title-->
        <div class="flex justify-between items-center pb-3">
          <p class="text-2xl font-bold text-gray-70">Kode Verifikasi Email:</p>
          <div class="cursor-pointer z-50" v-on:click.stop="closeModal">
            <svg
              class="fill-current text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
            >
              <path
                d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
              ></path>
            </svg>
          </div>
        </div>
        <!-- Body -->
        <form class="w-full">
          <input
            type="text"
            class="h-3 p-6 my-6 w-full appearance-none border border-gray-70 mb-6 rounded-lg text-heading-5 text-gray-50 focus:outline-none focus:ring-blue-100 focus:border-blue-100 focus:text-primary-black"
            placeholder="Masukkan kode verifikasi email"
          />

          <!-- <div class="">
            <label for="phone" class="text-md text-gray-600"
              >Phone Number</label
            >
          </div>
          <div class="">
            <input
              type="text"
              id="phone"
              autocomplete="off"
              name="phone"
              class="h-3 p-6 w-full border-2 border-gray-300 mb-5 rounded-md"
              placeholder="Example. 0729400426"
            />
          </div>
          <div class="">
            <label for="id_number" class="text-md text-gray-600"
              >ID Number</label
            >
          </div>
          <div class="">
            <input
              type="number"
              id="id_number"
              autocomplete="off"
              name="id_number"
              class="h-3 p-6 w-full border-2 border-gray-300 mb-5 rounded-md"
              placeholder="Caretaker's ID number"
            />
          </div> -->
        </form>
        <!--Footer-->
        <div class="flex justify-end pt-2">
          <button
            class="focus:outline-none px-4 border border-blue-100 bg-white p-3 rounded-lg text-primary-black hover:border-red-100 hover:bg-red-100 hover:text-white"
            v-on:click.stop="closeModal"
          >
            Kembali
          </button>
          <button
            class="focus:outline-none px-4 text-white bg-blue-100 p-3 ml-3 rounded-lg"
          >
            Kirim
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.animated {
  -webkit-animation-duration: 500ms;
  animation-duration: 500ms;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

.animated.faster {
  -webkit-animation-duration: 500ms;
  animation-duration: 500ms;
}

.fadeIn {
  -webkit-animation-name: fadeIn;
  animation-name: fadeIn;
}

.fadeOut {
  -webkit-animation-name: fadeOut;
  animation-name: fadeOut;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}
</style>

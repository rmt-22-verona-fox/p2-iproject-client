<script>
import { mapState, mapWritableState, mapActions } from "pinia";
import { usePackageStore } from "../../stores/package";
import { useToast } from "vue-toastification";

export default {
  setup() {
    const toast = useToast();
    return { toast };
  },

  data() {
    return {
      form: {
        rating: 1,
        review: "",
      },
    };
  },

  computed: {
    ...mapState(usePackageStore, ["packageDetail"]),
    ...mapWritableState(usePackageStore, [
      "testimonyModalState",
      "homeTestimonyList",
    ]),
  },

  methods: {
    ...mapActions(usePackageStore, [
      "storeUserTestimony",
      "renderUserTestimonies",
    ]),

    openModal() {
      this.testimonyModalState = true;
    },
    closeModal() {
      this.testimonyModalState = false;
    },

    async sendTestimony() {
      try {
        await this.storeUserTestimony({
          rating: this.form.rating,
          review: this.form.review,
          destination: this.packageDetail?.destinationName,
        });

        const response = await this.renderUserTestimonies(
          this.packageDetail?.destinationName
        );

        this.homeTestimonyList = response.data;

        this.toast.success("Berhasil menambahkan testimoni");
        this.testimonyModalState = false;
      } catch (err) {
        this.toast.error(err.response?.data?.message);
      }
    },
  },
};
</script>

<template>
  <div
    class="fixed w-full h-100 inset-0 z-50 overflow-hidden flex justify-center items-center animated faster"
    v-on:click="closeModal"
    v-bind:class="testimonyModalState ? 'fadeIn flex' : 'fadeOut none'"
    style="background: rgba(0, 0, 0, 0.7)"
    v-if="testimonyModalState"
  >
    <div
      class="border rounded-xl shadow-lg modal-container bg-white w-11/12 md:max-w-md mx-auto z-50 overflow-y-auto"
      v-on:click.stop="openModal"
    >
      <div class="modal-content py-4 text-left px-6">
        <!--Title-->
        <div class="flex justify-between items-center pb-3">
          <p class="text-2xl font-bold text-gray-70">Ceritakan Pengalamanmu!</p>
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
        <form class="w-full mt-2">
          <label for="rating" class="text-md text-gray-600"
            >Rating Pengalamanmu</label
          >
          <input
            id="rating"
            type="number"
            class="h-2 p-6 w-full border-2 border-gray-300 mb-5 rounded-md"
            v-model="form.rating"
          />

          <label for="review" class="text-md text-gray-600">Reviewmu</label>
          <textarea
            id="review"
            class="p-6 w-full border-2 border-gray-300 mb-5 rounded-md"
            rows="3"
            max="5"
            v-model="form.review"
          >
          </textarea>
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
            v-on:click.prevent="sendTestimony"
            class="focus:outline-none px-4 text-white bg-blue-100 p-3 ml-3 rounded-lg"
          >
            Kirim
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

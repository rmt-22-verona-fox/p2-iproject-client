<script>
import { mapWritableState, mapActions } from "pinia";
import { useTransactionStore } from "@/stores/transaction";
import { useToast } from "vue-toastification";
import Container from "../../views/container/Container.vue";
import Button from "@/components/button/index.vue";

export default {
  setup() {
    const toast = useToast();
    return { toast };
  },

  components: {
    Container,
    Button,
  },

  data() {
    return {
      quantity: 1,
    };
  },

  computed: {
    ...mapWritableState(useTransactionStore, [
      "checkoutModalState",
      "priceToPayState",
    ]),
  },

  methods: {
    ...mapActions(useTransactionStore, ["paymentHandler", "checkoutHandler"]),

    openModal() {
      this.checkoutModalState = true;
    },

    closeModal() {
      this.checkoutModalState = false;
    },

    incrementQty() {
      this.quantity++;
    },

    decrementQty() {
      if (this.quantity === 0) {
        return;
      }
      this.quantity--;
    },

    async payment() {
      if (this.quantity === 0) {
        return;
      }

      try {
        const response = await this.paymentHandler({
          amount: this.priceToPayState * this.quantity,
        });

        await snap.pay(response.data?.token, {
          onSuccess: (result) => {
            this.checkoutModalState = false;
            this.toast.success("Pembayaran berhasil dilakukan");
            this.checkoutHandler({
              packageQty: this.quantity,
            });
          },
          onPending: function (result) {
            /* You may add your own js here, this is just example */
          },
          // Optional
          onError: function (result) {
            /* You may add your own js here, this is just example */
          },
        });

        // await this.checkoutHandler({
        //   packageQty: this.quantity,
        // });
      } catch (err) {
        this.toast.error("Pembayaran gagal dilakukan");
      }
    },
  },
};
</script>

<template>
  <button
    v-on:click="openModal"
    class="hidden bg-blue-500 text-white p-2 rounded text-2xl font-bold pointer-events-auto"
  >
    Checkout Modal
  </button>

  <div
    class="model fixed inset-0 z-50 overflow-auto flex w-full items-end animated faster"
    v-on:click="closeModal"
    v-bind:class="checkoutModalState ? 'fadeIn flex z-50' : 'fadeOut none z-0'"
    style="background: rgba(0, 0, 0, 0.1)"
    v-if="checkoutModalState"
  >
    <div
      class="border px-6 shadow-lg bg-white z-50 overflow-y-auto w-full"
      v-on:click.stop="openModal"
    >
      <div
        class="modal-content flex flex-row items-center justify-between py-4 w-full text-left px-6"
      >
        <!-- Body -->
        <div class="flex justify-between items-center">
          <p class="text-2xl font-bold text-gray-100">Jumlah Paket</p>
          <div
            class="cursor-pointer z-50 flex flex-row gap-4 items-center mx-4 select-none"
          >
            <Button v-on:click="incrementQty" class="h-[37px] w-[40px]"
              >+</Button
            >
            <p class="text-heading-3 font-bold">{{ quantity }}</p>
            <Button v-on:click="decrementQty" class="h-[37px] w-[40px]"
              >-</Button
            >
          </div>
        </div>

        <!--Footer-->
        <div class="flex items-center gap-8">
          <p class="text-heading-3 font-bold">
            Total Rp {{ (priceToPayState * quantity).toLocaleString("id-ID") }}
          </p>
          <Button class="w-[190px]" v-on:click="payment">Bayar</Button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal {
  filter: drop-shadow(0px -4px 15px rgba(0, 0, 0, 0.25));
}
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

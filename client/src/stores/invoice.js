import { defineStore } from 'pinia'
import axios from 'axios'
const baseUrl = 'http://localhost:3000/'
export const useInvoiceStore = defineStore({
    id: 'invoice',
    state: () => ({
        invoices: []
    }),
    getters: {

    },
    actions: {
        async fetchInvoices() {
            try {
                const { data } = await axios.get(baseUrl + 'invoice', {
                    headers: {
                        access_token: localStorage.getItem('access_token')
                    }
                })
                this.invoices = data
            } catch (err) {
                if (typeof err.response.data.error.message === "string") {
                    Swal.fire({
                        position: "center",
                        icon: "warning",
                        title: err.response.data.error.message,
                        showConfirmButton: false,
                        timer: 1500,
                    });
                } else {
                    Swal.fire({
                        position: "center",
                        icon: "warning",
                        title: err.response.data.error.message.join(`, \n`),
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
            }
        },
        async createInvoice(data) {
            try {
                const response = await axios.post(baseUrl + 'invoice/add', data, {
                        headers: {
                            access_token: localStorage.getItem('access_token')
                        }
                    })
                    // console.log(response.data.invoiceNumber, '<<<<<<<<<<<')
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: `Order ${response.data.invoiceNumber} Created Successfully!`,
                    showConfirmButton: false,
                    timer: 1500,
                });
            } catch (err) {
                if (typeof err.response.data.error.message === "string") {
                    Swal.fire({
                        position: "center",
                        icon: "warning",
                        title: err.response.data.error.message,
                        showConfirmButton: false,
                        timer: 1500,
                    });
                } else {
                    Swal.fire({
                        position: "center",
                        icon: "warning",
                        title: err.response.data.error.message.join(`, \n`),
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
            }
        },
    }
})
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import InvoiceDetail from '../views/InvoiceDetail.vue'
import InvoiceView from '../views/InvoiceView.vue'
import ProductsDetail from '../views/ProductsDetail.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/login',
            name: 'login',
            component: LoginView
        },
        {
            path: '/register',
            name: 'register',
            component: RegisterView
        },
        {
            path: '/products/detail/:id',
            name: 'products-detail',
            component: ProductsDetail
        },
        {
            path: '/invoice',
            name: 'invoice',
            component: InvoiceView
        },
        {
            path: '/invoice/id',
            name: 'invoice-detail',
            component: InvoiceDetail
        },
    ]
})

router.beforeEach((to, from, next) => {
    const isAuthenticated = localStorage.getItem("access_token")
    if ((to.name === 'invoice' || to.name === 'invoice/add') && !isAuthenticated) next({ name: 'login' })
    else if ((to.name === 'login' || to.name === 'register') && isAuthenticated) next({ name: 'home' })
    else next()
})
export default router
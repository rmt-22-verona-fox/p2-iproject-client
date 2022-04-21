import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MyFoodView from '../views/MyFoodView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import ContactView from '../views/ContactView.vue'
import PremiumArticleView from '../views/PremiumArticleView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/food',
      name: 'food',
      component: MyFoodView
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
      path: '/contact-us',
      name: 'contact-us',
      component: ContactView
    },
    {
      path: '/premium',
      name: 'premium',
      component: PremiumArticleView
    },
  ]
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('access_token')
  if ((to.name === 'register' || to.name === 'login') && isAuthenticated) next({ name: 'home' })
  else if ((to.name === 'food' || to.name === 'home') && !isAuthenticated) next({ name: 'login' })
  else next()
})


export default router

import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/LoginPage.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/views/RegisterPage.vue')
    },
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomePage.vue')
    },
    {
      path: '/myapp',
      name: 'myapp',
      component: () => import('@/views/MyApplicationPage.vue')
    },
  ]
})

router.beforeEach((to, from, next) => {
  let isLogin = localStorage.access_token

  if (to.name === 'home' && !isLogin) next({ name: 'login' })
  else if (to.name === 'myapp' && !isLogin) next({ name: 'login' })
  else if ((to.name === 'login' || to.name === 'register') && isLogin) next({ name: 'home' })
  else next()
})

export default router

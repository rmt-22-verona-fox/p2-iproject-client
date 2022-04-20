import { createRouter, createWebHistory } from 'vue-router'
import login from '@/views/login.vue'
import home from '@/views/home.vue'
import formAddPost from '@/views/formAddPost.vue'
import formOrder from '@/views/formOrder.vue'
import payment from '@/views/payment.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/addpost',
      name: 'formAddPost',
      component: formAddPost,
      beforeEnter:(to,from,next)=>{
        if(localStorage.access_token){
          next()
        } else{
          next('/')
        }
      }
    },
    {
      path: '/addorder/:id',
      name: 'formOrder',
      component: formOrder,
      beforeEnter:(to,from,next)=>{
        if(localStorage.access_token){
          next()
        } else{
          next('/')
        }
      }
    },
    {
      path: '/myorder',
      name: 'payment',
      component: payment,
      beforeEnter:(to,from,next)=>{
        if(localStorage.access_token){
          next()
        } else{
          next('/')
        }
      }
    },
  ]
})

export default router

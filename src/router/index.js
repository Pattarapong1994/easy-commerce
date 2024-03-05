import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/view/user/HomeView.vue'
import CartView from '@/view/user/CartView.vue'
import CheckoutView from '@/view/user/CheckoutView.vue'
import ProfileView from '@/view/user/ProfileView.vue'
import SearchView from '@/view/user/SearchView.vue'
import SuccessView from '@/view/user/SuccessView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },    {
      path: '/profile',
      name: 'profile',
      component: ProfileView
    },    {
      path: '/cart',
      name: 'cart',
      component: CartView
    },    {
      path: '/checkout',
      name: 'checkout',
      component: CheckoutView
    },    {
      path: '/search',
      name: 'search',
      component: SearchView
    },    {
      path: '/success',
      name: 'success',
      component: SuccessView
    },
  ]
})

export default router

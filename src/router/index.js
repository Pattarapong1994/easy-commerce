import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/view/user/HomeView.vue'
import CartView from '@/view/user/CartView.vue'
import CheckoutView from '@/view/user/CheckoutView.vue'
import ProfileView from '@/view/user/ProfileView.vue'
import SearchView from '@/view/user/SearchView.vue'
import SuccessView from '@/view/user/SuccessView.vue'


import AdminLogin from '@/view/admin/LoginView.vue'
import AdminDashboard from '@/view/admin/DashboardView.vue'

import AdminProductList from '@/view/admin/product/ListView.vue'
import AdminProductUpdate from '@/view/admin/product/UpdateView.vue'

import AdminUserList from '@/view/admin/user/ListView.vue'
import AdminUserUpdate from '@/view/admin/user/UpdateView.vue'

import AdminOrderList from '@/view/admin/order/ListView.vue'
import AdminOrderDetail from '@/view/admin/order/DetailView.vue'




const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    }, 
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView
    }, 
    {
      path: '/cart',
      name: 'cart',
      component: CartView
    }, 
    {
      path: '/checkout',
      name: 'checkout',
      component: CheckoutView
    }, 
    {
      path: '/search',
      name: 'search',
      component: SearchView
    }, 
    {
      path: '/success',
      name: 'success',
      component: SuccessView
    },

    /*admin site*/

    {
      path: '/admin/login',
      name: 'admin-login',
      component: AdminLogin
    },
    {
      path: '/admin/dashboard',
      name: 'admin-dashboard',
      component: AdminDashboard
    },
    {
      path: '/admin/products/create',
      name: 'admin-product-create',
      component: AdminProductUpdate
    },
    {
      path: '/admin/products/update/:id',
      name: 'admin-product-update',
      component: AdminProductUpdate
    },
    {
      path: '/admin/products',
      name: 'admin-product-list',
      component: AdminProductList
    },
    {
      path: '/admin/users/update/:id',
      name: 'admin-user-update',
      component: AdminUserUpdate
    },
    {
      path: '/admin/users',
      name: 'admin-user-list',
      component: AdminUserList
    },
    {
      path: '/admin/orders/detail/:id',
      name: 'admin-order-detail',
      component: AdminOrderDetail
    },
    {
      path: '/admin/orders',
      name: 'admin-order-list',
      component: AdminOrderList
    },
  ]
})

export default router

import { createRouter, createWebHistory } from 'vue-router'

import Dashboard from "@/View/Dashbord/Dashboard.vue"
import Customer from "@/View/Customer/Customer.vue"
import UserList from "@/View/User/UserList.vue"
import CategoryList from "@/View/Category/CategoryList.vue"
import Product from "@/View/Product/Product.vue"
import Sale from "@/View/Sale/Sale.vue"
import Payment from "@/View/Payment/Payment.vue"

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/customer',
    name: 'Customer',
    component: Customer
  },
  {
    path: '/user',
    name: 'UserList',
    component: UserList
  },
  {
    path: '/category',
    name: 'CategoryList',
    component: CategoryList
  },
  {
    path: '/product',
    name: 'Product',
    component: Product
  },
  {
    path: '/sale',
    name: 'Sale',
    component: Sale
  },
  {
    path: '/payment',
    name: 'Payment',
    component: Payment
  },
   
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
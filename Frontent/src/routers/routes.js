import { createRouter, createWebHistory } from 'vue-router'

import Dashboard from "@/View/Dashbord/Dashboard.vue"
import Customer from "@/View/Customer/Customer.vue"
import UserList from "@/View/User/UserList.vue"
import CategoryList from "@/View/Category/CategoryList.vue"
import Product from "@/View/Product/Product.vue"

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
    path: '/poduct',
    name: 'Product',
    component: Product
  },
   
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
import { createRouter, createWebHistory } from 'vue-router'
import Pedidos from '../views/Pedidos.vue'
import HomeView from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/pedidos',
    name: 'Pedidos',
    component: 
      Pedidos,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

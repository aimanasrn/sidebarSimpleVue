import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: '',
    name: 'home',
    component: () => import('@/views/home.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/about.vue')
  },
]

const router = createRouter(
  {
    routes,
    history: createWebHistory(),
  }
)

export default router
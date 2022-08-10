import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/aboutme',
    name: 'Aboutme',
    component: () => import('../views/Aboutme.vue')
  },
  {
    path: '/myservies',
    name: 'Myservies',
    component: () => import('../views/Myservies.vue')
  },
  {
    path: '/businesspolicy',
    name: 'BusinessPolicy',
    component: () => import('../views/BusinessPolicy.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue')
  },

  //PAGE NotFound
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFoundPage',
    component: () => import('../components/NotFoundPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

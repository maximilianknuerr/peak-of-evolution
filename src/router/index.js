import { createRouter, createWebHistory } from 'vue-router'

import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'


const routes = [
    {
      path: '/',
      name: 'About',
      component: AboutView
    },
    {
      path: '/about',
      name: 'About',
      component: AboutView
    },
    {
      path: '/contact',
      name: 'Contact',
      component: ContactView
    },
  ]
  const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })
  export default router

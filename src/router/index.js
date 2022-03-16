import { createRouter, createWebHashHistory } from 'vue-router'

import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'
import HomeView from '../views/HomeView.vue'


const routes = [
    {
      path: '/',
      name: 'Home',
      component: HomeView
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
    {
      path: '/facts',
      name: 'Facts',
      component: ContactView
    },
    {
      path: '/team',
      name: 'Team',
      component: ContactView
    },
    {
      path: '/trailer',
      name: 'Trailer',
      component: ContactView
    },
  ]
  const router = createRouter({
    history: createWebHashHistory(),
    routes
  })
  export default router

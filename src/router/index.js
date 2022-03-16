import { createRouter, createWebHashHistory } from 'vue-router'

import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'
import HomeView from '../views/HomeView.vue'
import FactsView from '../views/FactsView.vue'
import TeamView from '../views/TeamView.vue'
import TrailerView from '../views/TrailerView.vue'

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
      component: FactsView
    },
    {
      path: '/team',
      name: 'Team',
      component: TeamView
    },
    {
      path: '/trailer',
      name: 'Trailer',
      component: TrailerView
    },
  ]
  const router = createRouter({
    history: createWebHashHistory(),
    routes
  })
  export default router

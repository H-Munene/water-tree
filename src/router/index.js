import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../components/HelloWorld.vue'
import AboutPage from '../views/AboutPage.vue'
import GalleryView from '../views/GalleryView.vue'
import LoginPage from '../views/LoginPage.vue'
import ContactUs from '../views/ContactUs.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about-us',
      name: 'AboutPage',
      component: AboutPage
    },
    {
      path: '/gallery-view',
      name: 'GalleryView',
      component: GalleryView
    },
    {
      path: '/login-page',
      name: 'LoginPage',
      component: LoginPage
    },
    {
      path: '/contact-us',
      name: 'ContactUs',
      component: ContactUs
    },
    
  ]
})

export default router



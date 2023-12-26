import { createApp } from 'vue'
import App from './App.vue'

//styles
import './index.css'
import './style/reset.css'

import { createRouter, createWebHistory } from 'vue-router';

const Home = () => import ('./views/Home.vue')
const About = () => import('./views/About.vue')
const Work = () => import('./views/Work.vue')
const Services = () => import('./views/Services.vue')
const Contact = () => import('./views/Contact.vue')

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/About',
    name: 'About',
    component: About
  },
  {
    path: '/Work',
    name: 'Work',
    component: Work
  },
  {
    path: '/Services',
    name: 'Services',
    component: Services
  },
  {
    path: '/Contact',
    name: 'Contact',
    component: Contact
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

createApp(App).use(router).mount('#app')
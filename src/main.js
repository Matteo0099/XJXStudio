import { createApp } from 'vue'
import App from './App.vue'

//styles
import './index.css'
import './style/reset.css'

import { createRouter, createWebHistory } from 'vue-router';

const Home = () => import ('./App.vue')
const About = () => import('./views/About.vue')

const routes = [
  {
    path: '/App',
    name: 'Home',
    component: Home,
  },
  {
    path: '/About',
    name: 'About',
    component: About,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

createApp(App).use(router).mount('#app')
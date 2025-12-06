import { createApp } from 'vue';
import App from './App.vue';
import globalData from './plugins/gloabalData';

// styles
import './style/font.css';
import './style/reset.css';
import './index.css';

import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Swiper
const swiper = new Swiper('.swiper', {
  direction: 'vertical',
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

// vercel stats
import { inject } from '@vercel/analytics';
inject();

// vue router
import { createRouter, createWebHistory } from 'vue-router';

// all pages
const Home = () => import('./views/Home.vue')
const About = () => import('./views/About.vue')
const Work = () => import('./views/Work.vue')
const Services = () => import('./views/Services.vue')
const Contact = () => import('./views/Contact.vue')
const Faq = () => import('./views/Faq.vue')

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/About', name: 'About', component: About },
  { path: '/Work', name: 'Work', component: Work },
  { path: '/Services', name: 'Services', component: Services },
  { path: '/Contact', name: 'Contact', component: Contact },
  { path: '/Faq', name: 'Faq', component: Faq }
]

const router = createRouter({ history: createWebHistory(), routes })
const app = createApp(App)

app.use(router) 
app.use(globalData) 
app.mount('#app')
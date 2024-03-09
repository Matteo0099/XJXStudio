<script setup>
import Foot from './components/Footer.vue';
import { VuePreloader } from 'vue-preloader';
import '../node_modules/vue-preloader/dist/style.css'
import { ref } from 'vue';
const showAnimation = ref(true);
</script>

<template>
  <div id="app" class="overflow-x-hidden font-nunito">
    <!-- preloader -->
    <VuePreloader class="z-[999] fixed inset-0 m-auto" background-color="#000" color="#ffffff" transition-type="fade-up" :loading-speed="25"
      :transition-speed="1400" @loading-is-over="showAnimation = false" @transition-is-over="transitionIsOver">
      <template v-slot="{ percent, color }">
        <transition name="loading-animation" mode="in-out">
          <span v-if="showAnimation" :style="{ color }" class="text-xl sm:text-2xl xl:text-3xl font-mono font-black">
            {{ percent }} %
          </span>
        </transition>
      </template>
    </VuePreloader>
    <!-- main page -->
    <main class="main-content min-h-screen font-nunito">
      <video src="/video/video_sito_compressed.mp4" id="myVideo" autoplay="true" loop="true" muted="muted"
        playsinline="playsinline"> <!--autoplay-->
      </video>
      <div class="bg-hero"></div>
      <!-- (fake) navigation -->
      <div class="w-full sticky top-0 left-0 right-0 z-[99] max-h-20 min-h-[40px] h-full bg-accent p-0">
        <nav class="fakeNav py-1.5 flex justify-start items-center">
          <div class="social-wrap flex ml-5 gap-3 text-sm">
            <a href="https://www.instagram.com/xjxvisuals/" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler hover:opacity-70 icon-tabler-brand-instagram" width="18" height="18"
                viewBox="0 0 24 24" stroke-width="1.9" stroke="#fefefe" fill="none" stroke-linecap="round"
                stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" fill="#fefefe" />
                <path d="M16.5 7.5l0 .01" fill="#fefefe" />
              </svg>
            </a>
            <a href="" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler hover:opacity-70 icon-tabler-brand-facebook"
                width="18" height="18" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fefefe" fill="none"
                stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" fill="#fefefe" />
              </svg>
            </a>
            <a href="" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler hover:opacity-70 icon-tabler-brand-youtube-filled" width="18" height="18"
                viewBox="0 0 24 24" stroke-width="1.5" stroke="#fefefe" fill="none" stroke-linecap="round"
                stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M18 3a5 5 0 0 1 5 5v8a5 5 0 0 1 -5 5h-12a5 5 0 0 1 -5 -5v-8a5 5 0 0 1 5 -5zm-9 6v6a1 1 0 0 0 1.514 .857l5 -3a1 1 0 0 0 0 -1.714l-5 -3a1 1 0 0 0 -1.514 .857z"
                  stroke-width="0" fill="#fefefe" />
              </svg>
            </a>
            <a href="" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler hover:opacity-70 icon-tabler-brand-tiktok-filled" width="18" height="18"
                viewBox="0 0 24 24" stroke-width="1.5" stroke="#fefefe" fill="none" stroke-linecap="round"
                stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M16.083 2h-4.083a1 1 0 0 0 -1 1v11.5a1.5 1.5 0 1 1 -2.519 -1.1l.12 -.1a1 1 0 0 0 .399 -.8v-4.326a1 1 0 0 0 -1.23 -.974a7.5 7.5 0 0 0 1.73 14.8l.243 -.005a7.5 7.5 0 0 0 7.257 -7.495v-2.7l.311 .153c1.122 .53 2.333 .868 3.59 .993a1 1 0 0 0 1.099 -.996v-4.033a1 1 0 0 0 -.834 -.986a5.005 5.005 0 0 1 -4.097 -4.096a1 1 0 0 0 -.986 -.835z"
                  stroke-width="0" fill="#fefefe" />
              </svg>
            </a>
          </div>
          <div class="message w-[80%] text-center">
            <h1>PLEASE NOTE: some periods of the year i'm not avaible!</h1>
          </div>
        </nav>
      </div>
      <!-- TRUE NAV -->
      <div class="w-full mx-auto sticky z-[99]">
        <nav class="flex justify-between z-[999] items-center pt-4 w-full mx-auto">
          <div class="ml-1 sm:ml-6">
            <RouterLink to="/" class="flex justify-center items-center gap-4 font-mono text-2xl" alt="logo">
              <img src="/logo.jpeg" alt="Logo" title="XJXVISUALS" role="img" aria-label="image" class=" max-w-10 block" />
              <span class="font-black m-0 italic text-3xl uppercase">XJXSTUDIOS</span>
            </RouterLink>
          </div>
          <div class="hamburger cursor-pointer mr-1 sm:mr-6" @click="openNav">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu" width="32" height="32"
              viewBox="0 0 24 24" stroke-width="1.5" stroke="#fefefe" fill="none" stroke-linecap="round"
              stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 8l16 0" />
              <path d="M4 16l16 0" />
            </svg>
          </div>
        </nav>
      </div>
      <!-- for content of the page -->
      <router-view v-slot="{ Component, route }">
        <div :key="route.name" class="min-h-screen max-w-full overflow-x-hidden">
          <component :is="Component"></component>
        </div>
      </router-view>
    </main>
    <!-- list of the navigation -->
    <div class="nav-list font-nunito" ref="navList">
      <!-- hamburger 2 (x) -->
      <div class="close-open hidden cursor-pointer" @click="openNav">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="32" height="32"
          viewBox="0 0 24 24" stroke-width="1.5" stroke="#000" fill="none" stroke-linecap="round"
          stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M18 6l-12 12" />
          <path d="M6 6l12 12" />
        </svg>
      </div>
      <div class="inner-wrap">
        <ul class="gap-4 hidden" ref="listNav">
          <li>
            <RouterLink class="hover:underline hover:text-gray-50 transition-colors" to="/" @click="openNav">Home
            </RouterLink>
          </li>
          <li>
            <RouterLink class="hover:underline hover:text-gray-50 transition-colors" to="/About" @click="openNav">About
            </RouterLink>
          </li>
          <li>
            <RouterLink class="hover:underline hover:text-gray-50 transition-colors" to="/Work" @click="openNav">Work
            </RouterLink>
          </li>
          <li>
            <RouterLink class="hover:underline hover:text-gray-50 transition-colors" to="/Services" @click="openNav">
              Services</RouterLink>
          </li>
          <li>
            <RouterLink class="hover:underline hover:text-gray-50 transition-colors" to="/Contact" @click="openNav">
              Contact</RouterLink>
          </li>
        </ul>
      </div>
      <div class="social-wrap hidden">
        <a href="" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-instagram" width="22"
            height="22" viewBox="0 0 24 24" stroke-width="1.9" stroke="#202321" fill="none" stroke-linecap="round"
            stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
            <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" fill="#202321" />
            <path d="M16.5 7.5l0 .01" fill="#202321" />
          </svg>
        </a>
        <a href="" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-facebook" width="22"
            height="22" viewBox="0 0 24 24" stroke-width="1.5" stroke="#202321" fill="none" stroke-linecap="round"
            stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" fill="#202321" />
          </svg>
        </a>
        <a href="" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-youtube-filled" width="22"
            height="22" viewBox="0 0 24 24" stroke-width="1.5" stroke="#202321" fill="none" stroke-linecap="round"
            stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
              d="M18 3a5 5 0 0 1 5 5v8a5 5 0 0 1 -5 5h-12a5 5 0 0 1 -5 -5v-8a5 5 0 0 1 5 -5zm-9 6v6a1 1 0 0 0 1.514 .857l5 -3a1 1 0 0 0 0 -1.714l-5 -3a1 1 0 0 0 -1.514 .857z"
              stroke-width="0" fill="#202321" />
          </svg>
        </a>
        <a href="" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-tiktok-filled" width="22"
            height="22" viewBox="0 0 24 24" stroke-width="1.5" stroke="#202321" fill="none" stroke-linecap="round"
            stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
              d="M16.083 2h-4.083a1 1 0 0 0 -1 1v11.5a1.5 1.5 0 1 1 -2.519 -1.1l.12 -.1a1 1 0 0 0 .399 -.8v-4.326a1 1 0 0 0 -1.23 -.974a7.5 7.5 0 0 0 1.73 14.8l.243 -.005a7.5 7.5 0 0 0 7.257 -7.495v-2.7l.311 .153c1.122 .53 2.333 .868 3.59 .993a1 1 0 0 0 1.099 -.996v-4.033a1 1 0 0 0 -.834 -.986a5.005 5.005 0 0 1 -4.097 -4.096a1 1 0 0 0 -.986 -.835z"
              stroke-width="0" fill="#202321" />
          </svg>
        </a>
      </div>
    </div>
    <!-- FOOTER -->
    <Foot></Foot>
    <!-- loader -->
    <div class="slide-out" ref="slideOut"></div>
  </div>
</template>

<script>
export default {
  methods: {
    openNav() {
      this.$refs.listNav.classList.toggle('openDisplay');
      this.$refs.listNav.classList.toggle('hidden');
      this.$refs.listNav.classList.toggle('fullOpen');
      this.$refs.navList.classList.toggle('open');
      this.$refs.slideOut.classList.toggle('openSlide');
      document.querySelector('body').classList.toggle('overflow-hidden');
      document.querySelector('.main-content').classList.toggle('open');
    }
  },
  mounted() {
    // video check (safari, iphone, EDGE EI7+)
    var video = document.querySelector("#myVideo");
    video.controls = false;

    if (!video) {
      video = document.createElement('video');
      video.src = './public/video/impennata2.MP4';
      video.loop = true;
      video.addEventListener('playing', paintVideo);
      console.log("not work");
    }
    else if (video == null || video == ErrorEvent) {
      /* second check */
      var bgvideo = document.getElementById("video");
      bgvideo.muted = true;
      bgvideo.loop = true;
      bgvideo.playsinline = true;
      bgvideo.play();
    }
    else console.log("works.")
    //nothing, it works.
    video.play();
  }
}
</script>
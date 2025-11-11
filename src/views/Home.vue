<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="min-h-screen w-full flex flex-col">
    <div class="container w-full h-full min-h-screen flex mt-6 justify-center flex-col mx-auto">
      <!-- HERO PAGE -->
      <div class="min-h-screen h-full">
        <div class="content max-w-4xl mx-auto">
          <h1 class="font-black title-raduno mb-3 uppercase">OUR PRODUCTIONS</h1>
          <p class="font-regular text-lg max-w-3xl my-4">
            "Checkout last video of the Scarbmafia's raduno"
          </p>
          <a href="https://www.instagram.com/xjxvisuals/" target="_blank" class="link-insta">
            <button id="myBtn" class="flex justify-center items-center gap-2 text-sm mt-6 py-3 px-4">
              VIEW VIDEO
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-right-bar" width="28"
                height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#202123" fill="none" stroke-linecap="round"
                stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M18 15l3 -3l-3 -3" />
                <path d="M3 12h18" />
                <path d="M3 9v6" />
              </svg>
            </button>
          </a>
        </div>

        <!-- freccia per andare giù -->
        <a href="#down" class="down-arrow">
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor"
            class="bi bi-arrow-down-circle" viewBox="0 0 16 16">
            <path fill-rule="evenodd"
              d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293z" />
          </svg>
        </a>

        <!-- scroller horizontal -->
        <!-- <div class="scroll imgBox" style="--time:100s">
          <div>
            <img src="/logo_2.png" role="img" title="logo XJXSTUDIS" alt="Image">
            <img src="/logo_2.png" role="img" title="logo XJXSTUDIS" alt="Image">
            <img src="/logo_2.png" role="img" title="logo XJXSTUDIS" alt="Image">
            <img src="/logo_2.png" role="img" title="logo XJXSTUDIS" alt="Image">
            <img src="/logo_2.png" role="img" title="logo XJXSTUDIS" alt="Image">
            <img src="/logo_2.png" role="img" title="logo XJXSTUDIS" alt="Image">
            <img src="/logo_2.png" role="img" title="logo XJXSTUDIS" alt="Image">
            <img src="/logo_2.png" role="img" title="logo XJXSTUDIS" alt="Image">
            <img src="/logo_2.png" role="img" title="logo XJXSTUDIS" alt="Image">
            <img src="/logo_2.png" role="img" title="logo XJXSTUDIS" alt="Image">
            <img src="/logo_2.png" role="img" title="logo XJXSTUDIS" alt="Image">
            <img src="/logo_2.png" role="img" title="logo XJXSTUDIS" alt="Image">
            <img src="/logo_2.png" role="img" title="logo XJXSTUDIS" alt="Image">
            <img src="/logo_2.png" role="img" title="logo XJXSTUDIS" alt="Image">
            <img src="/logo_2.png" role="img" title="logo XJXSTUDIS" alt="Image">
            <img src="/logo_2.png" role="img" title="logo XJXSTUDIS" alt="Image">
            <img src="/logo_2.png" role="img" title="logo XJXSTUDIS" alt="Image">
            <img src="/logo_2.png" role="img" title="logo XJXSTUDIS" alt="Image">
          </div>
          <div>
            <img src="/logo_2.png" role="img" title="logo XJXSTUDIS" alt="Image">
            <img src="/logo_2.png" role="img" title="logo XJXSTUDIS" alt="Image">
            <img src="/logo_2.png" role="img" title="logo XJXSTUDIS" alt="Image">
            <img src="/logo_2.png" role="img" title="logo XJXSTUDIS" alt="Image">
            <img src="/logo_2.png" role="img" title="logo XJXSTUDIS" alt="Image">
            <img src="/logo_2.png" role="img" title="logo XJXSTUDIS" alt="Image">
            <img src="/logo_2.png" role="img" title="logo XJXSTUDIS" alt="Image">
            <img src="/logo_2.png" role="img" title="logo XJXSTUDIS" alt="Image">
            <img src="/logo_2.png" role="img" title="logo XJXSTUDIS" alt="Image">
            <img src="/logo_2.png" role="img" title="logo XJXSTUDIS" alt="Image">
            <img src="/logo_2.png" role="img" title="logo XJXSTUDIS" alt="Image">
            <img src="/logo_2.png" role="img" title="logo XJXSTUDIS" alt="Image">
            <img src="/logo_2.png" role="img" title="logo XJXSTUDIS" alt="Image">
            <img src="/logo_2.png" role="img" title="logo XJXSTUDIS" alt="Image">
            <img src="/logo_2.png" role="img" title="logo XJXSTUDIS" alt="Image">
            <img src="/logo_2.png" role="img" title="logo XJXSTUDIS" alt="Image">
            <img src="/logo_2.png" role="img" title="logo XJXSTUDIS" alt="Image">
            <img src="/logo_2.png" role="img" title="logo XJXSTUDIS" alt="Image">
          </div>
        </div> -->
      </div>

      <!-- content of all the home -->
      <div class="container sticky w-full max-w-4xl px-4 mt-24 mx-auto flex flex-col justify-center items-center">
        <div class="relative min-h-screen w-full" id="down"> <!--scroll down THERE-->
          <!-- LITTLE PREVIEW OF WORKS -->
          <h1 class="text-2xl sm:text-3xl font-black">
            PREVIOUS PRODUCTIONS:
          </h1>
          <!-- Slider main container -->
          <swiper :navigation="true" :modules="modules" class="mySwiper">
            <swiper-slide>Slide 1</swiper-slide>
            <swiper-slide>Slide 2</swiper-slide><swiper-slide>Slide 3</swiper-slide>
            <swiper-slide>Slide 4</swiper-slide><swiper-slide>Slide 5</swiper-slide>
            <swiper-slide>Slide 6</swiper-slide><swiper-slide>Slide 7</swiper-slide>
            <swiper-slide>Slide 8</swiper-slide><swiper-slide>Slide 9</swiper-slide>
          </swiper>
          <!-- 1 (2/4) -->
          <!-- <div class="card h-full gap-4 flex flex-wrap sm:flex-nowrap w-full">
            <div class="three p-1 w-full border-2 relative border-neutral-100 my-2 bg-neutral-900">
              <h1 class="absolute left-[44%] top-[44%] title3 z-50 font-black text-lg sm:text-xl">Project 3</h1>
              <div style="padding:56.25% 0 0 0;position:relative;"><iframe
                  src="https://player.vimeo.com/video/913494561?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                  frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                  style="position:absolute;top:0;left:0;width:100%;height:100%;"
                  title="raduno fine estate 2023"></iframe></div>
            </div>
          </div> -->
          <!-- 2 (4/4)-->
          <!-- <div class="card h-full gap-4 flex flex-wrap sm:flex-nowrap w-full">
            <div class="one p-1 w-full border-2 relative border-neutral-100 my-2 bg-neutral-900">
              <h1 class="absolute left-[44%] top-[44%] title1 z-50 font-black text-lg sm:text-xl">Project 1</h1>
              <div style="padding:56.25% 0 0 0;position:relative;"><iframe
                  src="https://player.vimeo.com/video/918418613?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                  frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                  style="position:absolute;top:0;left:0;width:100%;height:100%;"
                  title="SCRAPPED official first meet"></iframe></div>
            </div>
            <div class="two p-1 w-full border-2 relative border-neutral-100 my-2 bg-neutral-900">
              <h1 class="absolute left-[44%] top-[44%] title2 z-50 font-black text-lg sm:text-xl">Project 2</h1>
              <div style="padding:56.25% 0 0 0;position:relative;"><iframe
                  src="https://player.vimeo.com/video/900183605?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                  frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                  style="position:absolute;top:0;left:0;width:100%;height:100%;"
                  title="kendama sposored video"></iframe></div>
            </div>
          </div> -->
        </div>

        <div class="relative min-h-screen w-full">
          <!-- SERVICES -->
          <div class="container mx-auto mt-8 mb-24">
            <h1 class=" text-2xl sm:text-3xl font-black">
              DO YOU WANT A PROJECT FOR YOU?
            </h1>
            <!-- EMAIL -->
            <form ref="form">  <!--@submit.prevent="sendEmail"-->
              <label>Name</label>
              <input type="text" name="user_name">
              <label>Email</label>
              <input type="email" name="user_email">
              <label>Message</label>
              <textarea name="message"></textarea>
              <input type="submit" value="Send">
            </form>
          </div>
        </div>

        <div class="relative min-h-screen w-full">
          <!-- CONTACT -->
          <div class="container mx-auto mt-48 mb-24">
            <h1 class=" text-2xl sm:text-3xl font-black">GET IN TOUCH!</h1>
            <div class="flex justify-between items-center flex-wrap sm:flex-nowrap mt-8 w-full max-w-[290px] mb-16">
              <a href="mailto:">
                <button id="myBtn" class="py-4 min-w-full flex justify-center items-center gap-2 font-black uppercase">
                  email
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mail-filled" width="28"
                    height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none"
                    stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path
                      d="M22 7.535v9.465a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-9.465l9.445 6.297l.116 .066a1 1 0 0 0 .878 0l.116 -.066l9.445 -6.297z"
                      stroke-width="0" fill="currentColor" />
                    <path
                      d="M19 4c1.08 0 2.027 .57 2.555 1.427l-9.555 6.37l-9.555 -6.37a2.999 2.999 0 0 1 2.354 -1.42l.201 -.007h14z"
                      stroke-width="0" fill="currentColor" />
                  </svg>
                </button>
              </a>
              <a href="tel:+39" itemscope itemtype="http://schema.org/LocalBusiness">
                <button id="myBtn" itemprop="telephone"
                  class="sm:ml-4 mt-4 sm:mt-0 py-4 min-w-full flex justify-center items-center gap-2 font-black uppercase w-[115%]">
                  phone number
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-device-mobile-message"
                    width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none"
                    stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M11 3h10v8h-3l-4 2v-2h-3z" />
                    <path d="M15 16v4a1 1 0 0 1 -1 1h-8a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1h2" />
                    <path d="M10 18v.01" />
                  </svg>
                </button>
              </a>
            </div>
            <!-- socials -->
            <h1 class=" text-lg sm:text-xl font-black mt-4">Socials: </h1>
            <div class="social-wrap flex gap-3 text-sm mt-2">
              <a href="https://www.instagram.com/xjxvisuals/" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler hover:opacity-70 icon-tabler-brand-instagram" width="36" height="36"
                  viewBox="0 0 24 24" stroke-width="1.9" stroke="#fefefe" fill="none" stroke-linecap="round"
                  stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                  <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" fill="#fefefe" />
                  <path d="M16.5 7.5l0 .01" fill="#fefefe" />
                </svg>
              </a>
              <a href="" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler hover:opacity-70 icon-tabler-brand-facebook" width="36" height="36"
                  viewBox="0 0 24 24" stroke-width="1.5" stroke="#fefefe" fill="none" stroke-linecap="round"
                  stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" fill="#fefefe" />
                </svg>
              </a>
              <a href="" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler hover:opacity-70 icon-tabler-brand-youtube-filled" width="36" height="36"
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
                  class="icon icon-tabler hover:opacity-70 icon-tabler-brand-tiktok-filled" width="36" height="36"
                  viewBox="0 0 24 24" stroke-width="1.5" stroke="#fefefe" fill="none" stroke-linecap="round"
                  stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path
                    d="M16.083 2h-4.083a1 1 0 0 0 -1 1v11.5a1.5 1.5 0 1 1 -2.519 -1.1l.12 -.1a1 1 0 0 0 .399 -.8v-4.326a1 1 0 0 0 -1.23 -.974a7.5 7.5 0 0 0 1.73 14.8l.243 -.005a7.5 7.5 0 0 0 7.257 -7.495v-2.7l.311 .153c1.122 .53 2.333 .868 3.59 .993a1 1 0 0 0 1.099 -.996v-4.033a1 1 0 0 0 -.834 -.986a5.005 5.005 0 0 1 -4.097 -4.096a1 1 0 0 0 -.986 -.835z"
                    stroke-width="0" fill="#fefefe" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <!-- footer in the app.vue -->
      </div>
    </div>
  </div>
</template>

<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';

  import 'swiper/css/navigation';

  // import required modules
  import { Navigation } from 'swiper/modules';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [Navigation],
      };
    },
  };
</script>
<template>
  <div class="container z-50 sticky w-full max-w-4xl px-4 mt-24 mx-auto flex flex-col justify-center items-center">
    <h1 class="text-2xl md:text-3xl font-black">Works</h1>

    <!-- grid with all works -->
    <!-- 1 (2/4) -->
    <div class="card h-full gap-4 mt-10 flex flex-wrap sm:flex-nowrap w-full">
      <div class="one p-1 w-full border-2 relative border-neutral-100 my-2 bg-neutral-900">
        <h1 class="absolute left-[44%] top-[44%] title1 z-50 font-black text-lg sm:text-xl">Title 1</h1>
        <!-- <img src="/logo_2.png" width="250" height="250" /> -->
        <video src="/video/video_sito_compressed.mp4" class="opacity-40 hover:opacity-100 transition-opacity video1"
          autoplay="true" loop="true" muted="muted" playsinline="playsinline">
        </video>
      </div>
      <div class="two p-1 w-full border-2 relative border-neutral-100 my-2 bg-neutral-900">
        <h1 class="absolute left-[44%] top-[44%] title2 z-50 font-black text-lg sm:text-xl">Title 2</h1>
        <video src="/video/video_sito_compressed.mp4" class="opacity-40 hover:opacity-100 transition-opacity video2"
          autoplay="true" loop="true" muted="muted" playsinline="playsinline">
        </video>
      </div>
    </div>
    <!-- 2 (4/4)-->
    <div class="card h-full gap-4 flex flex-wrap sm:flex-nowrap w-full">
      <div class="three p-1 w-full border-2 relative border-neutral-100 my-2 bg-neutral-900">
        <h1 class="absolute left-[44%] top-[44%] title3 z-50 font-black text-lg sm:text-xl">Title 3</h1>
        <video src="/video/video_sito_compressed.mp4" class="opacity-40 hover:opacity-100 transition-opacity video3"
          autoplay="true" loop="true" muted="muted" playsinline="playsinline">
        </video>
      </div>
      <div class="four p-1 w-full border-2 relative border-neutral-100 my-2 bg-neutral-900">
        <h1 class="absolute left-[44%] top-[44%] title4 z-50 font-black text-lg sm:text-xl">Title 4</h1>
        <video src="/video/video_sito_compressed.mp4" class="opacity-40 hover:opacity-100 transition-opacity video4"
          autoplay="true" loop="true" muted="muted" playsinline="playsinline">
        </video>
      </div>
    </div>
  </div>
</template>

<script>
</script>
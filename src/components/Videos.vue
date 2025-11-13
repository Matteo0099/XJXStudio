<script setup>
const videos = [
  {
    id: 1,
    title: "Video 1",
    thumbnail: "/video/copertine_projects/1.jpeg",
    url: "https://player.vimeo.com/video/1092841778?h=9c116489cb"
  },
  {
    id: 2,
    title: "Video 2",
    thumbnail: "/video/copertine_projects/2.jpeg",
    url: "https://player.vimeo.com/video/1099415862?h=a96f8bcc38"
  },
  {
    id: 3,
    title: "Video 3",
    thumbnail: "/video/copertine_projects/3.jpeg",
    url: "https://player.vimeo.com/video/1068568004?h=497c4dbaa1"
  },
  {
    id: 4,
    title: "Video 4",
    thumbnail: "/video/copertine_projects/4.jpeg",
    url: "https://player.vimeo.com/video/1084361085?h=7f247a0b7e"
  },
  {
    id: 5,
    title: "Video 5",
    thumbnail: "/video/copertine_projects/5.jpeg",
    url: "https://player.vimeo.com/video/1075833312?h=4332fba3ee"
  },
  {
    id: 6,
    title: "Video 6",
    thumbnail: "/video/copertine_projects/6.jpeg",
    url: "https://player.vimeo.com/video/1130581740?h=6117c62f30"
  },
  {
    id: 7,
    title: "Video 7",
    thumbnail: "/video/copertine_projects/7.jpeg",
    url: "https://player.vimeo.com/video/1130582373?h=f2cbf7688e"
  }
]

function scrollToVideo(id) {
  const element = document.getElementById(`video-${id}`)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <div class="container-xl text-neutral-50 mt-3">

    <!-- Collage di immagini -->
    <div class="grid grid-cols-1 sm:grid-cols-2 w-full h-full md:grid-cols-3 gap-4">
      <div
        v-for="video in videos"
        :key="video.id"
        class="cursor-pointer hover:opacity-80 transition"
        @click="scrollToVideo(video.id)"
      >
        <!-- wrapper con aspect ratio -->
        <div class="aspect-[16/9] w-full overflow-hidden rounded-lg shadow-md">
          <img
            :src="video.thumbnail"
            :alt="video.title"
            class="w-full h-full object-cover"
          />
        </div>
      </div>
      <h1 class="text-2xl pl-8 my-auto">...WORK IN PROGRESS</h1>
    </div>

    <!-- Sezione video -->
    <div class="mt-10 space-y-10">
      <div
        v-for="video in videos"
        :key="'video-' + video.id"
        :id="'video-' + video.id"
        class="p-4 border rounded-lg shadow"
      >
        <h2 class="text-lg font-semibold mb-2">{{ video.title }}</h2>
        <iframe
          class="w-full aspect-video rounded-lg"
          :src="video.url"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  created() {
    var scripts = [
      "https://player.vimeo.com/api/player.js",
      "js/local.js"
    ];
    scripts.forEach(script => {
      let tag = document.createElement("script");
      tag.setAttribute("src", script);
      document.head.appendChild(tag);
    });
  }
}
</script>
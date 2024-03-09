<template>
  <div>
    <!-- grid with all works -->
    <!-- 1 (1 /4) -->
    <div class="card h-full gap-4 mt-12 flex flex-wrap sm:flex-nowrap w-full">
      <div
        class="one p-1 w-full flex flex-col md:flex-row justify-between max-w-4xl mx-auto border-2 relative border-neutral-100 my-2 bg-neutral-900">
        <div class="w-1/2 flex flex-col justify-start items-center">
          <h1 class="z-50 font-black text-lg sm:text-xl my-2">Project 1</h1>
          <p class="font-sans font-light text-md md:text-lg px-2 my-2">Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Cum iusto temporibus autem, nihil molestiae ratione ullam quis suscipit repudiandae, neque
            cumque, omnis hic assumenda iste amet maxime aliquid optio ut.</p>
        </div>
        <div class="w-1/2 flex flex-col justify-center items-center pr-2">
          <div style="position:relative;"><iframe
            src="https://player.vimeo.com/video/913494561?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
            style="width:100%;height:100%;" title="raduno fine estate 2023"></iframe>
        </div>
        </div>
      </div>
    </div>
    <!-- 2 (2/4)-->
    <div class="card h-full mt-32 gap-4 flex flex-wrap sm:flex-nowrap w-full">
      <div
        class="one p-1 w-full flex flex-col md:flex-row justify-between max-w-4xl mx-auto border-2 relative border-neutral-100 my-2 bg-neutral-900">
        <div class="w-1/2 flex flex-col justify-center items-center pr-2">
          <div style="position:relative;"><iframe
              src="https://player.vimeo.com/video/900183605?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
              frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
              style="width:100%;height:100%;" title="kendama sposored video"></iframe>
          </div>
        </div>
        <div class="w-1/2 flex flex-col justify-start items-center">
          <h1 class="z-50 font-black text-lg sm:text-xl my-2">Project 2</h1>
          <p class="font-sans font-light text-md md:text-lg px-2 my-2">Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Cum iusto temporibus autem, nihil molestiae ratione ullam quis suscipit repudiandae, neque
            cumque, omnis hic assumenda iste amet maxime aliquid optio ut.</p>
        </div>
      </div>
    </div>
    <!-- 3 (3/4) -->
    <div class="card h-full gap-4 mt-32 flex flex-wrap sm:flex-nowrap w-full">
      <div
        class="one p-1 w-full flex flex-col md:flex-row justify-between max-w-4xl mx-auto border-2 relative border-neutral-100 my-2 bg-neutral-900">
        <div class="w-1/2 flex flex-col justify-start items-center">
          <h1 class="z-50 font-black text-lg sm:text-xl my-2">Project 3</h1>
          <p class="font-sans font-light text-md md:text-lg px-2 my-2">Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Cum iusto temporibus autem, nihil molestiae ratione ullam quis suscipit repudiandae, neque
            cumque, omnis hic assumenda iste amet maxime aliquid optio ut.</p>
        </div>
        <div class="w-1/2 flex flex-col justify-center items-center pr-2">
          <div style="position:relative;"><iframe
              src="https://player.vimeo.com/video/918418613?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
              frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
              style="width:100%;height:100%;" title="kendama sposored video"></iframe>
          </div>
        </div>
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
<template>
  <div class="absolute left-0 w-full text-center h-[200px]"> 
    <footer class="footer mt-16 w-full absolute left-0 right-0 h-full flex flex-col min-h-[170px] bg-neutral-950"> 
      <h1 class="w-full text-2xl sm:text-3xl font-black mt-12 accent uppercase">
        Francesco Versace 
      </h1>
      <span class="font-thin italic mt-2 mb-5 text-md sm:text-lg">videomaker</span>
      <p>all rights reserved &copy; <span class="year"></span></p>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return 
  }, 
  mounted() {
    const date = new Date();  
    document.querySelector('.year').innerHTML = date.getFullYear();
  }
}
</script>
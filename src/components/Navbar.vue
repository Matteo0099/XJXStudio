<script setup>
</script>

<template>
  <div class="w-full mx-auto">
    <nav class="flex justify-between items-center w-full mx-auto border-2">
      <div class="w-full sm:ml-4">
        <RouterLink to="/" class="font-mono text-2xl" alt="logo"><span class="font-bold">XJXSTUDIOS</span></RouterLink>
      </div>
      <div class="hamburger cursor-pointer" @click="openNav">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <path d="M4 8l16 0" />
          <path d="M4 16l16 0" />
        </svg>
      </div>
      <ul class="gap-4 hidden" ref="listNav">
        <li><RouterLink to="/About">About</RouterLink></li>
        <li><RouterLink to="">Work</RouterLink></li>
        <li><RouterLink to="">Services</RouterLink></li>
        <li><RouterLink to="">Contact</RouterLink></li>
      </ul>
    </nav>
  </div>
</template>

<script>
  import { RouterLink } from 'vue-router';
  export default {
    data() {
      return 
    },
    methods: {
      openNav() {
        this.$refs.listNav.classList.toggle('flex')
        this.$refs.listNav.classList.toggle('hidden')
        this.$refs.listNav.classList.toggle('fullOpen')
      }
    },
  }
</script>
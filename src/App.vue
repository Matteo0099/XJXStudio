<script setup>
  import Navbar from './components/Navbar.vue';
</script>

<template>
  <div id="app">
    <!-- main page -->
    <main>
      <!-- navigation -->
      <Navbar></Navbar>
      <!-- for content of the page -->
      <router-view v-slot="{ Component, route }">
        <div :key="route.name" class="max-w-full overflow-x-hidden">  
          <component :is="Component"></component>
        </div>
      </router-view>
    </main>
  </div>
</template>
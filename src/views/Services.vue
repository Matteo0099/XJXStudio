<script setup>
import { inject } from 'vue'
const globalData = inject('globalData')
</script>

<template>
  <div class="relative z-[999] min-h-screen w-full flex items-center justify-center">
    <!-- SERVICES -->
    <div class="container mx-auto mt-16 mb-3 pb-24">
      <h1 class="text-2xl sm:text-4xl md:text-5xl title text-neutral-50 w-fit mx-auto mb-12">
        DO YOU WANT A PROJECT FOR YOU?
      </h1>
      <!-- EMAIL FORM -->
      <form id="form" ref="form" @submit.prevent="sendEmail"
        class="mx-auto bg-white text-black p-8 rounded-2xl shadow-lg w-full max-w-[567px] space-y-5">
        <div class="field flex flex-col">
          <label for="email" class="font-semibold mb-1">Email</label>
          <input type="email" name="email" id="email" v-model="email" required placeholder="mario.rossi@email.com"
            class="border border-neutral-400 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-red-400" />
        </div>

        <div class="field flex flex-col">
          <label for="title" class="font-semibold mb-1">Title</label>
          <input type="text" name="title" id="title" v-model="title" required placeholder="Project title"
            class="border border-neutral-400 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-red-400" />
        </div>

        <div class="field flex flex-col">
          <label for="name" class="font-semibold mb-1">Name</label>
          <input type="text" name="name" id="name" v-model="name" required placeholder="Mario Rossi"
            class="border border-neutral-400 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-red-400" />
        </div>

        <div class="field flex flex-col">
          <label for="phone" class="font-semibold mb-1">Phone</label>
          <input type="tel" name="phone" id="phone" v-model="phone" required placeholder="+39 333 1234567"
            class="border border-neutral-400 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-red-400" />
        </div>

        <div class="field hidden">
          <label for="time" class="font-semibold mb-1">Time</label>
          <input type="text" name="time" id="time" v-model="time" readonly
            class="border border-neutral-400 rounded-lg p-2 bg-neutral-100 cursor-not-allowed text-neutral-600" />
        </div>

        <div class="field flex flex-col">
          <label for="message" class="font-semibold mb-1">Message</label>
          <input type="text" name="message" id="message" v-model="message" required
            placeholder="Tell us about your project..."
            class="border border-neutral-400 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-red-400" />
        </div>

        <!-- Submit Button -->
        <input type="submit" id="button" :value="sending ? 'Sending...' : sent ? 'Sent ✅' : 'Send Email'" :class="[
          'w-full py-3 text-lg font-bold rounded-lg transition duration-300 cursor-pointer',
          sending ? 'bg-red-400 text-white' : sent ? 'bg-green-500 text-white' : 'bg-red-600 text-white hover:bg-red-700'
        ]" :disabled="sending" />
      </form>
    </div>
  </div>
</template>
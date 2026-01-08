<<<<<<< Updated upstream
<<<<<<< Updated upstream
<template>
    <div class="z-[999] flex justify-center items-center relative text-white mt-24 flex-col">
        <h1 class="text-2xl">Faq: Domande frequenti</h1>
        <div>
            <ul class="list-item list-disc ml-2 mt-2">
                <li v-for="(faq, index) in faqs" :key="index">
                    <strong>{{ index + 1 }}. {{ faq.domanda }}</strong>
                    <p>{{ faq.risposta }}</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FaqComponent',
    data() {
        return {
            faqs: [
                {
                    domanda: "Qual è l'orario di apertura?",
                    risposta: "Siamo aperti dal lunedì al venerdì dalle 9:00 alle 18:00."
                },
                {
                    domanda: "Come posso contattarvi?",
                    risposta: "Puoi contattarci via email all'indirizzo info@esempio.com o al numero 0123456789."
                }
                //
            ]
        }
    }
}
</script>
=======
=======
>>>>>>> Stashed changes
<script setup>
import { ref } from 'vue'

// Definizione delle FAQ con domande vuote
const faqs = ref([
  {
    question: 'Se volessi sapere esattamente il costo per un progetto come faccio?',
    answer: 'Contattami tramite il form dalla pagina principale.',
    isOpen: false
  },
  {
    question: 'Si può usare il brano di un mio producer per il video?',
    answer: 'Certo, a patto che la traccia sia in alta qualità e rispetti il timing e il contesto.',
    isOpen: false
  },
  {
    question: 'I video in che risoluzione vengono girati?',
    answer: 'I video che registro sono in 4k@60fps in formato senza perdita di qualità.',
    isOpen: false
  },
  {
    question: 'In caso volessi aggiungere altre persone al progetto?',
    answer: 'Sì può, però bisogna che siano disposte ad essere filmate.',
    isOpen: false
  }
])

// Funzione per aprire/chiudere le FAQ
const toggleFaq = (index) => {
  faqs.value[index].isOpen = !faqs.value[index].isOpen
}

// Funzioni per aprire/chiudere tutte le FAQ
const openAll = () => {
  faqs.value.forEach(faq => faq.isOpen = true)
}

const closeAll = () => {
  faqs.value.forEach(faq => faq.isOpen = false)
}
</script>

<template>
  <div class="min-h-screen bg-gradient-to-b from-black to-gray-900 mt-4 flex items-start justify-center p-4">
    <div class="z-[9999] w-full max-w-4xl mx-auto">
      <div class="z-[9999] bg-black border-2 border-red-500 rounded-2xl shadow-2xl overflow-hidden">
        <!-- Header -->
        <div class="p-6 border-b border-red-500 bg-gradient-to-r from-red-900/30 to-red-800/20">
          <h1 class="text-2xl md:text-3xl font-bold text-white text-center mb-2">
            ❓ FAQ - Domande Frequenti
          </h1>
          <p class="text-gray-300 text-center text-sm">
            Clicca sulle domande per visualizzare le risposte
          </p>
          
          <!-- Bottoni controllo -->
          <div class="flex justify-center gap-3 mt-4">
            <button 
              @click="openAll"
              class="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-all duration-200 text-sm font-medium shadow-md hover:shadow-lg"
            >
              Apri Tutto
            </button>
            <button 
              @click="closeAll"
              class="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-all duration-200 text-sm font-medium shadow-md hover:shadow-lg"
            >
              Chiudi Tutto
            </button>
          </div>
        </div>

        <!-- Lista FAQ -->
        <div class="divide-y divide-gray-800">
          <div 
            v-for="(faq, index) in faqs" 
            :key="index" 
            class="transition-all duration-300"
            :class="{
              'bg-red-900/10': faq.isOpen,
              'hover:bg-gray-800/30': !faq.isOpen
            }"
          >
            <!-- Domanda -->
            <div 
              @click="toggleFaq(index)"
              class="p-5 md:p-6 cursor-pointer flex justify-between items-start group"
            >
              <div class="flex-1 pr-4">
                <div class="flex items-start">
                  <span class="inline-flex items-center justify-center w-7 h-7 bg-red-600 text-white rounded-full text-sm font-bold mr-3 mt-1 flex-shrink-0">
                    {{ index + 1 }}
                  </span>
                  <h3 class="text-lg md:text-xl font-semibold text-white group-hover:text-red-300 transition-colors duration-200">
                    <!-- Mostra la domanda se esiste, altrimenti il placeholder -->
                    <span v-if="faq.question" class="text-white">
                      {{ faq.question }}
                    </span>
                    <span v-else class="text-gray-400 italic">
                      [Domanda {{ index + 1 }}]
                    </span>
                  </h3>
                </div>
              </div>
              <div class="flex-shrink-0">
                <span 
                  class="w-8 h-8 flex items-center justify-center rounded-full transition-all duration-300 text-xl font-bold"
                  :class="{
                    'bg-red-600 text-white': faq.isOpen,
                    'bg-gray-800 text-gray-300 group-hover:bg-gray-700': !faq.isOpen
                  }"
                >
                  {{ faq.isOpen ? '−' : '+' }}
                </span>
              </div>
            </div>

            <!-- Risposta (con transizione) -->
            <transition
              name="slide"
              mode="out-in"
            >
              <div 
                v-if="faq.isOpen"
                class="px-5 md:px-6 pb-5 md:pb-6 overflow-hidden"
              >
                <div class="pl-9 border-l-2 border-red-600">
                  <div class="bg-gray-900/50 border border-gray-700 rounded-xl p-5">
                    <!-- Mostra la risposta se esiste, altrimenti il placeholder -->
                    <div class="space-y-4">
                      <p 
                        v-if="faq.answer" 
                        class="text-gray-300 leading-relaxed text-base md:text-lg"
                      >
                        {{ faq.answer }}
                      </p>
                      <div v-else>
                        <p class="text-gray-300 leading-relaxed text-base md:text-lg italic">
                          [Risposta per domanda {{ index + 1 }}]
                        </p>
                        <div class="h-3 bg-gray-700 rounded animate-pulse mt-2"></div>
                        <div class="h-3 bg-gray-700 rounded animate-pulse w-5/6 mt-2"></div>
                        <div class="h-3 bg-gray-700 rounded animate-pulse w-4/6 mt-2"></div>
                      </div>
                    </div>
                    <div class="mt-4 pt-4 border-t border-gray-700">
                      <span class="text-sm text-red-400 font-medium">
                        ℹ️ {{ faq.answer ? 'Hai altre domande?' : 'Inserisci qui la tua risposta' }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </transition>
          </div>
        </div>

        <!-- Footer -->
        <div class="p-5 border-t border-gray-800 bg-gray-900/50">
          <p class="text-center text-gray-400 text-sm">
            Se hai altro da chiedere fallo tramite i miei canali social!
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Animazioni personalizzate */
.slide-enter-active {
  animation: slideDown 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-leave-active {
  animation: slideUp 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes slideDown {
  from {
    opacity: 0;
    max-height: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    max-height: 500px;
    transform: translateY(0);
  }
}

@keyframes slideUp {
  from {
    opacity: 1;
    max-height: 500px;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    max-height: 0;
    transform: translateY(-10px);
  }
}

/* Per garantire che l'altezza massima sia sufficiente */
.slide-enter-active > div,
.slide-leave-active > div {
  overflow: hidden;
}

/* Scrollbar personalizzata per overflow */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #1a1a1a;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb {
  background: #dc2626;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #ef4444;
}

/* Effetti hover migliorati */
.group:hover .group-hover\:text-red-300 {
  color: #fca5a5;
}

/* Container responsive */
@media (max-width: 640px) {
  .min-h-screen {
    padding: 1rem;
  }
  
  .p-5 {
    padding: 1rem;
  }
  
  .p-6 {
    padding: 1.25rem;
  }
}
<<<<<<< Updated upstream
</style>
>>>>>>> Stashed changes
=======
</style>
>>>>>>> Stashed changes

<template>
  <div class="container z-50 sticky w-full max-w-4xl px-4 mt-24 mx-auto flex flex-col justify-center items-center">
    <h1 class="text-2xl md:text-3xl font-black">More about me</h1>
    <!-- card about -->
    <div
      class="about text-neutral-50 py-2 sm:py-10 w-full mt-16 border-2 border-neutral-50 bg-sfuma flex flex-col sm:flex-row flex-wrap sm:flex-nowrap">
      <div class="flex w-full sm:w-1/2 pr-2 sm:mx-auto flex-col justify-center items-center">
        <img src="/logo_2.png" width="200" height="200" alt="Image Profile" role="img">
      </div>
      <div class="flex w-full px-4 mt-8 sm:m-0 sm:p-0 sm:w-1/2 flex-col justify-center items-start">
        <h1 class="font-bold text-2xl sm:text-3xl mb-4">Francesco Versace</h1>
        <p class="font-thin text-sm md:text-md sm:pr-2">
          Mi chiamo Francesco, sono un giovane videomaker classe 2004 che abita in italia, piú precisamente in Friuli
          Venezia Giulia.
          mi sono avvicinato a questo mondo in modo concreto attorno al 2020 dopo essermene appassionato già da piú
          piccolino attorno al 2018/19,
          grazie al mondo dei motori e del writing guardando documentari e trasmissioni tv.
        </p>
        <p class="font-thin text-sm md:text-md sm:pr-2 pt-2">
          Il mondo multimediale in generale é una passione che coltivo specialmente il fascino delle digital art come
          poster e cover art.
          parlando di esperienze ho avuto la fortuna tramite la scuola di conoscere un ragazzo che è stato di molta
          ispirazione nel mio percorso dandomi speranza,consigli e skills di chi questo lavoro lo fa da molti piú anni,
          finita la scuola ho iniziato a lavorare in un distributore di benzina per comprarmi tutta l'attrezzatura di
          cui avessi bisogno .
        </p>
        <p class="font-thin text-sm md:text-md sm:pr-2 pt-2">
          Fatti i primi lavori e i primi clienti, mi dedico per la maggior parte del tempo a lavori riguardanti il mondo
          sportivo in particolar modo quello del motocross/moto stunt.
          Tramite i miei video voglio trasmettere emozioni ed energia mettendo passione e semplicitá
        </p>
        <!-- buttons -->
        <div class="w-full max-w-[365px] mt-8">
          <a href="mailto:" class="w-full">
            <button
              class="flex justify-center hover:opacity-80 transition-opacity border border-neutral-400 w-[150px] sm:w-[177px] text-neutral-50 uppercase font-black bg-accent items-center gap-2 text-sm mt-6 py-3 px-4">
              Contact me!
            </button>
          </a>
        </div>
      </div>
    </div>
    <!-- more content -->
  </div>
  <!-- about me pagina principale spostato-->
  <!-- 
        <div class="relative min-h-screen w-full">   
          <h1 class="mt-48  text-2xl sm:text-3xl font-black">
            ABOUT ME
          </h1>
          <div class="about w-full mt-4 flex flex-wrap sm:flex-nowrap">
            <div class="flex w-1/2 pr-2 sm:mx-auto flex-col justify-center items-start">
              <img src="/logo_2.png" width="150" height="150" alt="Image Profile" role="img">
            </div>
            <div class="flex w-1/2 flex-col justify-center items-start">
              <h1 class="font-bold text-2xl sm:text-3xl mb-4">Francesco Versace</h1>
              <p>I'm 19 y.o. video-maker that put passion and love in whatever i do!</p>
              <p>Feel free to contact me for a video service.</p>
            
              <div class="flex justify-between items-center flex-wrap sm:flex-nowrap w-full max-w-[365px] mt-8">
                <RouterLink to="/About">
                  <button id="myBtn"
                    class="flex justify-center hover:opacity-80 w-full sm:w-auto items-center font-black uppercase gap-2 text-sm mt-6 py-3 px-4">
                    About
                  </button>
                </RouterLink>
                <a href="mailto:">
                  <button
                    class="flex justify-center hover:opacity-80 border border-neutral-400 w-[150px] sm:w-[177px] accent uppercase font-black bg-transparent items-center gap-2 text-sm mt-6 sm:ml-2 py-3 px-4">
                    Contact me!
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div> -->
</template>
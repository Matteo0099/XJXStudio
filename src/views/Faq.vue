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
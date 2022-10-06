<template lang="">
<div class="mt-4">
  <Carrousel :images="images" />
  <AboutUs />
  <Actions />
  <Donate />
  <ContactForm />
  <Footer />
</div>
</template>
<script>
import Carrousel from './components/Carrousel.vue';
import AboutUs from './components/AboutUs.vue';
import Actions from './components/Actions.vue';
import Donate from './components/Donate.vue';
import ContactForm from './components/ContactForm.vue'
import Footer from '/src/components/common/Footer.vue'

export default {
  components: {
    Carrousel,
    AboutUs,
    Actions,
    Donate,
    ContactForm,
    Footer
  },
  data () {
    return {
      images: [
        { src: '/images/home-slider-1.png', alt: 'Alcec' },
        { src: '/images/home-slider-2.png', alt: 'Alcec' },
        { src: '/images/home-slider-3.png', alt: 'Alcec' },
        { src: '/images/services-slider-1.png', alt: 'Alcec', innerText: 'Turnos', href: 'http://centrooncologico.alcec.org/turnos/' },
        { src: '/images/home-slider-4.png', alt: 'Alcec', href: 'http://hogardetransito.alcec.org/', innerText: 'Reservar' },
      ]
    }
  }
}
</script>
<style lang="">
    
</style>
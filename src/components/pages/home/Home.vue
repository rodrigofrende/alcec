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

import homeSlider1 from '/src/assets/images/home-slider-1.png'
import homeSlider2 from '/src/assets/images/home-slider-2.png'
import homeSlider3 from '/src/assets/images/home-slider-3.png'
import homeSlider4 from '/src/assets/images/home-slider-4.png'
import serviceSlider1 from '/src/assets/images/services-slider-1.png'

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
        { src: homeSlider1, alt: 'Alcec' },
        { src: homeSlider2, alt: 'Alcec' },
        { src: homeSlider3, alt: 'Alcec' },
        { src: serviceSlider1, alt: 'Alcec', innerText: 'Turnos', href: 'http://centrooncologico.alcec.org/turnos/' },
        { src: homeSlider4, alt: 'Alcec', href: 'http://hogardetransito.alcec.org/', innerText: 'Reservar', isRouterRedirect: true },
      ]
    }
  }
}
</script>
<style lang="">
    
</style>
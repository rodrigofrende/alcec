<template lang="">
  <div class="mt-4">
    <Carrousel :images="images" />
    <AboutUs />
    <Actions />
    <Donate />
    <ContactForm id="target"/>
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
    mounted () {
      const el = document.querySelector('#target')
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    },
    data () {
      return {
        images: [
          { src: '/src/assets/images/home-slider-1.png', alt: 'Alcec' },
          { src: '/src/assets/images/home-slider-2.png', alt: 'Alcec' },
          { src: '/src/assets/images/home-slider-3.png', alt: 'Alcec' },
          { src: '/src/assets/images/services-slider-1.png', alt: 'Alcec', innerText: 'Turnos', href: 'http://centrooncologico.alcec.org/turnos/' },
          { src: '/src/assets/images/home-slider-4.png', alt: 'Alcec', href: 'http://hogardetransito.alcec.org/', innerText: 'Reservar', isRouterRedirect: true },
        ]
      }
    }
  }
  </script>
  <style lang="">
      
  </style>
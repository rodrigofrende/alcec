<template lang="">
  <div class="mt-4">
    <Carrousel :images="images" />
    <AboutUs />
    <Actions id="target"/>
    <Donate />
    <ContactForm/>
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

  import slider1 from '/src/assets/images/slider-1.png'
  import slider2 from '/src/assets/images/slider-2.png'
  import slider3 from '/src/assets/images/slider-3.png'
  import slider4 from '/src/assets/images/slider-4.png'
  import slider5 from '/src/assets/images/slider-5.png'
  import slider6 from '/src/assets/images/slider-6.png'
  
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
        const id = 'target';
        const yOffset = -200; 
        const element = document.getElementById(id);
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

        window.scrollTo({top: y, behavior: 'smooth'});
      }
    },
    data () {
      return {
        images: [
          { src: slider2, alt: 'Alcec' },
          { src: slider3, alt: 'Alcec' },
          { src: slider1, alt: 'Alcec' },
          { src: slider4, alt: 'Alcec' },
          { src: slider5, alt: 'Alcec' },
          { src: slider6, alt: 'Alcec' },
          { src: homeSlider1, alt: 'Alcec' },
          { src: homeSlider2, alt: 'Alcec' },
          { src: homeSlider3, alt: 'Alcec' },
          { src: serviceSlider1, alt: 'Alcec', innerText: 'Turnos', href: 'https://api.whatsapp.com/send?phone=+543442666225&text=%20' },
          { src: homeSlider4, alt: 'Alcec', href: 'http://hogardetransito.alcec.org/', innerText: 'Reservar', isRouterRedirect: true },
        ]
      }
    }
  }
  </script>
  <style lang="">
      
  </style>
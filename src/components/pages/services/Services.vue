<template lang="">
  <div class="mt-4">
    <Carrousel :images="images" class="mb-4" />
    <Diagnostic />
    <Carrousel :images="images2" />
    <div class="row grey-container">
      <div class="row">
        <div class="col-12 col-lg-5 pb-5 pb-lg-0">
          <span class="title d-flex me-auto mb-3">Hogar de Tránsito</span>
        </div>
        <div class="col-12 col-lg-7">
          <section class="mt-1">
            <p>
              El Hogar de Tránsito de ALCEC tiene una capacidad para alojar hasta a 80 pacientes y familiares que requieren de un lugar donde alojarse durante tratamientos prolongados, lejos de sus casas. Cuenta con 36 dormitorios y 32 baños, en dos pisos, baños para discapacitados, cocina industrial totalmente equipada,  lavadero, un amplio comedor y una amplia y confortable sala de estar; entrada para ambulancia y proveedores; un jardín con césped y plantas y un patio interior. 
            </p>
            <p>
              Hablar del Hogar de Tránsito es hablar de poner la mirada y el corazón en el otro, es hablar de solidaridad, de trabajo mancomunado, de vocación de servicio y acompañamiento al paciente.  Es hablar de la enorme tarea, dedicación y esfuerzo de la Comisiónde ALCEC y también de la generosidad y el apoyo de todos nuestros vecinos, de instituciones y de funcionarios gubernamentales. 
            </p>
            <p>
              Todo lo que en él se ve ha sido pensado y diseñado cuidadosamente poniendo como prioridad el bienestar, funcionalidad y comodidad de nuestros pacientes y sus acompañantes. 
            </p>
          </section>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>
<script>
import Carrousel from "../home/components/Carrousel.vue";
import Footer from "/src/components/common/Footer.vue";
import Diagnostic from "./components/Diagnostic.vue";

import serviceSlider from '/src/assets/images/services-slider-1.png'
import homeSlider from '/src/assets/images/home-slider-4.png'

import slider1 from '/src/assets/images/slider-1.png'
import slider2 from '/src/assets/images/slider-2.png'
import slider3 from '/src/assets/images/slider-3.png'
import slider4 from '/src/assets/images/slider-4.png'
import slider5 from '/src/assets/images/slider-5.png'
import slider6 from '/src/assets/images/slider-6.png'

export default {
  components: {
    Carrousel,
    Footer,
    Diagnostic,
  },
  data() {
    return {
      images: [
        { src: slider2, alt: 'Alcec' },
        { src: slider3, alt: 'Alcec' },
        { src: slider1, alt: 'Alcec' },
        { src: slider4, alt: 'Alcec' },
        { src: slider5, alt: 'Alcec' },
        { src: slider6, alt: 'Alcec' },
        {
          src: serviceSlider,
          alt: "Alcec",
          innerText: "Turnos",
          href: "https://api.whatsapp.com/send?phone=+543442666225&text=%20",
        },
        {
          src: homeSlider,
          alt: "Alcec",
          href: "http://hogardetransito.alcec.org/",
          innerText: "Reservar",
          isRouterRedirect: true
        },
      ],
      images2: [
        {
          src: homeSlider,
          alt: "Alcec",
          href: "http://hogardetransito.alcec.org/",
          innerText: "Reservar",
          isRouterRedirect: true
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.grey-container {
  padding: 10vh 7vw;
  background-color: rgba(231, 231, 231, 0.2);
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
}
</style>
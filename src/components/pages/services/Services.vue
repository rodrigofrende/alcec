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
import Carrousel from '../home/components/Carrousel.vue';
import Footer from '/src/components/common/Footer.vue'
import Diagnostic from './components/Diagnostic.vue'

export default {
 components: {
  Carrousel,
  Footer,
  Diagnostic
 },
 data () {
    return {
      images: [
        { src: 'src/assets/images/services-slider-1.png', alt: 'Alcec', innerText: 'Turnos', href: 'http://centrooncologico.alcec.org/turnos/' },
        { src: 'src/assets/images/home-slider-4.png', alt: 'Alcec', href: 'http://hogardetransito.alcec.org/', innerText: 'Reservar' },
      ],
      images2: [
        { src: 'src/assets/images/home-slider-4.png', alt: 'Alcec', href: 'http://hogardetransito.alcec.org/', innerText: 'Reservar' },
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
  .grey-container {
    padding: 10vh 7vw;
    background-color: rgba(231, 231, 231, .2);
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
  }
</style>
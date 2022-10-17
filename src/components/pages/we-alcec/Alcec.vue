<template lang="">
  <div class="mt-4" id="target">
    <Carrousel :images="images" />

  <section>
    <div class="alcec-container">
      <div class="row">
        <div class="col-12 col-lg-5 pb-5 pb-lg-0 alcec">
          <span class="title">Todos somos</span><br>
          <span class="title">ALCEC</span>
        </div>
        <div class="col-12 col-lg-7">
          <section class="">
            <p>
              El Centro Oncológico y de Imágenes, y el Hogar de Tránsito de ALCEC, son el resultado 
              del trabajo y la perseverancia de un grupo de voluntarias que lo han hecho posible, 
              gracias al apoyo de toda la comunidad. 
            </p>
            <p>
              La cuota societaria, la adquisición del bono telefónico, las coronas de caridad, la maratón solidaria anual, las ferias, las donaciones y todos los aportes voluntarios, han permitido la edificación de sus instalaciones, la inversión en aparatología, en especialización profesional y en el permanente mantenimiento de este centro.
            </p>
            <p>
              Programa “padrinazgo” <br> Como empresa, podés apadrinar una habitación de nuestro Hogar de Tránsito. Sumate ahora, vos podés cambiar la vida de una persona que lucha contra el Cáncer. ¡Cambiá su realidad ahora!
            </p>
          </section>
        </div>
      </div>
    </div>
  </section>

    <Footer />
  </div>
</template>
<script>
import Carrousel from "../home/components/Carrousel.vue";
import Footer from "/src/components/common/Footer.vue";

import homeSlider2 from '/src/assets/images/home-slider-2.png'
import homeSlider3 from '/src/assets/images/home-slider-3.png'
import homeSlider4 from '/src/assets/images/home-slider-4.png'

export default {
  components: {
    Footer,
    Carrousel,
  },
  mounted () {
    const id = '#target'
    const yOffset = -250
    const element = document.querySelector(id);
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({top: y, behavior: 'smooth'});
  },
  data () {
    return {
      images: [
        { src: homeSlider2, alt: "Alcec" },
        { src: homeSlider3, alt: "Alcec" },
        {
          src: homeSlider4,
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
.alcec-container {
  padding: 22vh 7vw;
}

.alcec {
  text-align: left;
  padding-left: 10vw;
}
</style>
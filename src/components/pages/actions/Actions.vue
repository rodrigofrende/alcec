<template lang="">
  <div class="actions-container">
    <div class="row mb-5">
      <div class="col-12 col-lg-5 mb-5 mb-lg-0">
        <section class="action-card my-auto d-flex row">
          <img class="card-icon mx-auto mt-1 my-lg-1" src="/images/action-icon-1.png" alt="Eventos">
          <span class="description-text">Eventos</span>
        </section>
      </div>
      <div class="col-12 col-lg-7 mt-3">
        <span class="ms-auto d-flex item-title mb-4">Subcomisión Eventos</span>
        <p class="me-1 me-lg-5">La Feria de Variedades se realiza con las donaciones 
        de los vecinos: pueden ser elementos en buen estado del hogar, ropa, calzado, etc </p>
      </div>
    </div>

    <div class="row py-5">
      <div class="col-12 col-lg-5 mb-5 mb-lg-0">
        <section class="action-card my-auto d-flex row">
          <img class="card-icon mx-auto mt-1 my-lg-1" src="/images/action-icon-2.png" alt="Eventos">
          <span class="description-text">Maratón</span>
        </section>
      </div>
      <div class="col-12 col-lg-7 mt-3">
        <span class="ms-auto d-flex item-title mb-4">Subcomisión Maratón</span>
        <p class="me-1 me-lg-5">Organización anual de Maratón Solidario que la comunidad tomó como propia. 
        Participan más 3 mil personas, entre maratonistas y 
        voluntarios de la “caminata solidaria”
        </p>
      </div>
    </div>

    <div class="row py-5">
      <div class="col-12 col-lg-5 mb-5 mb-lg-0">
        <section class="action-card my-auto d-flex row">
          <img class="card-icon mx-auto mt-1 my-lg-1" src="/images/action-icon-3.png" alt="Eventos">
          <span class="description-text">Bono Contribución</span>
        </section>
      </div>
      <div class="col-12 col-lg-7 mt-3">
        <span class="ms-auto d-flex item-title mb-4">Subcomisión Bono Contribución</span>
        <p class="me-1 me-lg-5">Durante todo el año se puede comprar el bono, con 
        número de teléfono fijo o número de celular y se sortea en el mes 
        de noviembre
        </p>
      </div>
    </div>

    <div class="row py-5">
      <div class="col-12 col-lg-5 mb-5 mb-lg-0">
        <section class="action-card my-auto d-flex row">
          <img class="card-icon mx-auto mt-1 my-lg-1" src="/images/action-icon-4.png" alt="Eventos">
          <span class="description-text">Campañas</span>
        </section>
      </div>
      <div class="col-12 col-lg-7 mt-3">
        <span class="ms-auto d-flex item-title mb-4">Prevención</span>
        <p class="me-1 me-lg-5">Organización de campañas de prevención anuales</p>
        <br>
        <div class="d-flex row">
          <span class="prevencion"><b>Agosto</b> Cáncer de Próstata</span>
          <span class="prevencion"><b>Octubre</b> Cáncer de Mamas</span>
          <span class="prevencion"> <b>Noviembre</b> Cáncer de Piel</span>
          <span class="prevencion"> <b>Diciembre</b> Cáncer de Colón</span>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>
<script>
import Footer from '/src/components/common/Footer.vue'
export default {
  components: {
    Footer
  }
}
</script>
<style lang="scss" scoped>
  .actions-container {
    padding: 20vh 12vw;
  }
  .prevencion {
    font-weight: 300;
    font-size: 12px;
    line-height: 24px;
    text-align: left;

    color: #000000;
  }
  .action-card {
    width: 205px;
    height: 229px;

    background-color: rgba(231, 231, 231, .2);
    box-shadow: 5px 5px 5px rgba(231, 231, 231, 2);
    border-radius: 30px;
    margin-right: auto;
  }
  @media screen and (max-width: 1000px) {
    .action-card {
      margin-left: auto;
    }
  }
  .item-title {
    font-weight: 300;
    font-size: 26px;
    line-height: 28px;

    color: #636161;
  }
  .description-text {
    position: relative;
    top: -8px;
    font-weight: 300;
    font-size: 14px;
    line-height: 13px;
    text-align: center;

    color: #636161;
  }
</style>
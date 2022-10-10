<template lang="">
  <div class="action-container">
    <div class="row">
      <div class="col-12 col-lg-5 pb-5 pb-lg-0">
        <span class="title me-5">ALCEC en Acción</span>
      </div>
      <div class="col-12 col-lg-7">
        <section class="">
          <p>Al ser una <b>organización autónoma y autárquica</b>, necesita del apoyo incondicional de la 
          sociedad para poder llevar adelante su misión y consolidar sus valores de luchar contra 
          el cáncer a través, especialmente, de la prevención y prestando servicios con los más 
          altos estándares de calidad humana, científica y tecnológica.</p>
        </section>
      </div>
      <div class="row mx-auto py-lg-5 cards-container">
        <div class="col-6 py-5 py-lg-1 col-lg-3">
          <section class="action-card mx-auto my-auto d-flex row" @click="routerPush('evento')">
            <img class="card-icon mx-auto mt-3 my-lg-1" src="/src/assets/images/action-icon-1.png" alt="Eventos">
            <span class="description-text">Eventos</span>
          </section>
        </div>
        <div class="col-6 py-5 py-lg-1 col-lg-3">
          <section class="action-card mx-auto my-auto d-flex row" @click="routerPush('maraton')">
            <img class="card-icon mx-auto mt-3 my-lg-1" src="/src/assets/images/action-icon-2.png" alt="Eventos">
            <span class="description-text mb-1">Maratón</span>
          </section>
        </div>
        <div class="col-6 py-5 py-lg-1 col-lg-3">
          <section class="action-card mx-auto my-auto d-flex row" @click="routerPush('bono')">
            <img class="card-icon mx-auto mt-3 my-lg-1 bono" src="/src/assets/images/action-icon-3.png" alt="Eventos">
            <span class="description-text mb-1 mt-lg-1">Bono Contribución</span>
          </section>
        </div>
        <div class="col-6 py-5 py-lg-1 col-lg-3">
          <section class="action-card mx-auto my-auto d-flex row" @click="routerPush('campaña')">
            <img class="card-icon mx-auto mt-3 my-lg-1" src="/src/assets/images/action-icon-4.png" alt="Eventos">
            <span class="description-text">Campañas</span>
          </section>
        </div>
      </div>
      <!-- insert mobile image, display-md-none ? -->
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    routerPush (param) {
      this.$router.push({ path: '/accion', hash: `#${param}`})
    }
  }
}
</script>
<style scoped lang="scss">
  .action-container {
    padding: 22vh 7vw 0 7vw;
  }
  .cards-container {
    padding: 20vh 0 !important;
  }
  .action-card {
    cursor: pointer;
    width: 196px;
    height: 230px;

    background-color: rgba(231, 231, 231, .2);
    box-shadow: 5px 5px 5px rgba(231, 231, 231, 2);
    border-radius: 30px;
    margin-left: auto;
    margin-right: auto;
  }
  @media screen and (max-width: 700px) {
    .action-card {
      width: 160px;
      height: 180px;
    }
    .action-container {
      padding: 12vh 7vw;
    }
    .cards-container {
      padding: 10px 0 !important;
    }
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
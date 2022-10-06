<template lang="">
  <div class="" id="nosotros">
    <div class="about-container">
      <div class="row">
        <div class="col-12 col-lg-5 pb-5 pb-lg-0">
          <span class="title me-5">Quienes somos</span>
        </div>
        <div class="col-12 col-lg-7">
          <section class="">
            <p class="my-1">La Asociación de Lucha Contra el Cáncer (ALCEC) es una institución sin fines de lucro, 
            fundada en 1955 y constituida como ONG, con el objetivo de prevenir y luchar contra el 
            cáncer en todas sus modalidades.</p>
            <p class="mt-4">ALCEC se desempeña de manera autónoma y autárquica y no cuenta con ningún tipo 
            de subsidio gubernamental. Los ingresos generados son destinados en su totalidad al 
            desarrollo y mantenimiento del Centro Oncológico y a incrementar su equipamiento y 
            su constante actualización técnica.</p>
          </section>
        </div>
        <div class="col-12 pt-4">
          <img class="img-fluid" src="/images/home-quienes-somos.png" alt="Quienes somos">
        </div>
        <!-- insert mobile image, display-md-none ? -->
      </div>
    </div>

    <div class="row grey-container">
      <div class="col-12 col-lg-4 px-4 pb-3 pb-lg-0">
        <div class="d-flex row">
          <span class="nuestra pb-3">Nuestra</span>
          <span class="titulo pb-4">MISIÓN</span>
        </div>
        <p>Luchar contra el cáncer a través de la 
        <b>prevención</b>, el <b>diagnóstico</b> y el <b>tratamiento</b> de la enfermedad, prestando 
        servicios con altos estándares de cali
        dad humana, científica y tecnológica, 
        con el objetivo de garantizar la seguridad y la eficiencia en el tratamiento.</p>
      </div>
      <div class="col-12 col-lg-4 px-4 pb-3 pb-lg-0 px-lg-5">
        <div class="d-flex row">
          <span class="nuestra pb-3">Nuestra</span>
          <span class="titulo pb-4">VISIÓN</span>
        </div>
        <p>Posicionamiento del Centro Oncológico y de imágenes
        de alta 
        calidad científica y humana.</p>
      </div>
      <div class="col-12 col-lg-4 px-4 pb-3 pb-lg-0">
        <div class="d-flex row">
          <span class="nuestra pb-3">Nuestros</span>
          <span class="titulo pb-4">VALORES</span>
        </div>
        <p>Servicios, Cuidado, Ética, Salud, Vida, Excelencia</p>
      </div>
    </div>

  </div>
</template>
<script>
export default {

}
</script>
<style scoped lang="scss">
.about-container {
  padding: 22vh 7vw;
}
.grey-container {
  padding: 64px 15vw;
  background-color: rgba(231, 231, 231, .2);
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
}
.nuestra {
  font-family: 'Gotham';
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 22px;
  text-align: left;
  color: #636161;
}
.titulo {
  font-family: 'Gotham';
  font-style: normal;
  font-weight: 300;
  font-size: 30px;
  line-height: 34px;
  text-align: left;
  color: #636161;
}
</style>
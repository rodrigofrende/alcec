<template lang="">
  <div class="row grey-container">
    <span class="colaborar">Quiero colaborar</span>
    <span class="donar my-4">¡Tu donación es muy importante!</span>
    <span class="descripcion">Podés hacerlo online y de manera totalmente segura o bien comunicate con nuestra oficina: 03442 428709</span>

      <div class="row mx-auto py-5 cards-container">
        <div class="col-6 py-4 py-lg-3 col-xl-3">
          <section class="action-card mx-auto my-auto d-flex row">
            <span class="card-title">Programa de padrinazgo</span>
            <button class="btn mx-auto my-auto donate-btn" @click="$router.push({ path: '/colaborar'})"> <span class="button-text">Donar</span></button>
          </section>
        </div>
        <div class="col-6 py-4 py-lg-3 col-xl-3">
          <section class="action-card mx-auto my-auto d-flex row">
            <span class="card-title">Coronas de caridad</span>
            <button class="btn mx-auto my-auto donate-btn" @click="$router.push({ path: '/colaborar'})"> <span class="button-text">Donar</span></button>
          </section>
        </div>
        <div class="col-6 py-4 py-lg-3 col-xl-3">
          <section class="action-card mx-auto my-auto d-flex row">
            <span class="card-title">Donar mensualmente</span>
            <button class="btn mx-auto my-auto donate-btn" @click="$router.push({ path: '/colaborar'})"> <span class="button-text">Donar</span></button>
          </section>
        </div>
        <div class="col-6 py-4 py-lg-3 col-xl-3">
          <section class="action-card mx-auto my-auto d-flex row">
            <span class="card-title">Donar por única vez</span>
            <button class="btn mx-auto my-auto donate-btn" @click="$router.push({ path: '/colaborar'})"> <span class="button-text">Donar</span></button>
          </section>
        </div>
      </div>

  </div>
    
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
.action-card {
  background: #9C3DB7;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  color: #fff;
  margin-left: auto;
  max-width: 300px;
  margin-right: auto;
  height: 390px;
}

.grey-container {
  padding: 18vh 12vw 12vh 12vw;
  background-color: rgba(231, 231, 231, .2);
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
}

.cards-container {
  padding: 10vh 0 !important;
}

.colaborar,
.donar,
.descripcion {
  font-style: normal;
  font-weight: 400;
  text-align: center;

  color: #636161;
}

.colaborar {
  font-size: 55px;
  line-height: 59px;
}

.donar {
  font-size: 30px;
  line-height: 34px;
}

.descripcion {
  font-size: 16px;
  line-height: 18px;
}

.card-title {
  margin-top: 58px;
  font-weight: 700;
  font-size: 30px;
  line-height: 34px;
  text-align: center;
}

.donate-btn {
  color: #fff;
  background: #9C3DB7;
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  text-align: center;
  border: 1px solid rgba(0, 0, 0, 0.08);
  display: flex;
  height: 60px;
  width: 180px;
}

.button-text {
  font-weight: 300;
  font-size: 30px;
  line-height: 32px;
  margin-top: 14px;
  text-align: center;
  width: 100%;
  height: 100%;

  color: #FFFFFF;
}

@media screen and (max-width: 800px) {
  .card-title {
    font-size: 24px;
    line-height: 26px;
  }

  .donate-btn {
    height: 52px;
    width: 150px;
  }

  .action-card {
    height: 330px;
  }

  .button-text {
    font-size: 26px;
    line-height: 28px;
  }
}
</style>
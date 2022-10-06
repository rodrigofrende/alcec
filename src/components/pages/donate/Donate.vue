<template lang="">
  <div class="donate-container">
    <div class="row my-5">
      <div class="col-12 col-lg-4">
        <span class="title ms-auto d-flex mt-2">COLABORAR</span>
      </div>
      <div class="col-12 mt-3 mt-lg-0 col-lg-8">
        <p class="me-5">Nuestro Centro Oncológico es el resultado del trabajo y perseverancia de 
        un grupo de voluntarias que mediante una administración ordenada y junto a la ciudadanía, lo han hecho posible </p>
      </div>
    </div>
    <DonateForm />
  </div>
  <Footer />
</template>
<script>
import Footer from '/src/components/common/Footer.vue'
import DonateForm from './components/DonateForm.vue'

export default {
  components: {
    Footer,
    DonateForm
  }
}
</script>
<style scoped lang="scss">
  .donate-container {
    padding: 10vh 7vw 10vh 7vw;
  }
.title {
  font-weight: 300;
  font-size: 40px;
  line-height: 40px;
  text-align: left;
  color: #636161;
}
</style>
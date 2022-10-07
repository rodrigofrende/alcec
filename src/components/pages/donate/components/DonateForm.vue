<template lang="">
  <div>
    <div class="row">
      <div class="col-12 py-3">
        <span class="howmuch d-flex ms-auto py-3">¿Cuánto queres donar?</span>
      </div>
      <div class="col-12 d-flex">
        <div class="btn-group d-flex flex-wrap" role="group" aria-label="Seleccione uno">
          <section class="me-2">
            <input type="radio" @click="setButton('$300')" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off">
            <label class="btn" for="btnradio1">$300</label>
          </section>

          <section class="mx-2">
            <input type="radio" @click="setButton('$500')" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off">
            <label class="btn" for="btnradio2">$500</label>
          </section>

          <section class="mx-2">
            <input type="radio" @click="setButton('$1000')" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off">
            <label class="btn" for="btnradio3">$1000</label>
          </section>

          <section class="mx-2">
            <input type="radio" @click="setButton('Otro importe')" class="btn-check" name="btnradio" id="btnradio4" autocomplete="off">
            <label class="btn" for="btnradio4">Otro importe</label>
          </section>

          <section class="mx-2">
            <input type="radio" @click="setButton('Padrinazgo')" class="btn-check" name="btnradio" id="btnradio5" autocomplete="off">
            <label class="btn" for="btnradio5">Padrinazgo</label>
          </section>

          <section class="mx-2">
            <input type="radio" @click="setButton('Coronas')" class="btn-check" name="btnradio" id="btnradio6" autocomplete="off">
            <label class="btn" for="btnradio6">Coronas</label>
          </section>

        </div>
      </div>
      
      <div class="col-12">
        <form ref="form" class="pt-4">
          <div class="mb-4 d-flex justifu-content-between">
            <section class="me-3 w-100">
              <label for="name" class="form-label ms-auto d-flex">Nombre/s</label>
              <input type="text" class="form-control" required id="name" aria-describedby="emailHelp">
              <!-- <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> -->
            </section>
            <section class="mx-3 w-100">
              <label for="lastname" class="form-label ms-auto d-flex">Apellido/s</label>
              <input type="text" class="form-control" required id="lastname" aria-describedby="emailHelp">
              <!-- <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> -->
            </section>
            <section class="ms-3 w-100">
              <label for="email" class="form-label ms-auto d-flex">Email</label>
              <input type="email" class="form-control" required id="email">
            </section>
          </div>
          <div class="mb-4 d-flex">
            <section class="w-50 me-3">
              <label for="address" class="form-label ms-auto d-flex">Dirección</label>
              <input type="address" class="form-control" required id="address">
            </section>
            <section class="w-50 ms-3">
              <label for="city" class="form-label ms-auto d-flex">Ciudad</label>
              <input type="text" class="form-control" required id="city">
            </section>
          </div>
          <div class="mb-4 d-flex justifu-content-between">
            <section class="me-3 w-200px">
              <label for="zip" class="form-label ms-auto d-flex">Codigo Postal</label>
              <input type="text" class="form-control" required id="zip" aria-describedby="emailHelp">
            </section>
            <section class="mx-3 w-100">
              <label for="province" class="form-label ms-auto d-flex">Provincia</label>
              <input type="text" class="form-control" required id="province" aria-describedby="emailHelp">
              <!-- <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> -->
            </section>
            <section class="ms-3 w-100">
              <label for="country" class="form-label ms-auto d-flex">Pais</label>
              <input type="text" class="form-control" required id="country">
            </section>
          </div>
          <div class="mb-4 d-flex justifu-content-between">
            <section class="w-50">
              <label for="province" class="form-label ms-auto d-flex">Provincia</label>
              <input type="text" class="form-control" required id="province" aria-describedby="emailHelp">
              <!-- <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> -->
            </section>
            <section class="ms-auto d-flex mt-auto">
              <button type="submit" class="btn btn-primary w-100 align-content-bottom d-flex">
                <span class="msg">Enviar</span>
              </button>
            </section>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      selectedPrice: null
    }
  },
  methods: {
    setButton (selected) {
      this.selectedPrice = selected
    },
    sendForm () {
      if (this.selectedPrice === null) {
        return alert('Por favor seleccione un monto')
      }
      this.$refs.form.$el.submit()
    }
  }
}
</script>
<style scoped lang="scss">
  .howmuch {
    font-weight: 300;
    font-size: 20px;
    line-height: 22px;

    color: #636161;
  }
  .w-200px {
    min-width: 200px;
  }
  .btn {
    background-color: #9C3DB7 !important;
    color: white;
    padding: 26px 30px 16px 30px;
    font-size: 20px;
  }
  .btn-check:checked+.btn {
    background-color: #a592c5 !important;
    color: white !important;
    border: 1px solid #9c3db7;
  }
  .btn-primary {
    height: 42px !important;
    margin: 0 !important;
    background: #A592C5 !important;
    line-height: 7px !important; 
  }
  @media screen and (max-width:1200px){
    .btn {
      padding: 16px 24px 12px 24px;
      font-size: 20px;
      margin: 10px 0;
    }
    .btn-primary {
    line-height: 18px !important; 
  }
  }
  </style>
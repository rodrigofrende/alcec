<template lang="">
  <div class="reserva-container">
    <div class="row">
      <div class="col-12">
          <span class="title d-flex">Reserva</span>
        </div>
      <div class="col-12 py-4">
        <span class="sub-title d-flex">Para hacer su consulta si hay lugar disponible en el hogar de transito completa el formulario y nos pondremos en contacto a la brevedad con Ud.</span>
      </div>
      <div class="col-12">
        <form ref="reserva" class="pt-4">
          <div class="mb-4 d-flex justifu-content-between">
            <section class="me-3 w-50">
              <label for="name" class="form-label ms-auto d-flex">Nombre/s</label>
              <input type="text" class="form-control" required id="name" aria-describedby="emailHelp">
              <!-- <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> -->
            </section>
            <section class="ms-3 w-50">
              <label for="lastname" class="form-label ms-auto d-flex">Apellido/s</label>
              <input type="text" class="form-control" required id="lastname" aria-describedby="emailHelp">
              <!-- <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> -->
            </section>
          </div>
          <div class="mb-4 d-flex">
            <section class="me-3 w-100">
              <label for="email" class="form-label ms-auto d-flex">Email</label>
              <input type="email" class="form-control" required id="email">
            </section>
            <section class="w-100 mx-1">
              <label for="phone" class="form-label ms-auto d-flex">Teléfono</label>
              <input type="phone" class="form-control" required id="phone">
            </section>
            <section class="ms-3 w-100">
              <label class="form-label ms-auto d-flex" for="date">Fecha:</label>
              <input type="date" class="form-control" id="date" name="date">
            </section>
          </div>
          <div class="mb-4 d-flex">
          </div>
          <div class="mb-4 d-flex">
            <section class="w-100">
              <textarea class="form-control" required rows="5" placeholder="Dejanos tu mensaje..." id="floatingTextarea"></textarea>
            </section>
          </div>
          <section class="ms-auto d-flex mt-auto">
            <button @click="sendForm" class="btn btn-primary w-100 align-content-bottom d-flex">
              <span class="msg d-flex mx-auto">Enviar</span>
            </button>
          </section>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    sendForm () {
    }
  }
}
</script>
<style lang="scss" scoped>
  .reserva-container {
    padding: 20vh 12vw;
  }
  .sub-title {
    text-align: left
  }
  .msg {
    margin-top: 10px !important;
    display: flex !important;
    align-items: center !important;
    flex-direction: column !important;
  }
</style>
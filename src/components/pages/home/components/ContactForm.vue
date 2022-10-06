<template lang="">
  <div class="contact-container">
    <div class="row">
      <div class="col-12 col-lg-8">
        <section class="d-flex mb-5">
          <span class="me-auto contact">Contacto</span>
          <span class="ms-auto mt-2 comment">Dejanos tus comentarios</span>
        </section>
        <form class="pt-4">
          <div class="mb-3 d-flex">
            <section class="w-50 me-3">
              <label for="name" class="form-label ms-auto d-flex">Nombre/s</label>
              <input type="text" class="form-control" required id="name" aria-describedby="emailHelp">
              <!-- <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> -->
            </section>
            <section class="w-50 ms-3">
              <label for="lastname" class="form-label ms-auto d-flex">Apellido/s</label>
              <input type="text" class="form-control" required id="lastname" aria-describedby="emailHelp">
              <!-- <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> -->
            </section>
          </div>
          <div class="mb-4 d-flex">
            <section class="w-50 me-3">
              <label for="email" class="form-label ms-auto d-flex">Email</label>
              <input type="email" class="form-control" required id="email">
            </section>
            <section class="w-50 ms-3">
              <label for="phone" class="form-label ms-auto d-flex">Telefono</label>
              <input type="phone" class="form-control" required id="phone">
            </section>
          </div>
          <div class="mb-4">
            <textarea class="form-control" required rows="5" placeholder="Dejanos tu mensaje..." id="floatingTextarea"></textarea>
          </div>

          <button type="submit" class="btn btn-primary w-100">
            <span class="msg">Enviar mensaje</span>
          </button>
        </form>
      </div>
      <div class="col-12 mt-5 mt-lg-0 col-lg-4">
        <div class="d-flex row ms-lg-3">
          <span class="me-auto d-flex title">Centro Oncológico</span> <br>
          <span class="pb-5 me-auto d-flex sub-title">J.J de Urquiza 840</span> <br>
          
          <span class="me-auto d-flex title">Teléfono</span><br>
          <span class="pb-5 me-auto d-flex sub-title">03442 422294</span><br>
  
          <span class="me-auto d-flex title">Oficina</span><br>
          <span class="pb-5 me-auto d-flex sub-title">Tiblietti 73</span><br>
  
          <span class="me-auto d-flex title">Hogar de Tránsito</span><br>
          <span class="me-auto d-flex sub-title pb-2 ">Pablo Lorentz 728</span><br>
          <span class="me-auto d-flex quote">Concepción del Uruguay, Entre Rios</span>

        </div>

      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.title {
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  margin-bottom: 1rem;

  color: #878787;
}
.sub-title {
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #949393;
  opacity: 0.73;
}
.quote {
  font-size: 16px;
  line-height: 18px;
  color: #949393;
  opacity: 0.73;
}
.contact-container {
  padding: 22vh 12vw;
}

.contact {
  font-weight: 300;
  font-size: 40px;
  line-height: 42px;
  text-transform: uppercase;
  color: #636161;
}

.comment {
  font-weight: 300;
  font-size: 18px;
  line-height: 20px;

  color: #000000;
}
textarea.form-control {
  font-weight: 300;
  font-size: 20px;
  line-height: 22px;
  padding-top: 1rem;
}
.msg {
  margin-top: 10px !important;
  display: flex !important;
  align-items: center !important;
  flex-direction: column !important;
}

</style>
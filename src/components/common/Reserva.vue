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
        <form @submit.prevent="postData" ref="reserva" class="pt-4">
          <div class="mb-4 d-flex justifu-content-between">
            <section class="me-3 w-50">
              <label for="name" class="form-label ms-auto d-flex">Nombre/s</label>
              <input type="text" class="form-control" v-model="name" required id="name" aria-describedby="emailHelp">
              <!-- <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> -->
            </section>
            <section class="ms-3 w-50">
              <label for="lastname" class="form-label ms-auto d-flex">Apellido/s</label>
              <input type="text" class="form-control" v-model="lastname" required id="lastname" aria-describedby="emailHelp">
              <!-- <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> -->
            </section>
          </div>
          <div class="mb-4 d-flex">
            <section class="me-3 w-100">
              <label for="email" class="form-label ms-auto d-flex">Email</label>
              <input type="email" class="form-control" v-model="email" required id="email">
            </section>
            <section class="w-100 mx-1">
              <label for="phone" class="form-label ms-auto d-flex">Teléfono</label>
              <input type="phone" class="form-control" v-model="phone" required id="phone">
            </section>
            <section class="ms-3 w-100">
              <label class="form-label ms-auto d-flex" for="date">Fecha:</label>
              <input type="date" class="form-control" v-model="date" id="date" required name="date">
            </section>
          </div>
          <div class="mb-4 d-flex">
          </div>
          <div class="mb-4 d-flex">
            <section class="w-100">
              <textarea v-model="msg" class="form-control" required rows="5" placeholder="Dejanos tu mensaje..." id="floatingTextarea"></textarea>
            </section>
          </div>
          <section class="ms-auto d-flex mt-auto">
            <button @click="sendForm" class="btn btn-primary w-100 align-content-bottom d-flex">
              <span class="msg d-flex my-auto mx-auto">Enviar</span>
            </button>
          </section>
          <div class="mt-5">
            <span v-if="showMsg" class="success-msg">
              ¡Mensaje enviado, gracias!
            </span>
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
      showMsg: false,
      name: '',
      lastname: '',
      email: '',
      phone: '',
      date: '',
      msg: ''
    }
  },
  methods: {
    clearForm () {
      this.name = '',
      this.lastname = '',
      this.email = '',
      this.phone = ''
      this.date = ''
      this.msg = ''
    },
    async postData () {
      const form = {
        to: this.email, // change to alcec direction
        toName: 'ALCEC',
        from: 'info@alcec.org',
        fromName: 'ALCEC',
        subject: `Reserva ${this.date}`, // agregar el tipo de donacion
        plainBody: `
          Nombre: ${this.name},
          Apellido: ${this.lastname},
          Email: ${this.email},
          Teléfono: ${this.phone},
          Fecha seleccionada: ${this.date},
          Mensaje: ${this.msg},
        `,
        HtmlBody: '',
        ResponseSubject: 'Recibímos tu pedido de reserva',
        ResponsePlainBody: 'texto',
        ResponseHtmlBody: 'En breve vamos a estar respondiendo tu mensaje'
      }

      const url = 'https://sendemail20221031105727.azurewebsites.net/api/Function1?code=6q5HwD6ql8ctCyaFT5qXf7CT8AYIk0hUuw0bS4T_nailAzFuIHVq7w=='
      const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'no-cors', // no-cors, *cors, same-origin
        headers: {
          'Content-Type': 'application/json'
        },
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(form) // body data type must match "Content-Type" header
      });
      this.showMsg = true
      this.clearForm()
      return console.log(response); // parses JSON response into native JavaScript objects
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
    display: flex !important;
    align-items: center !important;
    flex-direction: column !important;
  }
</style>
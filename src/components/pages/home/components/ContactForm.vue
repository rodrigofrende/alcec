<template lang="">
  <div class="contact-container">
    <div class="row">
      <div class="col-12 col-lg-8">
        <section class="d-flex mb-5">
          <span class="me-auto contact">Contacto</span>
        </section>
        <form class="pt-4" @submit.prevent="postData">
          <div class="mb-3 d-flex">
            <section class="w-50 me-3">
              <label for="name" class="form-label ms-auto d-flex">Nombre/s</label>
              <input type="text" v-model="name" class="form-control" required id="name" aria-describedby="emailHelp">
              <!-- <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> -->
            </section>
            <section class="w-50 ms-3">
              <label for="lastname" class="form-label ms-auto d-flex">Apellido/s</label>
              <input type="text" v-model="lastname" class="form-control" required id="lastname" aria-describedby="emailHelp">
              <!-- <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> -->
            </section>
          </div>
          <div class="mb-4 d-flex">
            <section class="w-50 me-3">
              <label for="email" class="form-label ms-auto d-flex">Email</label>
              <input type="email" v-model="email" class="form-control" required id="email">
            </section>
            <section class="w-50 ms-3">
              <label for="phone" class="form-label ms-auto d-flex">Teléfono</label>
              <input type="phone" v-model="phone" class="form-control" required id="phone">
            </section>
          </div>
          <div class="mb-4">
            <textarea class="form-control" v-model="msg" required rows="5" placeholder="Dejanos tu mensaje..." id="floatingTextarea"></textarea>
          </div>

          <button type="submit" class="btn btn-primary w-100">
            <span class="msg my-auto d-flex">Enviar mensaje</span>
          </button>
        </form>
        <div class="mt-5">
            <span v-if="showMsg" class="success-msg">
              !Gracias por tu mensaje!
            </span>
          </div>
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
          <span class="me-auto d-flex quote">Concepción del Uruguay, Entre Ríos</span>

        </div>

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
      msg: '',
    }
  },
  methods: {
    clearForm () {
      this.email = '',
      this.name = '',
      this.lastname = '',
      this.phone = '',
      this.msg = ''
    },
    async postData () {
      const form = {
        to: this.email, // change to alcec direction
        toName: 'ALCEC',
        from: 'info@alcec.org',
        fromName: 'ALCEC',
        subject: 'Contacto ALCEC',
        plainBody: `
          Nombre: ${this.name},
          Apellido: ${this.lastname},
          Email: ${this.email},
          Teléfono: ${this.phone},
        `,
        HtmlBody: '',
        ResponseSubject: 'Gracias por contactarte con ALCEC',
        ResponsePlainBody: 'texto',
        ResponseHtmlBody: 'En breve vamos a estar respondiendo tu solicitud'
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
.title {
  font-weight: 400;
  font-size: 20px;
  margin-bottom: 1rem;

  color: #878787;
}
.sub-title {
  font-weight: 400;
  font-size: 20px;
  color: #949393;
  opacity: 0.73;
}
.quote {
  font-size: 16px;
  color: #949393;
  opacity: 0.73;
}
.contact-container {
  padding: 22vh 12vw;
}

.contact {
  font-weight: 300;
  font-size: 40px;
  text-transform: uppercase;
  color: #636161;
}

.comment {
  font-weight: 300;
  font-size: 18px;

  color: #000000;
}
textarea.form-control {
  font-weight: 300;
  font-size: 20px;
  padding-top: 1rem;
}
.msg {
  display: flex !important;
  flex-direction: column !important;
}

</style>
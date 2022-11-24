<template lang="">
  <div>
    <div class="row">
      <div class="col-12 py-3">
        <span class="howmuch d-flex ms-auto py-3">¿Cuánto queres donar?</span>
      </div>
      <div class="col-12 d-flex">
        <div class="btn-group d-flex flex-wrap" role="group" aria-label="Seleccione uno">
          <section class="me-2">
            <input type="radio" @click="setButton(300, false)" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off">
            <label class="btn" for="btnradio1">$300</label>
          </section>

          <section class="mx-2">
            <input type="radio" @click="setButton(500, false)" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off">
            <label class="btn" for="btnradio2">$500</label>
          </section>

          <section class="mx-2">
            <input type="radio" @click="setButton(1000, false)" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off">
            <label class="btn" for="btnradio3">$1000</label>
          </section>

          <section class="mx-2 my-auto">
            <div v-if="!changingSelectedPrice">
              <input type="radio" @click="activeInput" class="btn-check" name="btnradio" id="btnradio4" autocomplete="off">
              <label class="btn" :class="customValueAdded ? 'checked' : ''" for="btnradio4">{{(selectedPrice && customValueAdded) ? '$' + selectedPrice : 'Otro importe'}}</label>
            </div>
            <input v-else v-focus @blur="closeInput" type="number" min="1" step="any" class="form-control w-80 my-auto d-flex" v-model="selectedPrice">
          </section>

          <!-- <section class="mx-2">
            <input type="radio" @click="setButton('Padrinazgo')" class="btn-check" name="btnradio" id="btnradio5" autocomplete="off">
            <label class="btn" for="btnradio5">Padrinazgo</label>
          </section>

          <section class="mx-2">
            <input type="radio" @click="setButton('Coronas')" class="btn-check" name="btnradio" id="btnradio6" autocomplete="off">
            <label class="btn" for="btnradio6">Coronas</label>
          </section> -->

        </div>
      </div>
      
      <div class="col-12">
        <form ref="form" class="pt-4" @submit.prevent="postData">
          <div class="mb-4 d-flex justifu-content-between">
            <section class="me-3 w-100">
              <label for="name" class="form-label ms-auto d-flex">Nombre/s</label>
              <input type="text" class="form-control" v-model="name" required id="name" aria-describedby="emailHelp">
              <!-- <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> -->
            </section>
            <section class="mx-3 w-100">
              <label for="lastname" class="form-label ms-auto d-flex">Apellido/s</label>
              <input type="text" class="form-control" v-model="lastname" required id="lastname" aria-describedby="emailHelp">
              <!-- <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> -->
            </section>
            <section class="ms-3 w-100">
              <label for="email" class="form-label ms-auto d-flex">Email</label>
              <input type="email" class="form-control" v-model="email" required id="email">
            </section>
          </div>
          <div class="mb-4 d-flex">
            <section class="w-50 me-3">
              <label for="address" class="form-label ms-auto d-flex">Dirección</label>
              <input type="address" class="form-control" v-model="address" required id="address">
            </section>
            <section class="w-50 ms-3">
              <label for="city" class="form-label ms-auto d-flex">Ciudad</label>
              <input type="text" class="form-control" v-model="city" required id="city">
            </section>
          </div>
          <div class="mb-4 d-flex justifu-content-between">
            <section class="me-3 w-200px">
              <label for="zip" class="form-label ms-auto d-flex">Código Postal</label>
              <input type="text" class="form-control" v-model="cp" required id="zip" aria-describedby="emailHelp">
            </section>
            <section class="mx-3 w-100">
              <label for="province" class="form-label ms-auto d-flex">Provincia</label>
              <input type="text" class="form-control" v-model="province" required id="province" aria-describedby="emailHelp">
              <!-- <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> -->
            </section>
            <section class="ms-3 w-100">
              <label for="country" class="form-label ms-auto d-flex">País</label>
              <input type="text" class="form-control" v-model="country" required id="country">
            </section>
          </div>
          <div class="mb-4 d-flex justifu-content-between">
            <section class="w-50">
              <label for="telephone" class="form-label ms-auto d-flex">Teléfono</label>
              <input type="text" class="form-control" v-model="phone" required id="telephone" aria-describedby="emailHelp">
              <!-- <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> -->
            </section>
            <section class="ms-auto d-flex mt-auto">
              <button type="submit" class="btn msg btn-primary w-100 my-auto d-flex">
                Enviar
              </button>
            </section>
          </div>
          <div class="mt-5">
            <span v-if="showMsg" class="success-msg">
              !Gracias por colaborar!
            </span>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
const focus = {
  mounted: (el) => el.focus()
}
export default {
  directives: {
    focus
  },
  data () {
    return {
      customValueAdded: false,
      changingSelectedPrice: false,
      showMsg: false,
      selectedPrice: null,
      email: '',
      name: '',
      lastname: '',
      address: '',
      city: '',
      cp: '',
      province:'',
      country: '',
      phone:''
    }
  },
  methods: {
    closeInput (val) {
      this.changingSelectedPrice = false
      this.setButton(this.selectedPrice, true)
    },
    activeInput () {
      this.changingSelectedPrice = true
      this.customValueAdded = true
    },
    resolveMailTitle () {
      const hash = this.$route.hash
      if (hash == '#unica') return 'por única vez'
      if (hash == '#mensualmente') return 'mensual'
      if (hash == '#padrinazgo') return 'de padrinazgo'
      if (hash == '#coronas') return 'de coronas'
    },
    clearForm () {
      this.selectedPrice = null,
      this.email = '',
      this.name = '',
      this.lastname = '',
      this.address = '',
      this.city = '',
      this.cp = '',
      this.province ='',
      this.country = '',
      this.phone = ''
    },
    setButton (price, isCustom) {
      this.selectedPrice = price
      this.customValueAdded = isCustom
    },
    async postData () {
      const form = {
        to: this.email, // change to alcec direction
        toName: 'ALCEC',
        from: 'info@alcec.org',
        fromName: 'ALCEC',
        subject: `Donación ${resolveMailTitle()}`, // agregar el tipo de donacion
        plainBody: `
          Nombre: ${this.name},
          Apellido: ${this.lastname},
          Email: ${this.email},
          Dirección: ${this.address},
          Ciudad: ${this.city},
          CP: ${this.cp},
          Provincia: ${this.province},
          Pais: ${this.country},
          Teléfono: ${this.phone},
          Monto donación: $${this.selectedPrice || 0}
        `,
        HtmlBody: '',
        ResponseSubject: 'Gracias por colaborar!',
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
<style scoped lang="scss">
  .howmuch {
    font-weight: 300;
    font-size: 20px;
    line-height: 22px;

    color: #636161;
  }
  .w-80 {
    width: 80%;
  }
  .w-200px {
    min-width: 200px;
  }
  .btn {
    background-color: #9C3DB7 !important;
    color: white;
    font-size: 20px;
    &:not(.msg) {
      // padding: 26px 30px 16px 30px;
    }
  }
  .btn-check:checked+.btn {
    background-color: #a592c5 !important;
    color: white !important;
    border: 1px solid #9c3db7;
  }
  .checked {
    background-color: #a592c5 !important;
    color: white !important;
    border: 1px solid #9c3db7;
  }
  .btn-primary {
    margin: 0 !important;
    background: #A592C5 !important;
  }
  @media screen and (max-width:1200px){
    .btn {
      // padding: 16px 24px 12px 24px;
      font-size: 18px;
      margin: 10px 0;
    }
  }
  </style>
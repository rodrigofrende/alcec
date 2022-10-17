<template lang="">
  <div class="row grey-container">
    <div class="row" id="oncologia">
      <div class="col-12 col-lg-5 pb-5 pb-lg-0">
        <span class="title d-flex me-auto mb-3"><b>Diagnóstico &</b></span>
        <span class="title d-flex me-auto"><b>Tratamiento</b></span>
      </div>
      <div class="col-12 col-lg-7">
        <section class="">
          <p>
            El <b>Centro Oncológico y de Imágenes</b> de ALCEC es un centro integral de referencia, a nivel regional y en todo el país. Actualmente, desarrolla dos importantes líneas de trabajo: Oncología e Imágenes, que también ofrece servicios de altísima calidad, a todo 
            tipo de pacientes adultos, fundamentales en la prevención de patologías. 
          </p>
        </section>
      </div>
    </div>

    <div class="row py-3"></div>

    <div class="row py-5 grey-bg">
      <div class="col-12 pb-5 pb-lg-0">
        <span class="title d-flex me-auto py-5 sub-title">Oncología</span>
      </div>
      <div class="col-12 col-lg-6 py-5 pb-lg-0">
        <span class="title d-flex me-auto mb-3 item-title">Quimioterapia</span>
        <section class="">
          <ul>
            <li> Infusion continua</li>
            <li> Estándar – nivel I – por día de tratamiento</li>
            <li> Con taxano – nivel II – por día de tratamiento</li>
            <li> Bioterapia – por día de tratamiento</li>
            <li> Servis de port-a-cath</li>
            <li> Consultas oncológicas</li>
          </ul>
        </section>
      </div>
      <div class="col-12 col-lg-6">
        <div class="col-12 col-lg-5 py-5 pb-lg-0">
        <span class="title d-flex me-auto mb-3 ms-3 item-title">Oncohematología</span>
      </div>
      <div class="col-12">
        <section class="">
          <ul>
            <li> Consultas oncohematológicas</li>
            <li> Tratamiento:</li>
          </ul>
        </section>
        <section class="ms-5">
          <ul>
            <li> Leucemia Linfática Crónica y Otros Linfoproliferativos Crónicos </li>
            <li> Leucemia de Células Vellosas y otros Síndromes Linfoproliferativos Crónicos</li>
            <li> Leucemia Linfática Crónica y Otros Síndromes Linfoproliferativos Crónicos</li>
            <li> Mieloma Múltiple </li>
            <li> Linfoma No Hodgkin /Enfermedad de Hodgkin </li>
            <li> Síndrome Mieloproliferativo Crónico</li>

          </ul>
        </section>
      </div>
      </div>
    </div>


    <div class="row py-5 px-0">
      <div class="col-12 col-lg-6 py-5 pb-lg-0">
        <div class="grey-bg py-5 p-5">

          <span class="title d-flex me-auto mb-3 sub-title">Radioterapia</span>
          <section class="mt-5">
            <ul>
              <li> Braquiterapia ginecológica endocavitaria de baja tasa</li>
              <li> Radioterapia convencional</li>
              <li> Radioterapia con acelerador lineal (RT2D)</li>
              <li> Radioterapia tridimensional conformada (RT3DC)</li>
              <li> Radioterapia de intensidad modulada (IMRT)</li>
              <li> Tomografía de planificación</li>
              <li> Consulta con médicos especialistas en radioterapia</li>
            </ul>
          </section>

        </div>
      </div>
      <div class="col-12 col-lg-6 py-5 pb-lg-0">
        <div class="grey-bg p-5">
          <span class="title d-flex ps-5 mb-3 sub-title">Centro de Imágenes</span>
          <section class="mt-5 ps-5">
            <ul class="">
              <li> Tomografía de diagnóstico</li>
              <li> Mamografía digital directa</li>
              <li> Ecografía de diagnóstico</li>
            </ul>
          </section>
        </div>
      </div>
    </div>

    <div class="row py-5">

    </div>

    <div class="row py-5 grey-bg cp">
      <div class="col-12 col-lg-5 py-5 pb-lg-0">
        <span class="title d-flex me-auto mb-3 sub-title">Cuidados Paliativos</span>
      </div>
      <div class="col-12 py-5 col-lg-7">
        <section class="mt-1">
          <p>Los Cuidados Paliativos mejoran la calidad de vida de los pacientes con enfermedades 
          avanzadas que no responden a tratamientos curativos. En el tratamiento se realiza el 
          control de los síntomas y se intenta reducir los problemas sociales y existenciales. La 
          filosofía del tratamiento ayuda al paciente a vivir sus últimos tiempos y a morir con el 
          menor sufrimiento y por sobre todo con dignidad.</p>
        </section>
      </div>
    </div>

    <div class="row py-5"></div>

    <div class="row py-5" id="imagenes">
      <div class="col-12 col-lg-5 pb-5 pb-lg-0">
        <span class="title d-flex me-auto mb-3"><b>Calidad &</b></span>
        <span class="title d-flex me-auto"><b>Innovación</b></span>
      </div>
      <div class="col-12 col-lg-7">
        <section>
          <p>
            El Centro Oncológico y de Imágenes de ALCEC cuenta con un destacado equipo de especialistas, de altísimo nivel profesional y humano. Conscientes de la importancia de la capacitación permanente de sus profesionales, periódicamente realizan especializaciones en la Argentina y en el exterior. 
            Con más de 30 años de trayectoria, el Centro de ALCEC es uno de los pocos centros 
            integrales de la región, que cuentan con Servicios de Quimioterapia, Radioterapia e 
            Imágenes (Tomografía, Mamografía y Ecografía) de última tecnología.
          </p>
        </section>
      </div>
    </div>

  </div>
</template>
<script>
export default {
  methods: {
    scrollTo () {
      if (!this.$route.hash) return
    
      const el = document.querySelector(`${this.$route.hash}`)
      if (el) {
        const id = `${this.$route.hash}`;
        const yOffset = -300; 
        const element = document.querySelector(id);
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

        window.scrollTo({top: y, behavior: 'smooth'});
      }
    }
  },
  watch: {
    $route: {
      handler(route) {
        if (route.hash) {
          this.scrollTo()
        }
      },
      immediate: true
    }
  }
}
</script>
<style lang="scss" scoped>
.grey-container {
  padding: 10vh 7vw;
  background-color: rgba(231, 231, 231, .2);
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
}
.grey-bg {
  background: #f1f0f0;
  box-shadow: 8px 8px 8px #e0e0e0;
  border-radius: 10px;
  &:not(.cp) {
    min-height: 416px;
  }
}

.sub-title {
  font-weight: 400;
  font-size: 30px;
  line-height: 32px;

  color: #636161;
}

.item-title {
  font-weight: 300;
  font-size: 26px;
  line-height: 25px;

  color: #636161;
}

ul,
li {
  text-align: left;
  font-size: 16px;
  line-height: 22px;
}

ul {
  list-style: none; /* Remove default bullets */
}
p {
  
}

ul li::before {
  content: "\2022";  /* Add content: \2022 is the CSS Code/unicode for a bullet */
  color: #D9D9D9;
  font-weight: bold; /* If you want it to be bold */
  display: inline-block; /* Needed to add space between the bullet and the text */
  width: 0.7em; /* Also needed for space (tweak if needed) */
  margin-left: -1em; /* Also needed for space (tweak if needed) */
  font-size: 1.7rem;
}
</style>
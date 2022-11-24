<script>

export default {
  methods: {
    openLink(href) {
      if (!href) return;
      window.open(href, "_blank");
    },
    routerPush (param) {
      this.$emit('updateKey')
      this.$router.push({ path: '/servicios', hash: `#${param}`})

      const dropdownUl = document.querySelector('.dropdown-menu')
      dropdownUl.classList.remove('active');
      dropdownUl.classList.remove('show');
    },
    naviteTo (route) {
      this.$emit('updateKey')
      this.$router.push({ path: route, force: true })
    },
  }
};
</script>

<template>
  <div class="sticky-top">
    <div class="d-flex bg-white">
      <button
        class="btn btn-secondary turno-btn"
        @click="
          openLink('https://api.whatsapp.com/send?phone=+543442666225&text=%20')
        "
      >
        <span>Pedí tu</span> <b>Turno</b>
      </button>
      <button
        class="btn btn-secondary login-btn"
        @click="openLink('http://45.179.72.126/login_web/')"
      >
        <b>Login</b> <span>|</span> <span>Mi Portal</span>
      </button>
      <img
        src="/src/assets/images/iso-logo.png"
        class="mx-auto d-block logo pt-3 pt-md-0"
        alt="..."
      />
    </div>
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon navbar-dark "></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav d-flex mx-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a
                class="nav-link"
                aria-current="page"
                @click="naviteTo('/')"
                :class="[{ active: $route.path === '/' }]"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                >INICIO</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                aria-current="page"
                @click="naviteTo('/nosotros')"
                :class="[{ active: $route.path === '/nosotros' }]"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                >NOSOTROS</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                aria-current="page"
                @click="naviteTo('/acciones')"
                :class="[{ active: $route.path === '/acciones' }]"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                >ACCIONES</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                aria-current="page"
                @click="naviteTo('/colaborar')"
                :class="[{ active: $route.path === '/colaborar' }]"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                >COLABORAR</a
              >
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                data-bs-auto-close="true"
                @click="switchSubMenu"
                :class="[{ active: $route.path === '/servicios' }]"
                >NUESTROS SERVICIOS</a
              >
                
              <ul class="dropdown-menu" :style="{ margin: 0 }" aria-labelledby="navbarDropdownMenuLink">
                <li><a @click="routerPush('oncologia')" data-bs-toggle="dropdown" class="dropdown-item">ONCOLOGÍA</a></li>
                <li><a @click="routerPush('imagenes')" data-bs-toggle="dropdown" class="dropdown-item">IMÁGENES</a></li>
              </ul>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                aria-current="page"
                @click="naviteTo('/todos-somos-alcec')"
                :class="[{ active: $route.path === '/todos-somos-alcec' }]"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                >TODOS SOMOS ALCEC</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                aria-current="page"
                @click="naviteTo('/contacto')"
                :class="[{ active: $route.path === '/contacto' }]"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                >CONTACTO</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<style scoped lang="scss">
.btn-secondary {
  background-color: #878787 !important;
}
  .dropdown-menu {
    background-color: #9c3db7;
    padding: 0;
    width: 100%;
    text-align: center;
  }
  .dropdown-item {
    color: #fff;
    text-decoration: none;
    white-space: nowrap;
    background-color: #9c3db7;
    border: 1px solid black;
    &.active,&:active {
      background-color: #9c3db7;
    }
}
.logo {
  max-height: 182px;
  filter: drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.25));
}

.login-btn {
  top: 32px;
  height: 50px;
  width: 180px;
  position: absolute;
  right: 12vw;
}

.turno-btn {
  top: 32px;
  height: 50px;
  width: 180px;
  position: absolute;
  left: 12vw;
}
.navbar {
  background: #9c3db7;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.9);

  &.navbar-expand-lg {
    padding: 10px 0px;
  }
}
.nav-link {
  font-weight: 400;
  font-size: 15px;

  height: 38px;
  padding-left: 2vw !important;
  padding-right: 2vw !important;

  &.active,
  &:hover,
  &:focus {
    text-decoration: underline;
    color: #ffffff !important;
  }
}
.navbar-toggler {
  // &:focus {
  //   box-shadow: none;
  // }
  &:focus {
    box-shadow: none !important;
  }
  border: 1px solid #4f0e62;
  &:not(.collapsed) {
    box-shadow: 0 0 4px 1px #4f0e62 !important;
  }
}
.navbar-toggler:not(.collapsed) .navbar-toggler-icon::after {
    content: "\f00d" !important;
    font-family: "FontAwesome";
    font-size: 24px;
    color: rgba(255, 255, 255, 0.55);
}
.navbar-toggler:not(.collapsed) .navbar-toggler-icon {
  background-image: none;
}

@media screen and (max-width: 860px) {
  .turno-btn,
  .login-btn {
    top: 16px;
    height: 40px;
    width: 160px;
  }
  .turno-btn {
    left: 5vw;
  }
  .login-btn {
    right: 5vw;
  }
}

</style>

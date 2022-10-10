<script>
export default {
  methods: {
    openLink(href) {
      if (!href) return;
      window.open(href, "_blank");
    },
    routerPush (param) {
      this.$router.push({ path: '/servicios', hash: `#${param}`})
    }
  },
};
</script>

<template>
  <div>
    <div class="d-flex pb-4">
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
        class="mx-auto d-block logo pt-5 pt-md-0"
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
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav d-flex mx-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link
                class="nav-link"
                aria-current="page"
                to="/"
                :class="[{ active: $route.path === '/' }]"
                >INICIO</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                class="nav-link"
                aria-current="page"
                to="/nosotros"
                :class="[{ active: $route.path === '/nosotros' }]"
                >NOSOTROS</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                class="nav-link"
                aria-current="page"
                to="/acciones"
                :class="[{ active: $route.path === '/acciones' }]"
                >ACCIONES</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                class="nav-link"
                aria-current="page"
                to="/colaborar"
                :class="[{ active: $route.path === '/colaborar' }]"
                >COLABORAR</router-link
              >
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                data-bs-auto-close="false"
                aria-expanded="false"
                :class="[{ active: $route.path === '/servicios' }]"
                >NUESTROS SERVICIOS</a
              >

              <ul class="dropdown-menu" :style="{ margin: 0 }" aria-labelledby="navbarDropdownMenuLink">
                <li><a @click="routerPush('oncologia')" class="dropdown-item">ONCOLOGÍA</a></li>
                <li><a @click="routerPush('imagenes')" class="dropdown-item">IMÁGENES</a></li>
              </ul>
            </li>
            <li class="nav-item">
              <router-link
                class="nav-link"
                aria-current="page"
                to="/todos-somos-alcec"
                :class="[{ active: $route.path === '/todos-somos-alcec' }]"
                >TODOS SOMOS ALCEC</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                class="nav-link"
                aria-current="page"
                to="/contacto"
                :class="[{ active: $route.path === '/contacto' }]"
                >CONTACTO</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<style scoped lang="scss">
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
  max-height: 180px;
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
  &.navbar-expand-lg {
    padding: 10px 0px;
  }
}

.nav-link {
  font-weight: 400;
  font-size: 15px;
  margin-top: 8px;
  text-overflow: ellipsis !important;
  white-space: nowrap;

  color: #ffffff;
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
  &:focus {
    box-shadow: none;
  }
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

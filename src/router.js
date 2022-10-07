import { createRouter, createWebHistory } from "vue-router";

import Home from './components/pages/home/Home.vue'
import Nosotros from './components/pages/home/Nosotros.vue'
import Contacto from './components/pages/home/Contact.vue'
import Donate from './components/pages/donate/Donate.vue'
import Actions from './components/pages/actions/Actions.vue'
import Alcec from './components/pages/we-alcec/Alcec.vue'
import Services from './components/pages/services/Services.vue'
import Acciones from './components/pages/home/Acciones.vue'
import Reserva from './components/common/Reserva.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/reservar-turno', component: Reserva },
    { path: '/contacto', component: Contacto },
    { path: '/nosotros', component: Nosotros },
    { path: '/servicios', component: Services },
    { path: '/todos-somos-alcec', component: Alcec },
    { path: '/colaborar', component: Donate },
    { path: '/acciones', component: Acciones },
    { path: '/accion', component: Actions, props: true },
    { path: "/:catchAll(.*)", redirect: '/', component: Home }
]

const history = createWebHistory();

const router = createRouter({
  history,
  routes,
});

export default router;
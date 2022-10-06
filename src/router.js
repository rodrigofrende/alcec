import { createRouter, createWebHistory } from "vue-router";

import Home from './components/pages/home/Home.vue'
import Nosotros from './components/pages/home/Nosotros.vue'
import Contacto from './components/pages/home/Contact.vue'
import Donate from './components/pages/donate/Donate.vue'
import Actions from './components/pages/actions/Actions.vue'
import Alcec from './components/pages/we-alcec/Alcec.vue'
import Services from './components/pages/services/Services.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/contacto', component: Contacto },
    { path: '/nosotros', component: Nosotros },
    { path: '/servicios', component: Services },
    { path: '/todos-somos-alcec', component: Alcec },
    { path: '/colaborar', component: Donate },
    { path: '/accion', component: Actions },
    { path: "/:catchAll(.*)", redirect: '/', component: Home }
]

const history = createWebHistory();

const router = createRouter({
  history,
  routes,
});

export default router;
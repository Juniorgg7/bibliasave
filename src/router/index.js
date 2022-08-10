import Vue from 'vue'
import VueRouter from 'vue-router'

import HomeView from '../views/HomeView.vue'
import Livro from '../views/Livro.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path: '/livro',
    name: 'livro',
    component: Livro
  }

]

const router = new VueRouter({
  routes,
  mode: "history",
  base: process.env.BASE_URL,
})

export default router
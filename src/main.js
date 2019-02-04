import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './routes'
import GAuth from 'vue-google-oauth2'

Vue.use(Vuetify)
Vue.use(VueResource)
Vue.use(VueRouter)
// Vue.config.productionTip = false
const router = new VueRouter({
  routes: Routes,
  mode: 'history'
})

const gauthOption = {
  clientId: '261014131000-btqr5n9q1d44n4vsnr99enbctdvsaj32.apps.googleusercontent.com',
  scope: 'profile email',
  prompt: 'select_account'
}
Vue.use(GAuth, gauthOption)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})

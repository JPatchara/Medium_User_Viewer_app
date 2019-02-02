import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './routes'

Vue.use(Vuetify)
Vue.use(VueResource)
Vue.use(VueRouter)
// Vue.config.productionTip = false
const router = new VueRouter({
  routes: Routes,
  mode: 'history'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})

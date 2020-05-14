import Vue from 'vue'
import App from './App.vue'

window.$ = window.jQuery = require('jquery')
require('bootstrap')
require('admin-lte/dist/js/adminlte.min.js')

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

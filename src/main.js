import Vue from 'vue'
import App from './App.vue'

import 'spectre.css/dist/spectre.min.css'
import 'spectre.css/dist/spectre-icons.min.css'


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

//Arquivo onde é instanciado o vue
// e rederizado a entrada

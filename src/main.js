import Vue from 'vue'
import App from './App.vue'

import Load from "./lib/index"
Vue.use(Load);

new Vue({
  el: '#app',
  render: h => h(App)
})

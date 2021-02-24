import Vue from 'vue'
import App from './App'
import router from './router'
import Vant from 'vant'
import Axios from 'axios'
// import '../utils/request'
import 'vant/lib/index.css'
require('./Mock')

Vue.use(Vant)
Vue.prototype.$http = Axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

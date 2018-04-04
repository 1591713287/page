// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import YDUI from 'vue-ydui';
import 'vue-ydui/dist/ydui.rem.css';
import axios from 'axios';

// import './assets/css/bootstrap.min.css'
// import './assets/js/bootstrap.min'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.js';

Vue.config.productionTip = false
Vue.prototype.$http = axios

Vue.use(MintUI)
Vue.use(YDUI);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // store,
  components: { App },
  template: '<App/>'
})

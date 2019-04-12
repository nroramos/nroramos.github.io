import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'

Vue.config.productionTip = false

import VueFire from 'vuefire';
Vue.use(VueFire);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

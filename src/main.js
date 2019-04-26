import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuetify from 'vuetify'
import './registerServiceWorker'

Vue.config.productionTip = false

import VueFire from 'vuefire';
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
Vue.use(VueFire);
Vue.use(Vuetify);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')


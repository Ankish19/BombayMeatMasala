import Vue from 'vue'
import App from './App.vue'
import * as VueGoogleMaps from 'vue2-google-maps'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { getGoogleApi } from './store/api'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'
import JwPagination from 'jw-vue-pagination'

Vue.component('jw-pagination', JwPagination)
Vue.config.productionTip = false

Vue.use(VueGoogleMaps, {
  load: {
    key: getGoogleApi().value,
    libraries: 'places'
  }
})

Vue.use(Toast)

const script = document.createElement('script')
script.src = 'https://maps.googleapis.com/maps/api/js?key=' + getGoogleApi().value + '&libraries=places'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

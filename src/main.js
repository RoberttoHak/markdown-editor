import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import _ from 'lodash'

Vue.config.productionTip = false

Vue.prototype.$_ = _

new Vue({
  vuetify,
  render: h => h(App),
}).$mount('#app')

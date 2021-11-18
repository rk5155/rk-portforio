import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

import { KinesisContainer, KinesisElement} from 'vue-kinesis'

Vue.component('kinesis-container', KinesisContainer);
Vue.component('kinesis-element', KinesisElement);

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

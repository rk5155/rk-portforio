import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

import { KinesisContainer, KinesisElement} from 'vue-kinesis'

import VueMq from 'vue-mq'
Vue.use(VueMq, {
  breakpoints: {
    sm: 580,
    // md: 1250,
    lg: Infinity,
  },
  defaultBreakpoint: 'sm'
});

Vue.component('kinesis-container', KinesisContainer);
Vue.component('kinesis-element', KinesisElement);

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

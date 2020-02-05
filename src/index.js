import Vue from 'vue'

import App from '@/App'
import router from '@/router'

export const app = new Vue({
  el: '#root',
  render: h => h(App),
  router,
  errorHandler (err) {
    console.log('err', err)
  }
});

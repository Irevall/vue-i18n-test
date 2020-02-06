import Vue from 'vue'

import App from '@/App'
import initI18n from '@/i18n'
import router from '@/router'

const i18n = initI18n();

export const app = new Vue({
  el: '#root',
  render: h => h(App),
  i18n,
  router,
  errorHandler (err) {
    console.log('err', err)
  }
});

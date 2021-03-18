import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/base'
import './plugins/vee-validate'
import vuetify from './plugins/vuetify'
import i18n from './i18n'
import VueAxios from './plugins/axios'
import VueMoment from 'vue-moment'
import moment from 'moment-timezone'

Vue.config.productionTip = false

// 시간 차이 초 단위 표시
moment.relativeTimeThreshold('ss', 60);
moment.updateLocale('ko', {
  relativeTime: {
    s: function(number) {
      return number + ' 초';
    }
  }
});

Vue.use(VueMoment, {
  moment,
});

new Vue({
  router,
  store,
  vuetify,
  i18n,
  VueAxios,
  VueMoment,
  render: h => h(App),
}).$mount('#app')

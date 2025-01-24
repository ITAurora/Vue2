import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

import Utils from '../../utils/request';
Vue.prototype.utils=Utils;

import lodash from 'lodash'
Vue.prototype.$lodash = lodash

// var dayjs = require('dayjs')
 import dayjs from 'dayjs' // ES 2015

Vue.prototype.$dayjs = dayjs

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

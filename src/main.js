import Vue from 'vue';
import 'es6-promise/auto';
import Vuex from 'vuex';
import store from './store';

Vue.use(Vuex);

import App from './App.vue';
import router from './router';
import jQuery from 'jquery';

window.$ = window.jQuery = jQuery;

import 'popper.js';
import 'bootstrap';
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
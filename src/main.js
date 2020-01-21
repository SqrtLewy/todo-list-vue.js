import Vue from 'vue';
import 'es6-promise/auto';
import Vuex from 'vuex';

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
  render: h => h(App),
}).$mount('#app');

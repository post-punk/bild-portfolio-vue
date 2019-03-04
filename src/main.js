// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from "vue-router";
import { routes } from "./router/index.js";
import BootstrapVue from 'bootstrap-vue';
import VModal from 'vue-js-modal'
import Vuelidate from 'vuelidate'
import Slick from 'vue-slick';

Vue.use(Vuelidate)
Vue.use(BootstrapVue)
Vue.use(VueRouter);
Vue.use(VModal)
Vue.use(Slick)

Vue.config.productionTip = false


const router = new VueRouter({
  mode: 'history',
  routes
});


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})


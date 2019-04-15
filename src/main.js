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
import { store } from './store/store.js';
import Vuex from 'vuex'
import firebase from 'firebase';
import 'firebase/auth';
import VueProgressBar from 'vue-progressbar'

Vue.use(Vuelidate)
Vue.use(BootstrapVue)
Vue.use(VueRouter);
Vue.use(VModal)
Vue.use(Slick)
Vue.use(Vuex)
Vue.use(VueProgressBar, options)

Vue.config.productionTip = false

const options = {
  color: '#bffaf3',
  failedColor: '#874b4b',
  thickness: '20px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s',
    termination: 300
  },
  autoRevert: true,
  location: 'left',
  inverse: false
}

const router = new VueRouter({
  mode: 'history',
  routes
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store,
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // user.sendVerificationEmail()
          store.dispatch('autoSignIn', user);
    }
  })
},
  components: { App },
  template: '<App/>'
}).$mount('#app')


// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from "vue-router";
import router from "./router/index";
import BootstrapVue from 'bootstrap-vue';
import VModal from 'vue-js-modal'
import Vuelidate from 'vuelidate'
import Slick from 'vue-slick';
import { store } from './store/store.js';
import Vuex from 'vuex'
import firebase from 'firebase';
import VueProgressBar from 'vue-progressbar'
import '../src/filters/formatDate.js'
import '../src/filters/uppercase.js'

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
  thickness: '55rem',
  transition: {
    speed: '0.2s',
    opacity: '0.6s',
    termination: 300
  },
  autoRevert: true,
  location: 'left',
  inverse: false
}

// const router = new VueRouter({
//   mode: 'history',
//   routes
// });

router.beforeEach ((to, from, next) => {
  // console.log('get global bitch');
  next();
})

let app = '';

firebase.auth().onAuthStateChanged((user)=> {
  if(!app) {
    store.dispatch('autoSignIn', user);
    console.log(user)
    app = new Vue({
        el: '#app',
        render: h => h(App),
        router,
        store,
        components: { App },
        template: '<App/>'
      }).$mount('#app')
  };
})


// firebase.auth().onAuthStateChanged((user) => {
      // if (user) {
        
        // console.log(user + 'vaznoca')
    //  }
  // })


/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   render: h => h(App),
//   router,
//   store,
//   created() {
//     firebase.auth().onAuthStateChanged((user) => {
//       if (user) {
//           store.dispatch('autoSignIn', user);
//     }
//   })
// },
//   components: { App },
//   template: '<App/>'
// }).$mount('#app')


<template>
  <div id="app">
    <app-header/>
        <vue-progress-bar></vue-progress-bar>
        <prompt :title="modalInfo.modalHeader" :text="modalInfo.modalText" :cancel="modalInfo.cancelButton" :danger="modalInfo.dangerButton" :buttonInfo="modalInfo.buttonInfo"
        v-if="promptIsOpen">
        </prompt>
        <spinner
        v-if="loading">
        </spinner>
    <router-view/>

    <app-footer/>
  </div>
</template>

<script>
import "../src/css/fonts.css";
import "../src/css/media-queries.css";

import Header from "./components/header.vue";
import Footer from "./components/footer.vue";
import CalloutTop from "./components/CalloutTop.vue";
import BootstrapVue from "bootstrap-vue";
import Slick from 'vue-slick';
import { store } from './store/store'
import VueCkeditor from 'vue-ckeditor2';
import firebase from 'firebase/app';
import Spinner from './components/other/Spinner.vue';
import Prompt from './components/other/Prompt.vue';

export default {
  name: "App",
 mounted () {
    //  [App.vue specific] When App.vue is finish loading finish the progress bar
    this.$Progress.finish()
  },
  created () {
    //  [App.vue specific] When App.vue is first loaded start the progress bar
    this.$Progress.start()
    //  hook the progress bar to start before we move router-view
    this.$router.beforeEach((to, from, next) => {
      //  does the page we want to go to have a meta.progress object
      if (to.meta.progress !== undefined) {
        let meta = to.meta.progress
        // parse meta tags
        this.$Progress.parseMeta(meta)
      }
      //  start the progress bar
      this.$Progress.start()
      //  continue to next page
      next()
    })
    //  hook the progress bar to finish after we've finished moving router-view
    this.$router.afterEach((to, from) => {
      //  finish the progress bar
      this.$Progress.finish()
    })
  },
  data() {
    return {
     
    };
  },
  components: {
    
    appHeader: Header,
    CalloutTop,
    appFooter: Footer,
    Spinner,
    Prompt,
   
  },
  computed: {
    loading() {
      return this.$store.getters.getLoadingStatus;
    },
    promptIsOpen() {
      return this.$store.getters.getPromptIsOpen;
    },
    modalInfo() {
      return this.$store.getters.getModalInfo;
    }
  }
};
</script>

<style>
html {
  margin: 0 auto;
  position: relative;
  min-height: 100%;
}
body {
  font-family: Arial, "Novecento sans wide Light", sans-serif;
  color: #8a8888;
  font-size: 0.85rem;
  line-height: 1.571;
  overflow-x: hidden;
  width: 100vw;
  /* overflow-y: overlay; */
  /* ili
   /* overflow-y: scroll; */
  margin-bottom: 203px;
}
a, a:hover, p {
  color: inherit;
  text-decoration: none;
}
p, ul, li {
    font-family: Arial !important;
    color: #737373;
}
button,
h1,
h2,
h3,
h4,
h4 a,
h5,
h6,
nav,
.tab-links p,
.footer p,
#banner-text,
#banner-button {
  font-family: "Novecento sans wide Light" !important;
  font-weight: normal;
  text-decoration: none;
}
.v--modal-overlay .v--modal-box {
  overflow: visible;
  background-color: transparent;
  box-shadow: 0 0 0 0;
}

/* higher selectivity override */
.router-link-exact-active.router-link-exact-active {
    color: #2ecc71;
    outline: none;
}
.navMain  {
  margin-right: 2em;
}
/* override default bootStrap width */
.container {
  max-width: 970px;
}
/* green progress bar */
.__cov-progress {
  height: 3px !important;
  background-color: #2ecc71 !important;
}
</style>

<template>
  <div id="app">
    <app-header/>
    <router-view/>
    <app-footer/>
  </div>
</template>

<script>
import "../src/css/fonts.css";
import "../src/css/style.css";
import "../src/css/media-queries.css";

import Header from "./components/header.vue";
import Footer from "./components/footer.vue";
import CalloutTop from "./components/CalloutTop.vue";
import BootstrapVue from "bootstrap-vue";
import Slick from 'vue-slick';

export default {
  name: "App",
 
  data() {
    return {
     
    };
  },
  components: {
    
    appHeader: Header,
    CalloutTop,
    appFooter: Footer,

  }
};
</script>

<style>
html {
  /* max-width: 1400px; */
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
  margin-bottom: 203px;
}
h1,
h2,
h3,
h4,
h4 a,
h5,
h6,
.tab-links p,
.footer p,
#banner-text,
#banner-button {
  font-family: "Novecento sans wide Light" !important;
  font-weight: normal;
  text-decoration: none;
}
</style>

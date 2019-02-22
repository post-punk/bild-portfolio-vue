<template>
  <div>
    <callout-top :calloutTitle="calloutTitle"></callout-top>
    <Map/>
    <Forms/>
  </div>
</template>

<script>
import Map from "./Map.vue";
import Forms from "./Forms";
import CalloutTop from '../CalloutTop.vue'

export default {
  name: "Contact",
  data() {
    return {
      calloutTitle: "GOT A QUESTION OR INQUIRY?"
    };
  },
  components: {
    CalloutTop,
    Map,
    Forms

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

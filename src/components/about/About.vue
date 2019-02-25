<template>
  <div>
    <callout-top :calloutTitle="calloutTitle"></callout-top>
    <AboutText/>
    <Tabs/>
  </div>
</template>

<script>
import AboutText from "./AboutText.vue";
import Tabs from "./Tabs.vue";
import CalloutTop from '../CalloutTop.vue'

export default {
  name: "About",
  data() {
    return {
      calloutTitle: "ABOUT MY BUSINESS"
    };
  },
  
  components: {
    CalloutTop,
    AboutText,
    Tabs
    
  }
};
</script>

<style>

</style>

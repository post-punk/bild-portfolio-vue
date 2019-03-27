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
import db from '@/firebase/init'

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
#dude {
    margin-top: 3em;
 } 
 h3 {
    margin-top: 2em;
    margin-bottom: 1em;
} 
</style>

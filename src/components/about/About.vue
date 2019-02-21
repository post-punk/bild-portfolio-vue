<template>
  <div>
    <AboutText/>
    <Tabs/>
  </div>
</template>

<script>
import AboutText from "./AboutText.vue";
import Tabs from "./Tabs.vue";

export default {
  name: "About",
  data() {
    return {
      title: "ABOUT MY BUSINESS"
    };
  },
  
  components: {
    
    AboutText,
    Tabs
    
  }
};
</script>

<style>
</style>

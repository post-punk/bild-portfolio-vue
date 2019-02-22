<template>
  <div>
    <callout-top :calloutTitle="calloutTitle"></callout-top>
    <work-nav></work-nav>
    <work-items/>  
  </div>
</template>

<script>
import WorkNav from "./WorkNav.vue";
import WorkItems from "./WorkItems";
import CalloutTop from '../CalloutTop.vue'

export default {
  name: "Work",
  data() {
    return {
      calloutTitle: "CHECK OUT WHAT I CAN DO"
    };
  },
  components: {
    CalloutTop,
    WorkNav,
    WorkItems

  }
};
</script>

<style>

</style>

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

.col-6 {
  margin-top: 1em;
}
</style>

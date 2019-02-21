<template>
  <div class="container-fluid d-flex align-items-center callout-top">
    <div class="container">
      <h2>{{ calloutTitle }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "CalloutTop",
  data() {
    return {
      
    };
  },
  props: ['calloutTitle']
};
</script>

<style>
.callout-top {
  color: white;
  background-color: #2ecc71;
  height: 100px;
}
</style>

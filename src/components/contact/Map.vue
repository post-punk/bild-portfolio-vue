<template>
  <div class="map">
    <iframe :src="contactInfo.map" width="100%" height="100%" frameborder="0" style="border:0" allowfullscreen></iframe>
  </div>
</template>

<script>
export default {
  name: "Map",
  computed: {
    contactInfo() {
      return this.$store.getters.contactInfo;
    }
  }
};
</script>

<style scoped>
.map {
  height: 500px;
}
</style>

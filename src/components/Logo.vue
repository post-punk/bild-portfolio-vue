<template>
  <div><img :src="logo.image"/></div>
</template>

<script>
export default {
  computed: {
    logo() {
      return this.$store.getters.logo;
    }
  }
};
</script>

<style>
</style>

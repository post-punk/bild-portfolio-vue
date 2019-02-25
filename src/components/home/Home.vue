<template>
  <div>
    <banner/>
    <GetToVideo/>
    <featured/>
    <carousel/>
  </div>
</template>

<script>
import Banner from './Banner.vue'
import GetToVideo from './GetToVideo.vue'

export default {
    name: 'Home',
    components: {
        Banner,
        GetToVideo,
  }
};
</script>

<style>
</style>

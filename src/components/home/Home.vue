<template>
  <div>
    <banner/>
    <GetToVideo/>
    <featured/>
    <!-- <carousel/> -->
  </div>
</template>

<script>
import Banner from './Banner.vue'
import GetToVideo from './GetToVideo.vue'
import Featured from './Featured.vue'

export default {
    name: 'Home',
    components: {
        Banner,
        GetToVideo,
        Featured
  }
};
</script>

<style>
</style>

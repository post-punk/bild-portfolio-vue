<template>
  <div>
    <banner/>
    <GetToVideo/>
    <featured/>
    <Carousel/>
  </div>
</template>

<script>
import Banner from './Banner.vue'
import GetToVideo from './GetToVideo.vue'
import Featured from './Featured.vue'
import Carousel from './Carousel.vue'

export default {
    name: 'Home',
    components: {
        Banner,
        GetToVideo,
        Featured,
        Carousel
  }
};
</script>

<style>
</style>

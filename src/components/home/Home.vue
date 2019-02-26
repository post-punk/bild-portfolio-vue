<template>
  <div>
    <banner/>
    <PopUp/>
    <GetToVideo/>
    <featured/>
    <carousel/>
  </div>
</template>

<script>
import Banner from './Banner.vue'
import GetToVideo from './GetToVideo.vue'
// import PopUp from './PopUp.vue'

export default {
    name: 'Home',
    components: {
        Banner,
        GetToVideo,
        // PopUp
  }
};
</script>

<style>
</style>

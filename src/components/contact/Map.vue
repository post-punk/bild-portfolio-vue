<template>
  <div class="map">
    <iframe :src="contactInfo.map" width="100%" height="100%" frameborder="0" style="border:0" allowfullscreen></iframe>
  </div>
</template>

<script>
import db from '@/firebase/init'


export default {
  name: "Map",
  computed: {
    contactInfo() {
      return this.$store.getters.contactInfo;
    }
  },
  // created() {
  //   // fetching
  //   db.collection('contact-info').get().then(snapshot => {
  //     var contactInfo = [];
  //     snapshot.forEach(doc => {
  //         contactInfo.push(doc.data())
  //     });
  //     this.$store.commit('setContactInfo', contactInfo)
  //   })
  // },
};
</script>

<style scoped>
.map {
  height: 500px;
}
</style>

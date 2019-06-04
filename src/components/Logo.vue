<template>
  <div><img :src="image"/></div>
</template>

<script>
import db from '@/firebase/init';
import firebase from 'firebase';
export default {
  data() {
    return {
      image: null
    }
  },
  computed: {
    logo() {
      return this.$store.getters.logo;
    }
  },
  created () {
        db.collection("CMS").onSnapshot((snapshot) => {
        snapshot.docs.forEach(doc=>{
            this.image = doc.data().logo
      })
    })

        

  }
};
</script>

<style>
</style>

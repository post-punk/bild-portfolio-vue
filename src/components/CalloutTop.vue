<template>
  <div class="container-fluid d-flex align-items-center callout-top" :style="{ backgroundColor: bgColor }">
    <div class="container">
      <h2>{{ calloutTitle }}</h2>
    </div>
  </div>
</template>

<script>
import db from '@/firebase/init';
import firebase from 'firebase';

export default {
  name: "CalloutTop",
  data() {
    return {
      bgColor: ''
    };
  },
  computed: {


  },
  created() {
    db.collection("CMS").onSnapshot((snapshot) => {
        snapshot.docs.forEach(doc=>{
            this.bgColor = doc.data().bgColor;
      })
    })
  },
  props: ['calloutTitle']
};
</script>

<style>
.callout-top {
  color: white;
  /* background-color: #2ecc71; */
  height: 100px;
}
</style>

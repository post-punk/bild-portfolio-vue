<template>
  <div>
    <div class="container-fluid" id="tab-background">
      <div class="container">
        <div class="row">
          <button
            class="tablinks active col-3"
            @click="currentTab = 0"
            :class="{highlight:currentTab == 0}"
            id="defaultOpen"
          >
            <div class="tab-links">
              <img src="../../assets/websites.svg">
              <br>
              <p>WEBSITES</p>
            </div>
          </button>
          <button
            class="tablinks col-3"
            @click="currentTab = 1"
            :class="{highlight:currentTab == 1}"
          >
            <div class="tab-links">
              <img src="../../assets/photo.svg">
              <br>
              <p>PHOTOGRAPHY</p>
            </div>
          </button>
          <button
            class="tablinks col-3"
            @click="currentTab = 2"
            :class="{highlight:currentTab == 2}"
          >
            <div class="tab-links">
              <img src="../../assets/seo.svg">
              <br>
              <p>SEO</p>
            </div>
          </button>
          <button
            class="tablinks col-3"
            @click="currentTab = 3"
            :class="{highlight:currentTab == 3}"
          >
            <div class="tab-links">
              <img src="../../assets/apps.svg">
              <br>
              <p>APPLICATIONS</p>
            </div>
          </button>
        </div>
      </div>
    </div>

   <span class="tab-text container">
      {{ tabText[currentTab].webDescription }}
      <ul>
      <li>
      {{ tabText[currentTab].webDetails1}}
      </li>
      <li>
      {{ tabText[currentTab].webDetails2}}
      </li>
      <li>
      {{ tabText[currentTab].webDetails3}}
      </li>
    </ul>
  </span>
    
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
import db from '@/firebase/init'

export default {
  name: "Tabs",
  data() {
    return {
      currentTab: 0,
      
    };
  },
  created() {
    // fetching
    db.collection('tab-text').get().then(snapshot => {
      var tabText = [];
      snapshot.forEach(doc => {
          tabText.push(doc.data())
      });
      this.$store.commit('setTabText', tabText)
    })
  },
  computed: { 
    tabText() {
    return this.$store.getters.tabText;
     }
  },
  
};
</script>

<style scoped>
.tablinks {
  height: 200px;
  border: none;
  background-color: #efefef;
}
.highlight {
  background-color: #ccc;
}
#tab-background {
    background-color: #ccc;

  background-color: #efefef;
  margin-top: 1em;
}
.tablinks:hover {
  background-color: #dadada;
}
.tablinks:focus {
  outline: none;
}
.tab-text {
  display: block;
  padding-top: 2em;
  height: 200px;
}
li {
  list-style-image: url("../../assets/bullet.svg");
}
.tab-text li {
  padding-top: 1em;
}
</style>

<template>
  <div>
    <callout-top :calloutTitle="calloutTitle"></callout-top>
    <div class="container">
      <div class="row work-nav justify-content-between">
        <div class="work-nav-text col-sm-7 col-12">
          <nav @click="firestoreFilter('all')" :class="{isActive: selectedCategory === 'all'}">ALL</nav>
          <nav class="slash">/</nav>
          <nav
            @click="firestoreFilter('print')"
            :class="{isActive: selectedCategory === 'print'}">PRINT</nav>
          <nav class="slash">/</nav>
          <nav
            @click="firestoreFilter('photo')"
            :class="{isActive: selectedCategory === 'photo'}">PHOTOGRAPHY</nav>
          <nav class="slash">/</nav>
          <nav @click="firestoreFilter('web')" :class="{isActive: selectedCategory === 'web'}">WEB</nav>
          <nav class="slash">/</nav>
          <nav
            @click="firestoreFilter('app')"
            :class="{isActive: selectedCategory === 'app'}">APPLICATIONS</nav>
        </div>
        <div class="col-sm-1 col-12">
          <div class="work-nav-icons">
            <svg
              v-on:click="activeView('grid')"
              :class="{ activeToggle: view == 'grid' }"
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 15 15">
              <path
                id="grid-view"
                data-name="grid view"
                class="cls-1"
                d="M1129,329h6.03v5.929H1129V329Zm8.95,0H1144v6.012h-6.05V329Zm-8.95,8.9h6.01V344H1129v-6.1Zm8.97,0H1144V344h-6.03v-6.1Z"
                transform="translate(-1129 -329)"></path>
            </svg>
            <svg
              v-on:click="activeView('list')"
              :class="{ activeToggle: view == 'list' }"
              id="list-view"
              data-name="list view"
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15.031"
              viewBox="0 0 15 15.031">
              <rect id="_1" data-name="1" class="cls-1" y="12.031" width="15" height="3"></rect>
              <rect id="_2" data-name="2" class="cls-1" y="6" width="15" height="3.031"></rect>
              <rect id="_3" data-name="3" class="cls-1" width="15" height="3.031"></rect>
            </svg>
          </div>
        </div>
      </div>

      <!-- nije bas responsive -->
      <div class="content-wrapper">
        <div class="row grid-container">
          <div class="grid-cell" v-for="(project, index) in projectItems" :key="index">
            <div class="float-left">
              <img :src="project.url">
            </div>

            <div v-if="view === 'list'" class="align-items-center work-text col-md-8 col-12">
              <h4>{{ project.header }}</h4>
              <p>{{ project.text }}</p>
            </div>
          </div>
        </div>
        <div class="load-button-container">
          <button v-show="!noMoreProjects" class="load-more" id="loadMore" :disabled="disabled" @click="loadMore() + delay()">{{buttonText}}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
import CalloutTop from "../CalloutTop.vue";
import db from "@/firebase/init";

export default {
  name: "Work",
  data() {
    return {
      calloutTitle: "CHECK OUT WHAT I CAN DO",
      selectedCategory: "all",
      view: "grid",
      noMoreProjects: false,
      disabled: false,
      timeout: null,
      buttonText: 'Load more'
    };
  },

  created() {
    this.$store.dispatch("displayAll");
  },
  beforeDestroy() {
    this.$store.dispatch('emptyProjects', []);
  },

  computed: {
    projectItems: function() {
      return this.$store.getters.allItems;
    },
    lastVisible() {
      return this.$store.getters.lastVisible;
    }
  },

  components: {
    CalloutTop
  },
  methods: {
    activeView(val) {
      this.view = val;
    },
    loadMore() {
      db.collection("work-items")
        .orderBy("name")
        .startAfter(this.lastVisible)
        .limit(3)
        .get()
        .then(snapshot => {
          var projects = [];
          var lastVisible = snapshot.docs[snapshot.docs.length - 1];
          snapshot.forEach(doc => {
            projects.push(doc.data());
          });
          // if(lastVisible) { 
          //               projects.filter(project => project.id !== doc.id);
          //           }
          if (snapshot.docs.length == 0) {
            this.noMoreProjects = true;
          }
          this.$store.commit("setProjects", projects);
          this.$store.commit("setLastVisible", lastVisible);
        });
    },
    firestoreFilter(val) {
      this.$store.dispatch('emptyProjects', []);
      //varijanta za 'all'
      if (val === "all") {
        db.collection("work-items")
          .orderBy("name")
          .get()
          .then(snapshot => {
            var projects = [];
            snapshot.forEach(doc => {
              projects.push(doc.data());
            });
            this.$store.commit("setProjects", projects);
            this.selectedCategory = "all";
          });
      } else {
        document.getElementById("loadMore").style.display = "none";
        this.$store.dispatch('emptyProjects', []);
        db.collection("work-items")
          .where("category", "==", val)
          .get()
          .then(snapshot => {
            var projects = [];
            snapshot.forEach(doc => {
              projects.push(doc.data());
            });
            this.$store.commit("setProjects", projects);
            this.selectedCategory = val;
          });
      }
    },
    delay() {
        this.disabled = true;
        this.buttonText = 'Loading...';
        // Re-enable after a while..
        this.timeout = setTimeout(() => {
          this.disabled = false;
          this.buttonText = 'Load more';
        }, 700)
    
    }
    
  }
};
</script>

<style scoped>
nav {
  font-size: 1.2em;
  cursor: pointer;
}
h6 {
  cursor: pointer;
}
.work-nav-icons svg:hover {
  cursor: pointer;
}
#grid-view {
  fill: #737373;
  pointer-events: fill;
}
/* #grid-view:hover {
  fill: #2ecc71;
  pointer-events: fill;
} */
/* #list-view {
  fill: #737373;
} */
.activeToggle {
  fill: #2ecc71 !important;
}
/* #list-view:hover {
  fill: #2ecc71;
} */
.work-nav-text {
  color: #737373;
}
.work-nav-text {
  display: flex;
  padding-bottom: 2em;
  padding-top: 3em;
}
.grid-img {
  width: 100%;
  height: 220px;
  margin-top: 1em;
  margin-bottom: 1em;

  height: 220px;
}
.work-nav-icons {
  display: inline-flex;
  justify-content: flex-end;
  align-content: center;
}
.work-nav-icons img:hover {
  cursor: pointer;
}
.work-nav {
  align-items: center;
}
.grid-container {
  max-width: 990px;
  margin: auto;
}
.portfolioList {
  display: grid;
  grid-template-areas: "a b";
  margin-right: -15px;
  margin-left: -15px;
}
.portfolioList img {
  overflow: hidden;
  width: 100%;
  height: 220px;
  margin-top: 1em;
  margin-bottom: 1em;
  object-fit: unset;
}
.portfolioList p {
  text-align: left;
  padding-left: 3em;
  padding-right: 3em;
}
#list-view {
  margin-left: 1em;
}
.portfolioGrid {
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  margin-bottom: 2em;
  padding-bottom: 2em;
}
#all,
#print,
#photography,
#web,
#apps {
  cursor: pointer;
}

.list-images {
  grid-area: "a";
}
.list-paragraph {
  grid-area: "b";
}

.grid-container img {
  -webkit-transition: all 0.3s ease; /* Safari and Chrome */
  -moz-transition: all 0.3s ease; /* Firefox */
  -o-transition: all 0.3s ease; /* IE 9 */
  -ms-transition: all 0.3s ease; /* Opera */
  transition: all 0.3s ease;
  position: relative;
  object-fit: none;
  height: 220px;
  width: 300px;
}
.grid-container img:hover {
  opacity: 0.75;
}
.slash {
  margin-left: 1em;
  margin-right: 1em;
  color: inherit !important;
  cursor: initial;
}
.isActive {
  color: #2ecc71;
}
.imageText {
  display: flex;
  float: right;
}
.list {
  display: block;
}
.grid-cell {
  /* height: 250px; */
  padding: 0.49em
}
.grid-cell img {
}
p {
  /* padding: 1em; */
}
.col-8 {
  position: relative;
  width: 100%;
  padding-left: 0;
  padding-right: 0;
}
.content-wrapper {
  padding-bottom: 2em;
  position: relative;
}
.load-more {
  margin-top: 2em;
  border: none;
  background-color: #2ecc71;
  color: white;
  padding: 1em 1.5em;
  outline: none;
  cursor: pointer;
}
.load-more:active {
  transform: translate(2px, 2px);
}
.load-button-container {
  text-align: center;
}
/* .work-nav-text nav:after {
  content: "/";
}
.work-nav-text nav:last-child:after {
  content: " ";
} */
.work-text {
  /* width: 600px; */
  display: inline-block;
  /* display: inline; */
}
.work-text h4,
.work-text p {
  /* padding-left: 2rem; */
}
</style>

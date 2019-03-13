<template>
  <div>
    <callout-top :calloutTitle="calloutTitle"></callout-top>
    <div class="container">
      <div class="row work-nav justify-content-between">
        <div class="work-nav-text col-sm-7 col-12">
          <h6 id="all" @click="activeFilter = 'all'" :class="{isActive: activeFilter == 'all'}">ALL</h6>
          <h6 id="slash">/</h6>
          <h6
            id="print"
            @click="activeFilter = 'print'"
            :class="{isActive: activeFilter == 'print'}"
          >PRINT</h6>
          <h6 id="slash">/</h6>
          <h6
            id="photography"
            @click="activeFilter = 'photo'"
            :class="{isActive: activeFilter == 'photo'}"
          >PHOTOGRAPHY</h6>
          <h6 id="slash">/</h6>
          <h6 id="web" @click="activeFilter = 'web'" :class="{isActive: activeFilter == 'web'}">WEB</h6>
          <h6 id="slash">/</h6>
          <h6
            id="apps"
            @click="activeFilter = 'app'"
            :class="{isActive: activeFilter == 'app'}"
          >APPLICATIONS</h6>
        </div>
        <div class="col-sm-1 col-12">
          <div class="work-nav-icons">
            <svg
              v-on:click="gridView1()"
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 15 15"
            >
              <path
                id="grid-view"
                data-name="grid view"
                class="cls-1"
                d="M1129,329h6.03v5.929H1129V329Zm8.95,0H1144v6.012h-6.05V329Zm-8.95,8.9h6.01V344H1129v-6.1Zm8.97,0H1144V344h-6.03v-6.1Z"
                transform="translate(-1129 -329)"
              ></path>
            </svg>
            <svg
              v-on:click="listView1()"
              id="list-view"
              data-name="list view"
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15.031"
              viewBox="0 0 15 15.031"
            >
              <rect id="_1" data-name="1" class="cls-1" y="12.031" width="15" height="3"></rect>
              <rect id="_2" data-name="2" class="cls-1" y="6" width="15" height="3.031"></rect>
              <rect id="_3" data-name="3" class="cls-1" width="15" height="3.031"></rect>
            </svg>
          </div>
        </div>
      </div>

      <!-- grid-view markup -->
      <div class="container content-wrapper" v-show="gridView">
        <div class="row no-gutters grid-container">
          <div class="grid-cell" v-for="(project, index) in projectItems" :key="index">
            <img :src="project.url">
          </div>
        </div>
      </div>

      <!-- list-view markup  -->
      <div class="container content-wrapper" v-show="listView">
        <div
          class="row no-gutters grid-container"
          v-for="(project, index) in projectItems"
          :key="index"
        >
          <div class="col-lg-4 col-">
            <div class="grid-cell">
              <img class="float-left" :src="project.url">
            </div>
          </div>

          <div class="col-lg-7 col-">
            <div class="grid-cell d-flex align-items-center">
              <p>{{ project.text }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
import CalloutTop from "../CalloutTop.vue";

export default {
  name: "Work",
  data() {
    return {
      calloutTitle: "CHECK OUT WHAT I CAN DO",
      gridView: true,
      listView: false,
      activeFilter: "all"
      // filteredArr: [],
    };
  },

  computed: {
    // a computed getter
    // drugiNacin: function() {
    //   if (this.activeFilter == 'all') {
    //     return this.projects
    //   }
    //   // `this` points to the vm instance
    //   const result = this.projects.filter(item => {
    //     return item.category == this.activeFilter;
    //   });
    //   return result;
    // },

    projectItems: function() {
      switch (this.activeFilter) {
        case "all": return this.$store.getters.allItems;
        case "web": return this.$store.getters.webItems;
        case "app": return this.$store.getters.appItems;
        case "photo": return this.$store.getters.photoItems;
        case "print": return this.$store.getters.printItems;
      }
    }

    //   projectItems: function() {
    //     if (this.activeFilter == "all") {
    //       return this.$store.getters.allItems;
    //     } else if (this.activeFilter == "web") {
    //       return this.$store.getters.webItems;
    //     } else if (this.activeFilter == 'app') {
    //       return this.$store.getters.appItems;
    //     } else if (this.activeFilter == 'photo') {
    //       return this.$store.getters.photoItems;
    //     } else if (this.activeFilter == 'print') {
    //       return this.$store.getters.printItems;
    //     }
    //   }
    // },
  },

  components: {
    CalloutTop
  },
  methods: {
    listView1() {
      this.gridView = false;
      this.listView = true;
    },
    gridView1() {
      this.listView = false;
      this.gridView = true;
    },

    // categoryFilter(filter) {
    //   this.filter = this.projects.filter(
    //     project => project.category === filter
    //   );
    // this.filter = value;//
    // },
    // allCategories() {
    // this.filter = this.projects;
    // this.value = val;
    // },


    // categoryFilter(val) {
    //   this.activeTab = val;
    //   if (val === "all") {
    //     return (this.filteredArr = this.projects);
    //   }
    //   this.filteredArr = this.projects.filter(function(project) {
    //     return project.category == val;
    //   });
    //   this.activeTab = val;
    // }
  }
};
</script>

<style scoped>
* {
  /* outline: 1px solid teal; */
}
.work-nav-icons svg:hover {
  cursor: pointer;
}
#grid-view {
  fill: #737373;
  pointer-events: fill;
}
#grid-view:hover {
  fill: #2ecc71;
  pointer-events: fill;
}
#list-view {
  fill: #737373;
}
#list-view:hover {
  fill: #2ecc71;
}
.work-nav-text {
  color: #737373;
}
.work-nav-text {
  display: flex;
  padding-bottom: 2em;
  padding-top: 3em;
}
.work-nav-text h6:hover {
  color: #2ecc71;
}

.work-nav-text h6:active {
  color: #2ecc71;
}

.grid-img {
  width: 100%;
  height: 220px;
  margin-top: 1em;
  margin-bottom: 1em;

  height: 220px;
}
.work-nav-icons {
  display: flex;
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
  /* grid-template-columns: 1fr 1fr; */
  margin-right: -15px;
  margin-left: -15px;
  /* margin-bottom: 2em; */
  /* padding-bottom: 2em; */
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
#slash {
  margin-left: 1em;
  margin-right: 1em;
  color: inherit !important;
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
  height: 250px;
  padding: 1em;
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
}
</style>

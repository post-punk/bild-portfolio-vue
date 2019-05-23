<template>
  <div>
    <div class="container-fluid" id="tab-background">
      <div class="container">
        <div class="row">
          <button
            class="tablinks active col-3"
            @click="index = 0"
            :class="{highlight:index == 0}"
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
            @click="index = 1"
            :class="{highlight:index == 1}"
          >
            <div class="tab-links">
              <img src="../../assets/photo.svg">
              <br>
              <p>PHOTOGRAPHY</p>
            </div>
          </button>
          <button
            class="tablinks col-3"
            @click="index = 2"
            :class="{highlight:index == 2}"
          >
            <div class="tab-links">
              <img src="../../assets/seo.svg">
              <br>
              <p>SEO</p>
            </div>
          </button>
          <button
            class="tablinks col-3"
            @click="index = 3"
            :class="{highlight:index == 3}"
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
      {{ tabText[index].description }}
      <ul>
        <li>
        {{ tabText[index].details1}}
        </li>
        <li>
        {{ tabText[index].details2}}
        </li>
        <li>
        {{ tabText[index].details3}}
        </li>
    </ul>
    </span>
    
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
export default {
  name: "Tabs",
  data() {
    return {
      index: 0,
      
    };
  },
  computed: { 
    tabText() {
    return this.$store.getters.tabText;
     }
  }
};
</script>

<style scoped>
.tablinks {
  height: 200px;
  border: none;
  background-color: #efefef;
  cursor: pointer;
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
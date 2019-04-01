<template>
  <div>
    <callout-top :calloutTitle="calloutTitle"></callout-top>
    <div class="container" v-for="(article, index) in blog" :key="index">
      <h2>{{ article.header }}</h2>
      <h5>{{ article.date }}</h5>
      <img :src="article.image" alt>
      <p v-html="article.text"></p>
      <hr>
    </div>
    <div class="load-button-container">
      <button v-if="!noMoreProjects" class="load-more" @click="loadMore()">Load more</button>
    </div>
  </div>
</template>

<script>
import CalloutTop from "./CalloutTop.vue";
import db from "@/firebase/init";

export default {
  data() {
    return {
      calloutTitle: "BLOG",
      noMoreProjects: false
    };
  },
  created() {
    this.$store.dispatch("loadMore");
  },
  computed: {
    blog: function() {
      return this.$store.getters.blog;
    },
    lastVisible() {
      return this.$store.getters.lastVisible;
    }
  },
  components: {
    CalloutTop
  },
  methods: {
    loadMore() {
      db.collection("blog")
        .startAfter(this.lastVisible)
        .limit(1)
        .get()
        .then(snapshot => {
          var blog = [];
          var lastVisible = snapshot.docs[snapshot.docs.length - 1];
          snapshot.forEach(doc => {
            blog.push(doc.data());
          });
          if (snapshot.docs.length == 0) {
            this.noMoreProjects = true;
          }

          this.$store.commit("setBlog", blog);
          this.$store.commit("setLastVisible", lastVisible);
        });
    }
  }
};
</script>

<style scoped>
p {
  margin-top: 2em;
  padding-bottom: 1em;
}
h2,
h5 {
  padding-top: 1em;
}
h5 {
  padding-bottom: 0.5em;
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
  padding-bottom: 25px;
}
</style>

<template>
  <div>
    <callout-top :calloutTitle="calloutTitle"></callout-top>
    <div>
      <div class="container">
        <div class="row justify-content-end">
          <button v-if="user" class="addNew col-3">
            <router-link :to="{ path: '/addNewPost' }">Add new blog post</router-link>
          </button>
        </div>
      </div>
      <br>
      <div class="container">
        <div class="row blog-list" v-for="(article, index) in blog" :key="index">
          <img class="col-4 align-self-center" :src="article.image" alt>
          <div class="col-6">
            <router-link :to="{ path: '/blog/' + article.slug }">
              <h2>{{ article.header }}</h2>
            </router-link>
            <time :datetime="article.date">{{ article.date | formatDate() }}</time>
            <p v-html="article.text.substring(0, trimAmount) + '...'"></p>
            <router-link :to="{ path: '/ViewPost/' + article.slug }">
              <p id="read-more">Read more...</p>
            </router-link>
          </div>

          <button
            type="button"
            @click="deleteBlogPost(article.id)"
            class="close col-2 align-self-start"
            v-if="user"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>

          <button
            type="button"
            class="edit col-2 align-self-start"
            @click="editBlogPost"
            v-if="user"
            aria-label="Edit"
          >
            <router-link :to="{ path: '/editPost/' + article.id}">Edit blog post</router-link>
          </button>
        </div>
        <div class="load-button-container">
          <button v-if="!noMoreProjects" class="load-more" @click="loadMore()">Load more</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CalloutTop from "../CalloutTop.vue";
import db from "@/firebase/init";
import slugify from "slugify";
import moment from 'moment';
import Datepicker from 'vuejs-datepicker';


export default {
  data() {
    return {
      calloutTitle: "BLOG",
      // noMoreProjects: false,
      // blogCount: 5,
      trimAmount: 800,
    };
  },
  created() {
    this.$store.dispatch("loadBlog");
  },
  computed: {
    blog: function() {
      return this.$store.getters.blog;
    },
    lastBlogPost() {
      return this.$store.getters.lastBlogPost;
    },
    user() {
      return this.$store.getters.getUser;
    },
    noMoreProjects() {
      return this.$store.getters.noMoreProjects;
    },
    user() {
      return this.$store.getters.getUser;
       }
    // blogCount() {
    //   return this.$store.getters.blogCount;
    // }
  },
  filters: {
      formatDate(date) {
        return moment(date).format("DD/MM/YYYY");
   },
  },
  components: {
    CalloutTop,
    moment,
    Datepicker
    // addNewPost
  },
  methods: {
    loadMore() {
      this.$store.dispatch("loadMore");
      // db.collection("blog")
      //   .startAfter(this.lastBlogPost)
      //   .limit(1)
      //   .get()
      //   .then(snapshot => {
      //     var blog = [];
      //     snapshot.forEach(doc => {
      //       blog.push({ ...doc.data(), id: doc.id });
      //     });
      //     // this.blogCount -= 1;
      //     // if (this.blogCount === 1) {
      //     //   this.noMoreProjects = true;
      //     // }
      //     this.$store.commit("setBlog", blog);
      //     });
    },
    deleteBlogPost(uid) {
      this.$store.dispatch("deleteArticle", { uid });
    },
    editBlogPost(uid) {
      this.$store.dispatch('editArticle', {
        header: article.header,
        date: article.date,
        image: article.image,
        text: article.text
       })
    }
    
    
  }
};
</script>

<style scoped>
.edit {
  padding: 0.5rem;
  background-color: #2ecc71;
  color: white;
  margin-bottom: 2em;
  border: none;
  outline: none;
  cursor: pointer;
}
.close {
  font-size: 3em;
  outline: none;
  color: rgb(231, 73, 73);
}
.container {
  position: relative;
}
.btn-wrapper {
  right: 0px;
  position: absolute;
  display: block;
}
.addNew {
  margin-top: 1em;
  border: none;
  background-color: #2ecc71;
  color: white;
  padding: 0.5em 0.5em;
  outline: none;
  cursor: pointer;
  font-size: 16px;
}
.addNew:active {
  transform: translate(2px, 2px);
}
.blog-list {
  border-bottom: 1px solid #ccc;
}
time {
  font-weight: bold;
}
img {
  height: 300px;
  float: left;
  object-fit: contain;
}
p {
  margin-top: 2em;
  padding-bottom: 1em;
}
h2,
time {
  padding-top: 1em;
}
h5 {
  padding-bottom: 0.5em;
}
h2:hover {
  color: #737373;
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
  display: block;
  margin: auto;
}
#read-more {
  font-weight: bold;
  color: firebrick;
}
</style>

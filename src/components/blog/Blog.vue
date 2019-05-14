<template>
  <div>
    <callout-top :calloutTitle="calloutTitle"></callout-top>
    <div>
      <div class="container">
        <div class="row justify-content-end">
          <button v-if="user" class="btn btn-info col-2">
            <router-link :to="{ path: '/addNewPost' }">Add new blog post</router-link>
          </button>
        </div>
      </div>
      <br>
      <div class="container">
        <div class="row blog-list" v-for="(article, index) in blog" :key="index">
          <img class="col-md-4 align-self-center" :src="article.image" alt>
          <div class="col-md-6">
            <router-link :to="{ path: '/blog/' + article.slug }">
              <h3>{{ article.header }}</h3>
            </router-link>
            <time :datetime="article.date">{{ article.date | formatDate }}</time>
            <p v-html="article.text.substring(0, trimAmount) + '...'"></p>
            <router-link :to="{ path: '/blog/' + article.slug }">
              <p id="read-more">Read more...</p>
            </router-link>
          </div>

          <!-- za delete modal -->
          <button type="button" class="btn btn-danger main-delete-button" data-toggle="modal" data-target="#exampleModal">
            Delete post
          </button>
            <!-- Modal itself -->
          <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Are you sure you want to delete this blog post?</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <div class="p">This action cannot be undone. There is no God, but Allah. Ph'nglui mglw'nafh Cthulhu R'lyeh wgah'nagl fhtagn</div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">No</button>
                  <button type="button" class="btn btn-primary" data-dismiss="modal" @click="deleteBlogPost(article.id)">Yes</button>
                </div>
              </div>
            </div>
          </div>

              <!-- vuebootstrapmodal -->
              <!-- <div>
                <b-button id="show-btn" @click="$bvModal.show('bv-modal-example')">Open Modal</b-button>

                <b-modal id="bv-modal-example" hide-footer>
                  <template slot="modal-title">
                    Using <code>$bvModal</code> Methods
                  </template>
                  <div class="d-block text-center">
                    <h3>Hello From This Modal!</h3>
                  </div>
                  <b-button class="mt-3" block @click="$bvModal.hide('bv-modal-example')">Close Me</b-button>
                </b-modal>
              </div> -->


          <!-- <button
            type="button"
            @click="deleteBlogPost(article.id)"
            class="close col-2 align-self-start"
            v-if="user"
            aria-label="Close"
          > -->
            <!-- <span aria-hidden="true">&times;</span> -->
          <!-- </button> -->
          
          <!-- Button trigger modal -->

          <button
            type="button"
            class="btn btn-success col-2 align-self-start"
            @click="editBlogPost"
            v-if="user"
            aria-label="Edit">
            <router-link :to="{ path: '/editPost/' + article.id}">Edit blog post</router-link>
          </button>
        </div>
        <div class="load-button-container">
          <button v-if="!noMoreProjects" class="load-more" @click="loadMore() + delayButton()" :disabled="disabled">{{buttonText}}</button>
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
// import Filters from '@/filters.js'

export default {
  data() {
    return {
      calloutTitle: "BLOG",
      // noMoreProjects: false,
      // blogCount: 5,
      trimAmount: 300,
      disabled: false,
      timeout: null,
      buttonText: 'Load more'
    }
  },
  created() {
    this.$store.dispatch("loadBlog");
  },
  beforeDestroy () {
     // clear the timeout before the component is destroyed
     clearTimeout(this.timeout)
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
      }
  },
  components: {
    CalloutTop,
    moment,
    Datepicker
  },
  methods: {
    loadMore() {
      this.$store.dispatch("loadMore");
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
    },
    delayButton() {
        this.disabled = true;
        this.buttonText = 'Loading...';
        // Re-enable after a while..
        this.timeout = setTimeout(() => {
          this.disabled = false;
          this.buttonText = 'Load more';
        }, 700)
    
    }
  }
}
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
.btn-info {
  margin-top: 1em;
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
h3,
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
button:disabled {
  background-color:gray;
}
.modal-header, .modal-body {
  color: gray;
  text-align: center
}
.modal {
  position: absolute;
   top: -70px;
   z-index: 10040;
   overflow: auto;
   overflow-y: auto;
}
button, .btn {
  cursor: pointer;
}
.main-delete-button {
  height: 3rem;
}
.btn-success {
    margin-bottom: 1em;
}
.btn-danger {
  margin-top: 1rem;
}
</style>

<template>
  <div>
    <callout-top :calloutTitle="calloutTitle"></callout-top>
    <div>
      <div class="container">
                <!-- <input type="text" placeholder="Search blogs" v-model="search" id="searchInputField"> -->

        <div class="row justify-content-end">
          <button v-if="user" class="btn btn-info col-2" @click="pushToAddNewPost">Add new blog post</button>
          <button v-if="user" class="btn btn-info col-2" id="sort-btn" @click="orderByDate((orderBy != 'desc') ? 'desc' : 'asc')">Sort by date</button>

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
            <time :datetime="article.date">{{ article.date.toDate() | formatDate }}</time>
            <p v-html="article.text.substring(0, trimAmount) + '...'"></p>
            <router-link :to="{ path: '/blog/' + article.slug }">
              <p id="read-more">Read more...</p>
            </router-link>
          </div>

          <!-- za delete modal -->
          <!-- <button type="button" class="btn btn-danger main-delete-button" data-toggle="modal" data-target="#exampleModal"> -->
            <!-- Delete post -->
          <!-- </button> -->
            <!-- Modal itself -->
          <!-- <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true"> -->
            <!-- <div class="modal-dialog" role="document">
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
                <div class="modal-footer"> -->
                  <!-- <button type="button" class="btn btn-secondary" data-dismiss="modal">No</button> -->
                  <!-- <div class="container"> -->

                    <button class="delete-btn" 
                    @click="deleteArticle(article.id)">Delete</button> 

                    <!-- <button type="button" class="btn btn-primary" data-dismiss="modal" @click="deleteBlogPost(article.id)">Delete post</button> -->
                  <!-- </div> -->
                <!-- </div>
              </div>
            </div>
          </div> -->

          <button id="edit-post-btn"
            type="button"
            class="btn btn-success col-2 align-self-start"
            v-if="user"
            aria-label="Edit"
            @click="pushToEditArticle(article.id)">
            Edit blog post
          </button>
        </div>
        <div class="load-button-container">
          <button v-if="!noMoreArticles" class="load-more" @click="loadMore(); delay()" :disabled="disabled">{{buttonText}}</button>
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
import formatDate from '../../filters/formatDate.js'
import uppercase from '../../filters/uppercase';
import Firebase from 'firebase'
import Prompt from '../other/Prompt';

export default {
  data() {
    return {
      calloutTitle: "BLOG",
      trimAmount: 300,
      disabled: false,
      timeout: null,
      buttonText: 'Load more',
      modalHeader: 'Are you sure?',
      modalText: 'This action cannot be undone.',
      cancelButton: 'No',
      dangerButton: 'Yes',
      buttonInfo: 'Delete this post'
    }
  },
  beforeCreate() {
    this.$store.dispatch("loadBlog", {
      loadMore: false
    });
  },
  beforeDestroy() {
     // clear the timeout before the component is destroyed
     clearTimeout(this.timeout);
     this.$store.dispatch('emptyBlog', []);
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
    noMoreArticles() {
      return this.$store.getters.noMoreArticles;
    },
    user() {
      return this.$store.getters.getUser;
      },
    orderBy() {
      return this.$store.getters.getOrderBy;
    }
    // blogCount() {
    //   return this.$store.getters.blogCount;
    // }
  },
  filters: {
    formatDate,
    uppercase
  },
  components: {
    CalloutTop,
    moment,
    Datepicker,
    Prompt
  },
  methods: {
    loadMore() {
      this.$store.dispatch("loadBlog", {
        loadMore: true
      });
    },
    deleteBlogPost(articleForDeletion) {
      console.log(articleForDeletion)
      this.$store.dispatch("deleteArticle", { 
        id: articleForDeletion,
        })
      ;
    },
    editBlogPost(uid) {
      this.$store.dispatch('editArticle', {
        header: article.header,
        date: article.date,
        image: article.image,
        text: article.text,
       })
    },
    delay() {
        this.disabled = true;
        this.buttonText = 'Loading...';
        // Re-enable after a while..
        this.timeout = setTimeout(() => {
          this.disabled = false;
          this.buttonText = 'Load more';
        }, 500)
    
    },
    orderByDate(val) {
      this.$store.commit('setOrderBy', val);
      this.$store.dispatch("loadBlog");
      this.$store.commit('setNoMoreArticles', false);

    },
    pushToAddNewPost() {
      this.$router.push({ path: 'AddNewPost'})
    },
    pushToEditArticle(article) {
      this.$router.push({ path: '/editPost/' + article})
    },
    deleteArticle(uid) {
      this.$store.dispatch('modalInfo', {
        buttonText: this.buttonText,
        modalHeader: this.modalHeader,
        modalText: this.modalText,
        cancelButton: this.cancelButton,
        dangerButton: this.dangerButton,
        buttonInfo: this.buttonInfo,
        onSubmit: () => {
          // console.log(arg)
          this.$store.dispatch("deleteArticle", { 
        id: uid,
        })
        }
      })
    }
  }
}
</script>

<style scoped>
#edit-post-btn {
  margin-top: 1rem;
}
#searchInputField {
  width: 100%;
  height: 2.5rem;
  border-radius: 4px;
  margin-top: 1rem;
}
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
h3:hover {
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
.btn-primary, .btn-primary:active { 
  background-color: indianred !important; 
  outline: none;
  border: none;
  }
.btn-primary:hover {
  background-color: rgb(121, 54, 54) !important;
}

    
    .container .btn-primary {
      margin-top: 1rem;
      margin-left: -15px;
    }
    #sort-btn {
      margin: 1rem;
    }
  .delete-btn {
    height: 2em;
    background-color: rgb(155, 0, 0);
    color: white;
    border: none;
    border-radius: 5px;
    margin-top: 1em;;
  }
</style>

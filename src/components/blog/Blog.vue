<template>
  <div>
    <callout-top :calloutTitle="calloutTitle"></callout-top>
    <div>
      <div class="container">
          <input class="form-control" id="blog-search" @keyup="searchFilter" placeholder="Search blogs" v-model="search" >
        <div class="row justify-content-end">
          <button v-if="user" class="btn btn-info col-2" @click="pushToAddNewPost">Add new blog post</button>
          <button v-if="user" class="btn btn-info col-2" id="sort-btn" @click="orderByDate((orderBy != 'desc') ? 'desc' : 'asc')">Sort by date</button>
        </div>
      </div>
      <br>
      <div class="container">
        <div class="row blog-list" v-for="(article, index) in filteredBlogs" :key="index">
          <img class="col-md-4 align-self-center" :src="article.image" alt>
          <div class="col-md-6">
            <router-link :to="{ path: '/blog/' + article.slug }">
              <h3>{{ article.header | uppercase }}</h3>
            </router-link>
            <p>Published on: <time :datetime="article.date">{{ article.date.toDate() | formatDate }}</time></p>
            <p v-html="article.text.substring(0, trimAmount) + '...'"></p>
            <router-link :to="{ path: '/blog/' + article.slug }">
              <p id="read-more">Read more...</p>
            </router-link>
           Submitted by: <p id='blog-username'>{{article.submittedByUsername}}</p>
          </div>
          <div class="col-md-2">
            <button class="delete-btn" 
            @click="deleteArticle(article.id)">Delete</button> 
             <button id="edit-post-btn"
            type="button"
            class="btn btn-success"
            v-if="user"
            aria-label="Edit"
            @click="pushToEditArticle(article.id)">
            Edit
          </button>
         </div>
          <!-- {{article.submittedBy}} -->
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
      search: ''
    }
  },
  beforeCreate() {
    this.$store.dispatch("loadBlog", {
      loadMore: false
    });
    this.$store.commit('setNoMoreArticles', false);
  },
  beforeDestroy() {
     // clear the timeout before the component is destroyed
     clearTimeout(this.timeout);
     this.$store.dispatch('emptyBlog', []);
     this.$store.dispatch("noLimit", false);
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
    },
    filteredBlogs: function() {
        return this.blog.filter(article => {
          // true (prolazi filter, propusta se kroz filteredBlogs) ili false
          return article.header.toLowerCase().includes(this.search.toLowerCase());
        });
      }
  },
  filters: {
    formatDate,
    uppercase,
    
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
    searchFilter() {
        if (this.search.length > 0) {
      this.$store.dispatch("noLimit", true);
      this.$store.dispatch("loadBlog");
      this.$store.commit('setNoMoreArticles', true);
        } else {
      this.$store.dispatch("noLimit", false);
      this.$store.dispatch("loadBlog");
      this.$store.commit('setNoMoreArticles', false);
        }
    },
    // deleteBlogPost(articleForDeletion) {
    //   console.log(articleForDeletion)
    //   this.$store.dispatch("deleteArticle", { 
    //     id: articleForDeletion,
    //     })
    //   ;
    // },
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
    deleteArticle(article) {
      this.$store.dispatch('modalInfo', {
        deleteModal: true,
        onSubmit: () => {
          this.$store.dispatch("deleteArticle", { 
        id: article,
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
  display: block
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
  #blog-username {
    font-weight: bold;
    display: inline
  }
  #blog-search {
    margin-top: 20px;
    width: 100%
  }
</style>

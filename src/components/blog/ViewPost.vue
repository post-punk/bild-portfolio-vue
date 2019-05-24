<template>
    <div>
        <!-- <callout-top :calloutTitle="calloutTitle"></callout-top> -->
        <div class="container">
            <hr class="blog-hr-top">
            <div class="admin-tools d-flex justify-content-end">
                <button type="button" class="btn btn-light" @click="$router.go(-1)">Back</button>
                <router-link :to="{ path: '/editPost/' + id}"><button type="button" class="btn btn-success">Edit</button></router-link>
                <div v-if="user">
                    
                    <button type="button" class="btn btn-danger" @click="deleteBlogPost(id)">Delete</button>
                </div>
            </div>
            <h1>{{ header }}</h1>
            <time :datetime="date">{{ date | formatDate() }}</time>
            <img class="blog-image" :src="image" alt="">
            <div class="text-wrapper">
                <p v-html="text"></p>
            </div>
        </div>
    </div>
</template>

<script>
import firebase from 'firebase';
import db from '@/firebase/init';
// import CalloutTop from "../CalloutTop.vue";
import slugify from 'slugify';
import moment from 'moment';
import Datepicker from 'vuejs-datepicker';
import formatDate from '../../filters/formatDate.js'

export default {
    data() {
    return {
        // calloutTitle: null,
        header: null,
        date: null,
        image: null,
        text: null,
        id: null,
        slug: null
        }
    },
created(){
    // console.log(this.$route.params.slug)
    db.collection("blog").where("slug", "==", this.$route.params.slug)
    .onSnapshot((snapshot) => {
        snapshot.docs.forEach(doc=>{
            this.header = doc.data().header;
            this.date = doc.data().date;
            this.image = doc.data().image;
            this.text = doc.data().text;
            this.slug = doc.data().slug;
            this.id = doc.id;
        })
      
    })
},
components: {
    //    CalloutTop,
    moment,
    Datepicker
   },
computed: {
    user() {
      return this.$store.getters.getUser;
    },
},
methods: {
    deleteBlogPost(uid) {
      this.$store.dispatch("deleteArticle", { uid });
      this.$router.push({ path: '/blog' })
        },
    editPost(id) {
    this.$store.dispatch('editPost', { 
        id: this.id,
        header: this.header,
        date: this.date,
        image: this.image,
        text: this.text,
        editPost: true
        });
    this.$router.push({ path: '/blog' })
        },
        editOrRedirect() {
      if (user) {
        this.$router.push({ path: "/editPost/" + article.id });
      } else {
        this.$router.push({ path: "/login" });
      
      }
    },
    },
filters: {
    formatDate
  },
    
}

</script>

<style>
h1 {
    color: #737373;
    margin-top: 0.5em;
    margin-bottom: 0.5em;
}
time {
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: 2em;
}
.blog-image {
    margin-top: 2em;
    margin-left: auto;
    margin-right: auto;
    display: block;
}
.text-wrapper {
    padding-bottom: 3em;
    padding-top: 3em;
}

.admin-tools {
    /* height: 50px; */
}
.admin-tools button {
    margin-left: 1em;
    cursor: pointer;
}
.close {
    outline: none !important;
    cursor: pointer;
    color: rgb(231, 73, 73);
}
.close:hover {
    color: indianred
}
.close:active {
    transform: translate(2px, 2px);
}
.close span {
    /* font-size: 5rem; */
}
.admin-tools button {
    cursor: pointer;
}
.edit {
    font-size: 1em;
}
.blog-hr-top {
    padding-bottom: 2em;
}
</style>

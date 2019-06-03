<template>
    <div>
        <callout-top :calloutTitle="calloutTitle"></callout-top>
        <div class="container">
            <div class="row" v-if="user">
                <div class="col-xl-4 ">
                    <img :src="user.image" alt="" @click="pushToEditProfile">
                </div>
                <div class="col-xl-8">
                    <!-- {{this.$route.params.name}} -->
                    First name: <p>{{user.firstName}}</p>
                    Last name: <p>{{user.lastName}}</p>
                    email: <p>{{user.email}}</p>
                    <!-- <p>details: {{details}}</p> -->
                    <!-- <button class="d-flex align-content-center btn btn-info" > -->
                        <a id="contact-btn" class="align-content-center btn btn-info" v-bind:href="'mailto:' + user.email">Contact {{user.email}} </a>
                    <!-- </button> -->
                    <button id="edit-btn" @click="pushToEditProfile">Edit</button>
                </div>
            </div>
                  <h3>Posts by this user:</h3>
        </div>

        <div v-for="(article, index) in blog" :key="index" class="container blog-list">
            <router-link :to="{ path: '/blog/' + article.slug }">
                <h4>{{ article.header }}</h4>
            </router-link>
            <router-link :to="{ path: '/blog/' + article.slug }">
                <img class="col-md-4 align-self-center" :src="article.image" alt>
            </router-link>
            <p v-html="article.text.substring(0, trimAmount) + '...'"></p>
            <!-- {{article.submittedBy}} -->
        </div>
    </div>
</template>

<script>
import CalloutTop from "../CalloutTop.vue";

export default {
data() {
    return {
         calloutTitle: "Your profile",
         trimAmount: 300,
        }
    },
    components: {
       CalloutTop,
   },
   methods: {
       pushToEditProfile() {
       this.$router.push({ path: '/EditProfile/' + this.user.firstName })
       }
   },
   computed: {
       user() {
           return this.$store.getters.getUser;
       },
       blog: function() {
        return this.$store.getters.blog;
    },
   },
   created() {
    this.$store.dispatch("loadBlog", {
      filteredByUser: true
    });
  },
  beforeDestroy() {
     // clear the timeout before the component is destroyed
     clearTimeout(this.timeout);
     this.$store.dispatch('emptyBlog', []);
    },
       
   
}
</script>

<style scoped>
h3 {
    margin-top: 2rem;
    
}
h4:hover {
    color: #322f2f;
    cursor: pointer;
}
.blog-list {
    border: 1px solid rgba(0,0,0,0.33);
    /* border-radius: 5px; */
    /* height: 500px; */
    padding-bottom: 100px;
}
.container {
    margin-top: 2rem;
}
img {
    width: 300px;
    height: auto;
    float: left;
    border-radius: 12px;
    z-index: 0;
    margin-bottom: 1em;
    cursor: pointer;
}
.col-xl-8 {
    /* border: 1px solid #aaa; */
    border-radius: 12px;
    height: 280px;
    padding-top: 1em;
    padding-left: 2em;
    /* margin-left: -0.8em; */
    -webkit-box-shadow: 6px 7px 8px 5p rgba(0,0,0,0.59);
    -moz-box-shadow: 6px 7px 8px 5p rgba(0,0,0,0.59);
    box-shadow: 6px 7px 8px 5px rgba(0,0,0,0.59);
}
button {
    margin-bottom: 1em;
    cursor: pointer
}
p {
    font-weight: bold;
}
#contact-btn {
    width: 40%;
    display: block;
}
#edit-btn {
    margin-top: 1em;
}
</style>

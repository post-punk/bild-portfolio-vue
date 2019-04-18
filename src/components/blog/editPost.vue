<template>
    <div>
        <callout-top :calloutTitle="calloutTitle"></callout-top>
        <div class="container">
            <form action="">
                <input class="form-control" placeholder="Enter title" v-model="header">
                <input class="form-control" type="date" placeholder="Enter date" v-model="date">
                <input class="form-control"  placeholder="Enter image URL" v-model="image">
                <vue-ckeditor v-model="text"></vue-ckeditor>
                <button type="button" class="btn btn-primary" @click="editPost(id)">Submit</button>
                <!-- <h1>{{ this.$route.params.id }}</h1> -->
            </form>
        </div>
    </div>
</template>

<script>
import CalloutTop from "../CalloutTop.vue";
import db from '@/firebase/init';
import firebase from 'firebase';
import 'firebase/auth';
import VueCkeditor from 'vue-ckeditor2';

export default {
 data() {
    return {
        calloutTitle: "Edit post",
        header: null,
        date: null,
        image: null,
        text: null,
        id: null
        }
    },
    created(){
       db.collection("blog").doc(this.$route.params.id)
       .onSnapshot((doc) => {
            this.header = doc.data().header;
            this.date = doc.data().date;
            this.image = doc.data().image;
            this.text = doc.data().text;
            this.id = doc.id;
       })
   },
    mounted(){
    //    CKEDITOR.replace( 'ckeditor' )
   },
   components: {
       CalloutTop,
       VueCkeditor
   },
   methods: {
       editPost() {
        this.$store.dispatch('editPost', { 
            id: this.id,
            header: this.header,
            date: this.date,
            image: this.image,
            text: this.text 
            });
            this.$router.go(-1)
        // this.$router.push({ path: '/blog' })
       }
   }
}
</script>

<style>
form {
    margin: 0.5em;
    padding: 1em;
}
.btn-primary  {
    background-color: #2ecc71;
    border-color: #2ecc71;
    margin-top: 1em;
}
.form-control {
    width: 60%;
    margin-top: 1em;
    margin-bottom: 1em;
}
input[type="date"]:before {
    content: attr(placeholder) !important;
    /* color: #aaa; */
    margin-right: 0.5em;
  }
</style>

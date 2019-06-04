<template>
    <div>
        <callout-top :calloutTitle="calloutTitle"></callout-top>
        <div class="container">
            <form action="">
                <!-- {{this.$route.params.id}} -->
                <h6>Title:</h6>
                <input class="form-control" placeholder="Enter title" v-model="header">
                <!-- <h6>Date:</h6> -->
                <!-- <datepicker placeholder="Enter date" class="datepicker"  v-model="date" type="datetime-local"></datepicker> -->
                <h6>Image URL:</h6>
                <input class="form-control"  placeholder="Enter image URL" v-model="image">
                <h6>Text:</h6>
                <vue-ckeditor v-model="text"></vue-ckeditor>
                <button type="button" class="btn btn-primary submit" @click="editPost(id)">Submit</button>
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
import Datepicker from 'vuejs-datepicker';
// import moment from 'moment';

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
    async created(){
      await db.collection("blog").doc(this.$route.params.id)
       .onSnapshot((doc) => {
            this.header = doc.data().header;
            this.date = doc.data().date;
            this.image = doc.data().image;
            this.text = doc.data().text;
            this.id = doc.id;
       })
   },
    
   components: {
       CalloutTop,
       VueCkeditor,
       Datepicker,
    //    moment
   },
   methods: {
       editPost() {
        // var date1 = moment(this.date).utc().startOf('day').format();
        // var date2 = (new Date(date1));
           const post = { 
            id: this.id,
            header: this.header,
            date: this.date,
            image: this.image,
            text: this.text,
            editPost: true
            }
        this.$store.dispatch('editPost', post);
           
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
  .submit {
      margin-top: 1rem;
  }
    /* datepicker input field */
  .vdp-datepicker input {
    box-sizing: border-box;
    padding: 0.75em 0.5em;
    font-size: 100%;
    border: 1px solid #ccc;
    width: 60%;
    border: 1px solid #ced4da;
    border-radius: .25rem;
}
</style>

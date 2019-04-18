<template>
    <div>
        <callout-top :calloutTitle="calloutTitle"></callout-top>
        <div class="container">
            <form action="">
                <!-- {{slugifyTitle(header)}} -->
                <input class="form-control" placeholder="Enter title" v-model="header">
                <input class="form-control" type="date" placeholder="Enter date" v-model="date">
                <input class="form-control"  placeholder="Enter image URL" v-model="image">
                <textarea name="ckeditor" id="ckeditor" cols="90" rows="10" v-model="text" placeholder="Enter title"></textarea>
                <button type="button" class="btn btn-primary" @click="addNewPost()">Submit</button>
            </form>
        </div>
    </div>
</template>

<script>
import CalloutTop from "../CalloutTop.vue";
import db from '@/firebase/init';
import firebase from 'firebase/app';
import 'firebase/auth';
import slugify from 'slugify';

export default {
 data() {
    return {
        calloutTitle: "Add new blog post",
        header: null,
        date: null,
        image: null,
        text: null,
        slug: null
        }
    },
    mounted(){
       CKEDITOR.replace( 'ckeditor' )
   },
   components: {
       CalloutTop,
   },
   methods: {
       addNewPost() {
        this.slug = slugify(this.header, {
            replacement: '-',
            remove: /[$*_=~.,()'"!\-:@]/g,
            lower: true
        })
        // console.log(this.slug)
           this.$store.dispatch('addNewPost', {
                header: this.header,
                date: this.date,
                image: this.image,
                text: CKEDITOR.instances.ckeditor.getData(),
                slug: this.slug 
           });
           this.$router.push({ path: '/blog' })
       },
        // slugifyTitle(val){
        //    if(val){
        //        this.slug = slugify(val, {
        //        replacement: '-',
        //        remove: /[$*_=~.,()'"!\-:@]/g,
        //        lower: true
        //         })
        //    return this.slug
        //     }
        // }
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

<template>
    <div>
        <callout-top :calloutTitle="calloutTitle"></callout-top>
        <div class="container">
            <form action="">
                <!-- {{slugifyTitle(header)}} -->
                <datepicker placeholder="Enter date" class="datepicker"  v-model="date" type="datetime-local"></datepicker>
                <input class="form-control" placeholder="Enter title" v-model="header">
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
import moment from 'moment';
import Datepicker from 'vuejs-datepicker';


export default {
 data() {
    return {
        calloutTitle: "Add new blog post",
        header: null,
        date: Date.now(),
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
       moment,
       Datepicker
   },
   props: {

},
   methods: {
       addNewPost() {
        this.slug = slugify(this.header, {
            replacement: '-',
            remove: /[$*_=~.,()'"!\-:@]/g,
            lower: true
        })
        var date1 = moment(this.date).utc().startOf('day').format();
        var date2 = (new Date(date1));
        const post = {
                header: this.header,
                date: date2,
                image: this.image,
                text: CKEDITOR.instances.ckeditor.getData(),
                slug: this.slug 
            }
        // console.log(this.slug)
        
           this.$store.dispatch('addNewPost',  post
                // header: this.header,
                // date: date2,
                // image: this.image,
                // text: CKEDITOR.instances.ckeditor.getData(),
                // slug: this.slug 
           );
           
           this.$router.push({ path: '/blog' });
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
input[type="datetime-local"]:before {
    content: attr(placeholder) !important;
    /* color: #aaa; */
    margin-right: 0.5em;
  }
.datepicker {
    /* display: block;
    width: 100%;
    height: calc(2.25rem + 2px);
    padding: .375rem .75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out; */
  }
.vdp-datepicker input {
    box-sizing: border-box;
    padding: 0.75em 0.5em;
    font-size: 100%;
    border: 1px solid #ccc;
    width: 60%;
    border: 1px solid #ced4da;
    border-radius: .25rem;
}

.submit {
      margin-top: 1rem;
  }
</style>

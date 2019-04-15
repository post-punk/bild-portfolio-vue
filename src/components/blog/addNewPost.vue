<template>
    <div>
        <callout-top :calloutTitle="calloutTitle"></callout-top>
        <div class="container">
            <form action="">
                <input class="form-control" placeholder="Enter title" v-model="header">
                <!-- //date -->
                <input class="form-control" type="date" placeholder="Enter date" v-model="date">

                <!-- <div class="container">
                    <div class="row">
                        <div class='col-sm-6'>
                            <input type='text' class="form-control" id='datetimepicker4' />
                        </div>
                        <script type="text/javascript">
                            $(function () {
                                $('#datetimepicker4').datetimepicker();
                            });
                        </script>
                    </div>
                </div> -->

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

export default {
 data() {
    return {
        calloutTitle: "Add new blog post",
        header: null,
        date: null,
        image: null,
        text: null
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
           this.$store.dispatch('addNewPost', {
                header: this.header,
                date: this.date,
                image: this.image,
                text: CKEDITOR.instances.ckeditor.getData(),
           });
           this.$router.push({ path: '/blog' })
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

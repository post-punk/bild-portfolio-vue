<template>
    <div>
        <callout-top :calloutTitle="calloutTitle"></callout-top>
        <div class="container">
            <div class="row">
                <div class="col-4">
                    <img :src="user.image" alt="">
                </div>
                <div class="col-6">
                    {{user}}
                    <!-- {{this.$route.params.name}} -->
                    <input v-model="firstName">first name
                    <input v-model="lastName">last name
                    <!-- <input>details -->
                    <button @click="editUser(user)" class="d-flex align-content-center btn btn-info" >
                        submit changes
                    </button>
                    <button @click="$router.go(-1)">go back</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CalloutTop from "../CalloutTop.vue";
import db from '@/firebase/init'
import firebase from 'firebase/app';
import 'firebase/auth';
// import firebase from 'firebase';
// import db from '@/firebase/init';

export default {
data() {
    return {

         calloutTitle: "Your profile",
         firstName: '',
         lastName: ''
        }
    },
    components: {
       CalloutTop,
   },
    computed: {
       user() {
           return this.$store.getters.getUser;
       }
   },
   methods: {
       editUser(user) {
        console.log(user.id)
         db.collection("users").doc('lUuSnPLWJ1IUH9ICJ7kw')
        // .where("id", "==", this.user.uid)
        .update({
            firstName: this.firstName,
            lastName: this.lastName
        });

       }
    //     editPost({ dispatch, commit }, payload) {
    //     db.collection('blog').doc(payload.id).update({
    //         header: payload.header,
    //         date: payload.date,
    //         image: payload.image,
    //         text: payload.text,
    //     }).then(() => {
    //         // this.$router.push({ path: '/blog' })
    //     }).catch(err => {
    //         console.log(err)
    //     })
    // commit('setBlog');
    // dispatch('loadBlog');
    // router.go(-1)
    // },

   },
  
   created() {
//            console.log(this.$route.params.id + 'blah')
// alert(uid)
//        db.collection("users").where("uid", "==", this.$route.params.id)
//         .onSnapshot((snapshot) => {
//         snapshot.docs.forEach(doc=>{
//             this.header = doc.data().header;
//             this.date = doc.data().date;
//             this.image = doc.data().image;
//             this.text = doc.data().text;
//             this.slug = doc.data().slug;
//             this.id = doc.id;
//         })
      
//     })
   }
}
</script>

<style scoped>
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
}
.col-6 {
    /* border: 1px solid #aaa; */
    border-radius: 12px;
    height: 280px;
    padding-top: 1em;
    padding-left: 2em;
    /* margin-left: -0.8em; */
    -webkit-box-shadow: 13px 14px 19px 10px rgba(0,0,0,0.59);
    -moz-box-shadow: 13px 14px 19px 10px rgba(0,0,0,0.59);
    box-shadow: 13px 14px 19px 10px rgba(0,0,0,0.59);
}
input {
    display: block;
}
button {
    margin-bottom: 1em;
    cursor: pointer
}
</style>

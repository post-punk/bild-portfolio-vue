<template>
    <div>
        <callout-top :calloutTitle="calloutTitle"></callout-top>
        <div class="container">
            <div class="row">
                <div class="col-xl-4 ">
                    <img :src="user.image" alt="">
                </div>
                <div class="col-xl-8">
                    <!-- {{user.id-}} -->
                    <!-- {{this.$route.params.name}} -->
                    <p>First name:</p>
                    <input v-model="firstName">
                    <p>Last name:</p>
                    <input v-model="lastName">
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
                   console.log(user)
        
        db.collection("users").doc(user.docId)
        .update({
            firstName: this.firstName,
            lastName: this.lastName
        })
        .then(this.$router.go())
       }
   },
  
   created() {

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
    border-radius: 5px;
    z-index: 0;
    margin-bottom: 1em;
}
.col-xl-6 {
    /* border: 1px solid #aaa; */
    border-radius: 5px;
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
    margin-top: 0.3rem !important;
    margin-bottom: 1rem;
    width: 50%;
}
button {
    margin-bottom: 1em;
    cursor: pointer
}
p {
    /* font-weight: bold; */
}
</style>

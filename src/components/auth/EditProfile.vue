<template>
    <div>
        <callout-top :calloutTitle="calloutTitle"></callout-top>
        <div class="container" >
            <div class="row"  v-if="user">
                <div class="col-xl-4 " >
                    <img :src="user.image" alt="">
                </div>
                <div class="col-xl-8" >
                    <!-- {{this.$route.params.name}} -->
                    <p>First name:</p>
                    <input :placeholder="user.firstName" v-model="firstName">
                    <p>Last name:</p>
                    <input :placeholder="user.lastName" v-model="lastName">
                    <!-- <input>details -->
                    <p>Change password:</p>
                    <input placeholder="New password" v-model="newPassword">
                    <button @click="editUser(user); changePassword()" class="d-flex align-content-center btn btn-info" >
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
         firstName: null,
         lastName: null,
         newPassword: null
        }
    },
    components: {
       CalloutTop,
   },
    computed: {
       user() {
           return this.$store.getters.getUser;
       },
       displayUserName() {
           return this.$store.getters.getCurrentUser;
       }
   },
   methods: {
       async editUser(user) {
        await db.collection("users").doc(user.docId)
        .update({
            firstName: this.firstName,
            lastName: this.lastName
        });
        await this.$store.commit('setUserNames', { 
            firstName: this.firstName,
            lastName: this.lastName });

        //     if (this.newPassword) {
        //    var user = firebase.auth().currentUser;
        //     var newPassword = this.newPassword;

        //     user.updatePassword(newPassword).then(function() {
        //     alert('You have changed your password successfully!')
        //     }).catch(function(error) {
        //     alert(error)
        //     });
        //    }
       },
       changePassword() {
           if (this.newPassword) {
           var user = firebase.auth().currentUser;
            var newPassword = this.newPassword;

            user.updatePassword(newPassword).then(function() {
            alert('You have changed your password successfully!')
            }).catch(function(error) {
            alert(error);
            });
           } ;
       }
   },
   beforeCreate() {

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
    border-radius: 5px;
    height: 280px;
    padding-top: 1em;
    padding-left: 2em;
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
    margin-bottom: 0.5em;
}
</style>

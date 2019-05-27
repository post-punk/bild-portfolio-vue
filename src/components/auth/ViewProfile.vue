<template>
    <div>
        <callout-top :calloutTitle="calloutTitle"></callout-top>
        <div class="container">
            <div class="row">
                <div class="col-xl-4 ">
                    <img :src="user.image" alt="">
                </div>
                <div class="col-xl-8">
                    <!-- {{this.$route.params.name}} -->
                    First name: <p>{{user.firstName}}</p>
                    Last name: <p>{{user.lastName}}</p>
                    email: <p>{{user.email}}</p>
                    <!-- <p>details: {{details}}</p> -->
                    <button class="d-flex align-content-center btn btn-info" >
                        <a v-bind:href="'mailto:' + user.email">Contact {{user.email}} </a>
                    </button>
                    <button @click="pushToEditProfile">Edit</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CalloutTop from "../CalloutTop.vue";

export default {
data() {
    return {
         calloutTitle: "Your profile",
        }
    },
    components: {
       CalloutTop,
   },
   methods: {
       pushToEditProfile() {
       this.$router.push({ path: '/EditProfile/' })
       }
   },
   computed: {
       user() {
           return this.$store.getters.getUser;
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
    border-radius: 12px;
    z-index: 0;
    margin-bottom: 1em;
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
</style>

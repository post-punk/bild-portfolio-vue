<template>
    <div>
        <callout-top :calloutTitle="calloutTitle"></callout-top>
        <div class="container">
            <div class="row">
                <div class="col-4">
                    <img :src="image" alt="">
                </div>
                <div class="col-6">
                    <h3>Username: {{username}}</h3>
                    <p>email: {{email}}</p>
                    <p>details: {{details}}</p>
                    <!-- dodaj mailto -->
                    <button class="d-flex align-content-center btn btn-info">Contact {{ username }}</button>
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
        username: 'Vlado',
        email: 'vlado544@yahoo.com',
        image: 'https://f4.bcbits.com/img/a2642946877_10.jpg',
        details: 'alien observer',
        calloutTitle: "Welcome to your profile",
        }
    },
    components: {
       CalloutTop,
   },
}
</script>

<style scoped>
.container {
    margin-top: 2rem;
}
img {
    height: 300px;
    /* height: 350px; */
    float: left;
    border-radius: 12px;
    z-index: 2;
}
.col-6 {
    /* border: 1px solid #aaa; */
    /* border-radius: 12px; */
    /* height: 280px; */
    padding-top: 1em;
    padding-left: 2em;
    /* margin-left: -0.8em; */
    -webkit-box-shadow: 13px 14px 19px 10px rgba(0,0,0,0.59);
-moz-box-shadow: 13px 14px 19px 10px rgba(0,0,0,0.59);
box-shadow: 13px 14px 19px 10px rgba(0,0,0,0.59);
    z-index: 0;
}
</style>

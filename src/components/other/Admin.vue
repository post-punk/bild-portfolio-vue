
<template>
    <div>
        <callout-top :calloutTitle="calloutTitle"></callout-top>
        <div class="container">
            <p>Select logo:</p>
            <select id="project-category" v-model.lazy="logo" class="form-control">
                    <option v-for="(category, index) in categories" :key="index">{{ category }}</option>
            </select>
            <input type="text" placeholder="Enter new logo URL:" v-model.lazy="logo" autocomplete="on">
            <button @click="changeLogo">Submit changes</button>
        </div>
    </div>
</template>

<script>
import Firebase from 'firebase'
import CalloutTop from '../CalloutTop.vue';
import db from "@/firebase/init";

export default {
    data() {
        return {
            calloutTitle: "Admin page",
            logo: null,
            categories: [
            "https://i.imgur.com/ijKlZQ0.jpg",
            "https://i.imgur.com/3N6mnK4.png",
            "https://i.imgur.com/v3CJNBo.jpg",
        ]
        }
    },
    components: {
        CalloutTop,
    },
    methods: {
        changeLogo() {
            db.collection('CMS').doc('m7PpJ2hBgJvPTmn2K96m').update({
            logo: this.logo
        })
    },


    }
}
</script>

<style scoped>
input {
width: 30%;
height: 2.5rem;
border-radius: 4px;
margin-top: 2rem;
}
#project-category {
width: 30%;
height: 2.5rem;
border-radius: 4px;
margin-top: 2rem;
}
button {
    display: block;
    margin-top: 0.5em;
}
p {
    margin-top: 2em;
    font-weight: bold
}
</style>

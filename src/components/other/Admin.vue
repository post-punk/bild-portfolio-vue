
<template>
    <div>
        <callout-top :calloutTitle="calloutTitle"></callout-top>
        <div class="container">
            <p>Change logo:</p>
            <input id="project-category"  v-model.lazy="logo" list="links" name="browser" autocomplete="off" >
            <datalist id="links">
                <option v-for="(category, index) in categories" :key="index" :value="category"></option>
            </datalist>
            <button @click="changeLogo">Submit changes</button>
            <hr>
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
        });
        this.logo = '';
    },


    }
}
</script>

<style scoped>
input {
width: 30%;
height: 2rem;
border-radius: 4px;
}
#project-category {
width: 30%;
height: 2.5rem;
border-radius: 5px;
}
button {
    display: block;
    margin-top: 0.5em;
}
p {
    margin-top: 2em;
    font-weight: bold
}
button {
    display: inline;
    margin-left: 1em;

}
hr {
    margin-top: 1rem
}
</style>

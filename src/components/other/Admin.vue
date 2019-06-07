
<template>
    <div>
        <callout-top :calloutTitle="calloutTitle"></callout-top>
        <div class="container">
            <p>Change logo:</p>
            <input id="project-category"  v-model.lazy="logo" list="logos" autocomplete="off" placeholder="Pick logo, or enter a new image URL"
            @submit.prevent="changeLogo">
                <datalist id="logos">
                    <option v-for="(logo, index) in logos" :key="index" :value="logo"></option>
                </datalist>
            <button @click="changeLogo">Submit changes</button>
            <hr>
            <div class="row">
                <p>Change callout section color:</p><a href="https://htmlcolorcodes.com/" id="color-codes" target="blank"><i>https://htmlcolorcodes.com/</i></a>
            </div>
            <input type="text" list="colors" placeholder="Enter HTML color code" v-model.lazy="bgColor"
             @submit.prevent="changeBgColor">
                <datalist id="colors">
                    <option v-for="(color, index) in colors" :key="index" :value="color"></option>
                </datalist>
            <button @click="changeBackgroundColor">Submit changes</button>
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
            calloutTitle: "Admin tools",
            logo: null,
            logos: [
                "https://i.imgur.com/ijKlZQ0.jpg",
                "https://i.imgur.com/3N6mnK4.png",
                "https://i.imgur.com/v3CJNBo.jpg",
        ],
            bgColor: null,
            colors: [
                'indianred',
                'teal',
                'deepskyblue',
                'lightslategray',
                'mediumorchid'

            ],
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
    changeBackgroundColor() {
            db.collection('CMS').doc('m7PpJ2hBgJvPTmn2K96m').update({
            bgColor: this.bgColor
        });
        this.bgColor = '';
    },


    }
}
</script>

<style scoped>
input {
width: 30%;
height: 33px;
border-radius: 5px;
/* display: block; */
}

button {
    margin-top: 0.5em;
    display: inline;

    margin-left: 1em;
}
p {
    margin-top: 1em;
    font-weight: bold
}

hr {
    margin-top: 1rem;
    margin-bottom: 1rem;
}

#color-codes {
    /* display: block; */
    
    margin-top: 1em;
    color: #42B983;
    margin-left: 2em;
    margin-bottom: 0.5em;
}
.row {
    margin-left: 0
}
</style>

import Vue from "vue";
import Vuex from "vuex";

import navigation from './navigation.js';
import about from './about.js';
import work from './work.js';
import home from './home.js';
import contact from './contact';
import blog from './blog';

// import firebase from 'firebase'
import db from '@/firebase/init'


Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        navigation,
        home,
        about,
        work,
        contact,
        blog
    }
});

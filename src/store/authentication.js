import db from '@/firebase/init'
import firebase from 'firebase/app';
import 'firebase/auth';
import router from '../router/index'
// import * as admin from "firebase-admin";

const state = {
    user: null,
    feedback: null,
    isNewUser: false,
    isLoggedIn: false,
    currentUser: null,
 }
 
 const getters = {
     getUser: state => {
         return state.user;
     },
     feedback: state => {
         return state.feedback;
     },
     getCurrentUser: state => {
         return state.currentUser;
     }
 }
 
 const mutations = { 
     setUser(state, payload) {
         state.user = payload;
     },
     setFeedback(state, payload) {
         state.feedback = payload
     },
     setIsNewUser(state, payload) {
         state.isNewUser = payload
     },
     setCurrentUser(state, payload) {
         state.currentUser = payload;
     },
     setUserNames(state, payload) {
         state.user.firstName = payload.firstName;
         state.user.lastName = payload.lastName;
     }
 }

const actions = {
    isNewUser({commit}, payload) {
        commit('setIsNewUser', payload)
    },
    createUser( {commit, dispatch}, payload) {
        firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
            .then(user => {
                    dispatch('isNewUser', true);
                    db.collection('users').doc().set({
                        firstName: payload.firstName,
                        lastName: payload.lastName,
                        email: payload.email,
                        id: user.user.uid,
                        })
                    })
                    .catch(function(error) {
                        // Handle Errors here.
                        var errorMessage = error.message;
                            commit('setFeedback', errorMessage)
                        })
                ;;
            },
    async logIn( {commit}, {email, password} ) {
    await firebase.auth().signInWithEmailAndPassword(email, password).then(
        async () => {
        const newUser = {
            id: firebase.auth().currentUser.uid,
            email: firebase.auth().currentUser.email,
            firstName: "",
            lastName: "",
            docId: "",
    }
    await db.collection("users")
    .where("id", "==", newUser.id)
    .get()
    .then(snapshot => {
        snapshot.forEach(doc => {
        newUser.firstName = doc.data().firstName;
        newUser.lastName = doc.data().lastName;
        newUser.docId = doc.id;
        newUser.image = doc.data().image;
        });
    });
    commit('setUser', newUser);
    commit('setCurrentUser', newUser);
    console.log(newUser)
    // ...
    })
    .catch(function(error) {
        // Handle Errors here.
        var errorMessage = error.message;
            commit('setFeedback', errorMessage)
        })
    if (!state.feedback) {
      router.go(-1);
    }
},
    resetFeedback({commit}) {
        commit('setFeedback', null)
    },
    userSignOut({ commit }) {
        firebase.auth().signOut().then(() => {
        commit("setUser", null);
        })
    },
async autoSignIn({ commit }, payload ) {
    var currentUser = {
        id: payload.uid,
        lastName: "",
        firstName: "",
        docId: "",
    }
    await db.collection("users")
    .where("id", "==", payload.uid)
    .get()
    .then(snapshot => {
        snapshot.forEach(doc => {
            const data = doc.data();
            currentUser.firstName = data.firstName;
            currentUser.lastName = data.lastName;
            currentUser.email = data.email;
            currentUser.id = data.id;
            currentUser.image = data.image;
            currentUser.docId = doc.id;
        });
    });
    await commit('setUser', currentUser);
    },
}

export default {
    state,
    mutations,
    actions,
    getters
};

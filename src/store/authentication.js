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
   currentUser: null
}

const getters = {
    getUser: state => {
        return state.user;
  },
    feedback: state => {
        return state.feedback;
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
    }
}
const actions = {
    isNewUser({commit}, payload) {
        commit('setIsNewUser', payload)
    },
    
    createUser( {commit, dispatch}, {email, password} ) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
        // .then(user => {
        // const newUser = {
        // id: user.uid
        // };
        // commit('setUser', newUser);
        // ...
        // })
            .catch(function(error) {
                // Handle Errors here.
                // var errorCode = error.code;
                var errorMessage = error.message;
                // if (error) {
                    commit('setFeedback', errorMessage)
                //    return state.feedback = 'Wrong email and/or password, please try again.'
                    // return state.feedback;
                // }
                // ...
                }).then(() => {
                    dispatch('isNewUser', true);
                    // commit('setIsAuthenticated', false)
                    })
                ;;
            },
    logIn( {commit}, {email, password} ) {
        firebase.auth().signInWithEmailAndPassword(email, password).then(user => {
        const newUser = {
        id: firebase.auth().currentUser.uid,
        email: firebase.auth().currentUser.email
        };
        console.log(newUser.id, newUser.email)
        commit('setUser', newUser);
        console.log(newUser)
        // ...
        }).catch(function(error) {
            // Handle Errors here.
            // var errorCode = error.code;
            var errorMessage = error.message;
            // if (error) {
                commit('setFeedback', errorMessage)
            //    return state.feedback = 'Wrong email and/or password, please try again.'
                // return state.feedback;
            // }
            // ...
          });
        // this.$router.push({ path: '/' });

    },
    resetFeedback({commit}) {
        commit('setFeedback', null)
    },
    userSignOut({ commit }) {
        firebase.auth().signOut().then(() => {
        commit("setUser", null);
        // commit('setIsAuthenticated', false)
        })
        .catch(() => {
        commit("setUser", null);
        // commit('setIsAuthenticated', false);
        });
    },
    autoSignIn({ commit }, payload ) {
        // var user = firebase.auth().currentUser;
        commit('setUser', { id: payload.uid });
    },
}

export default {
    state,
    mutations,
    actions,
    getters
};

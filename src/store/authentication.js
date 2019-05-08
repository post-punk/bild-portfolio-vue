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
    
    createUser( {commit, dispatch}, payload ) {
        
        firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        // .then(user => {
        // const newUser = {
        // id: user.uid
        // };
        // commit('setUser', newUser);
        // ...
        // })
            .then(user => {
                    dispatch('isNewUser', true);
                    db.collection('users').doc().set({
                        firstName: payload.firstName,
                        lastName: payload.lastName,
                        email: payload.email,
                        id: user.user.uid
                    })
                    // commit('setIsAuthenticated', false)
                    })
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
                        })
                ;;
            },
    logIn( {commit}, {email, password} ) {
        firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
        const newUser = {
            id: firebase.auth().currentUser.uid,
            email: firebase.auth().currentUser.email,
            firstName: "",
            lastName: "",
        };

        db.collection("users")
        .where("id", "==", newUser.id)
        .get()
        .then(snapshot => {
          snapshot.forEach(doc => {
            newUser.firstName = doc.data().firstName;
            newUser.lastName = doc.data().lastName;
          });
        });
        
        console.log(newUser.id, newUser.email)
        commit('setUser', newUser);
        console.log(newUser)
        // ...
        })
        .then(

        )
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

          });
          
        //   beforeRouteEnter (to, from, next) {
        //     next(vm => {
        //       if (from.path === 'blog/what-you-should-know-about-javascript-arrays') {
        //         router.go(-1)
        //       } else {
        //         router.push({path: '/'})
        //       }
        //       next()
        //     });
        //   }

        //   if (router.currentRoute == "blog/what-you-should-know-about-javascript-arrays") {
        //     router.go(-1)
        //     } else  {
        //     router.push({path: '/'})
        // }
        
        router.go(-1);
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
        var currentUser = {
            id: payload.uid,
            lastName: "",
            firstName: ""
        }

        db.collection("users")
        .where("id", "==", currentUser.id)
        .get()
        .then(snapshot => {
          snapshot.forEach(doc => {
            //   var a = doc.data();
              currentUser.firstName = doc.data().firstName;
              currentUser.lastName = doc.data().lastName;
              currentUser.email = doc.data().email;
              currentUser.id = doc.data().id;
              currentUser.image = doc.data().image;
          });
        });

        commit('setUser', currentUser);
    },
}

export default {
    state,
    mutations,
    actions,
    getters
};

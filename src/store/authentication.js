import db from '@/firebase/init'
import firebase from 'firebase';
import 'firebase/auth';

const state = {
   user: null,
}

const getters = {
  getUser: state => {
      return state.user;
  }
}
const mutations = { 
    // setCreateUser(state, payload) {
    //     state.user = payload;
    // },
    // userSignOut(state, payload) {
    //     state.user = payload;
    // },
    setUser(state, payload) {
            state.user = payload;
        },


}
const actions = {
    createUser( {commit}, {email, password} ) {
        firebase.auth().createUserWithEmailAndPassword(email, password).then(user => {
        const newUser = {
        id: user.uid
        };
        commit('setUser', newUser);
        // ...
        });
        },

    logIn( {commit}, {email, password} ) {
        firebase.auth().signInWithEmailAndPassword(email, password).then(user => {
        const newUser = {
        id: user.uid
        };
        commit('setUser', newUser);
        // ...
        });

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
        var user = firebase.auth().currentUser;
        commit('setUser', { id: payload.uid });
    }
}


export default {
    state,
    mutations,
    actions,
    getters
};

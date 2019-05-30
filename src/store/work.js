import db from '@/firebase/init'

const state = {
    projects: [],
    loadingStatus: false,
    lastVisible: '',
    noMoreProjects: false
}

const getters = {
    
    allItems: state => {
        return state.projects;
   
    },
    lastVisible: state => {
        return state.lastVisible;
    },
    noMoreProjects: state => {
        return state.noMoreProjects;
    }
}
const mutations = {
   setProjects(state, payload) {
//      state.projects = payload
    payload.forEach(project => {
        state.projects.push(project)
    })
   },
   setLastVisible(state, payload) {
       state.lastVisible = payload;
   },
   setEmptyProjects(state, payload) {
        state.projects = payload;
    },
    setNoMoreProjects(state, payload) {
        state.noMoreProjects = payload;
    }

}
const actions = {
    async displayProjects({commit}, config) {
        commit('setLoadingStatus', true);
       await db.collection("work-items")
       let query = db.collection("work-items").orderBy("name")
        if (config && config.loadMore) {
            query = query.startAfter(state.lastVisible)
        }
    query
        .limit(3)
        .get()
        .then(snapshot => {
            let projects = [];
            let lastVisible = snapshot.docs[snapshot.docs.length - 1];
            snapshot.forEach(doc => {
              projects.push(doc.data());
            });
            if (snapshot.docs.length === 0) {
                commit('setNoMoreProjects', true);
              }
            commit("setLastVisible", lastVisible);
            commit("setProjects", projects);
            commit('setLoadingStatus', false);
          });
    },

    // displayAll ({commit}) {
    // commit('setLoadingStatus', true);
    // //fetch from firestore
    // db.collection("work-items")
    // .orderBy('name')
    // .limit(3)
    // .get()
    // .then(snapshot => {
    //     var projects = [];
    //     var lastVisible = snapshot.docs[snapshot.docs.length-1];
    //     snapshot.forEach(doc => {
    //        projects.push(doc.data()) 
    //     });
    //   commit('setProjects', projects);
    //   commit('setLastVisible', lastVisible);
    //   commit('setLoadingStatus', false);
    //   });
    // },
    emptyProjects ({commit}, payload) {
        commit('setEmptyProjects', payload)
    },
    

}

    

export default {
    // namespaced: true,

    state,
    mutations,
    actions,
    getters
};

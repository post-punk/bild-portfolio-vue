import db from '@/firebase/init'


const state = {
    blog: []
}

const getters = {
    blog: state => {
        return state.blog;
   
    },
}
const mutations = {
    setBlog(state, payload) {
        payload.forEach(article => {
            state.blog.push(article)
        })
    },
    setLastVisible(state, payload) {
        state.lastVisible = payload
    }
}
const actions = {
  
    loadMore({ commit }) {
        db.collection("blog")
        .limit(1)
        .get()
        .then(snapshot => {
        var blog = [];
        var lastVisible = snapshot.docs[snapshot.docs.length-1];
        snapshot.forEach(doc => {
           blog.push(doc.data()) 
        });
        // if (snapshot.docs.length == 0) {
        //   this.noMoreProjects = true;
        // }
       commit('setBlog', blog);
       commit('setLastVisible', lastVisible);
      });
    },
    }


export default {
    state,
    mutations,
    actions,
    getters
};

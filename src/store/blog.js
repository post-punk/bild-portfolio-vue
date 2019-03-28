import db from '@/firebase/init'


const state = {
    blog: [

    ]
   
}

const getters = {
    blog: state => {
        return state.blog;
   
    },
}
const mutations = {
    setBlog(state, payload) {
        state.blog = payload
    }
}
const actions = {
  
        displayBlog ({commit}) {
        //fetch from firestore
        db.collection("blog").get().then(snapshot => {
            var blog = [];

            snapshot.forEach(doc => {
               blog.push(doc.data()) 
            });
          commit('setBlog', blog);
          
          });
        }
    }


export default {
    state,
    mutations,
    actions,
    getters
};

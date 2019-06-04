import db from '@/firebase/init'
import firebase from 'firebase/app';
import 'firebase/auth';
import router from '../router/index'

const state = {
    blog: [],
    lastBlogPost: null,
    noMoreArticles: false,
    loadingStatus: false,
    test:'',
    orderBy: ''
}

const getters = {
    blog: state => {
        return state.blog;
    },
    blogCount: state => {
        return state.blogCount;
    },
    lastBlogPost: state => {
        return state.lastBlogPost;
    },
    noMoreArticles: state => {
        return state.noMoreArticles;
    },
    slug: state => {
        return state.slug;
    },
    getLoadingStatus: state => {
        return state.loadingStatus;
    },
    getOrderBy: state => {
        return state.orderBy;
    },
 
   
}

const mutations = {
    setTest(state,payload){
        state.test = payload
    },
    setBlog(state, payload) {
        // console.log(payload)
        // if (payload.editPost) {
        //     return state.blog = payload;
        // }
        // payload.forEach(article => {
        //     state.blog.push(article)
        // })
        state.blog = payload;
    },
    setLoadMore(state, payload) {
        // state.blog = [];
        payload.forEach(article => {
            state.blog.push(article)
        })
        // state.blog = payload;
    },
    setlastBlogPost(state, payload) {
        state.lastBlogPost = payload
    },
    setNoMoreArticles(state, payload) {
        state.noMoreArticles = payload;
    },
    setBlogCount(state, payload) {
        state.blogCount = payload;
    },
    setLoadingStatus(state, payload) {
        state.loadingStatus = payload
    },
    setEmptyBlog(state, payload) {
        state.blog = payload
    },
    setOrderBy(state, payload) {
        state.orderBy = payload;
    }
}

const actions = {

    emptyBlog({commit}, payload) {
        commit('setEmptyBlog', payload)
    },

    editPost({ dispatch, commit }, payload) {
        console.log(payload)
        db.collection('blog').doc(payload.id).update({
            header: payload.header,
            date: payload.date,
            image: payload.image,
            text: payload.text,
        }).then(() => {
            router.push({ path: '/blog' })
        }).catch(err => {
            console.log(err)
        })
    // commit('setBlog');
    dispatch('loadBlog');
    router.go(-1);
    },

    addNewPost({dispatch, commit}, payload) {
        db.collection('blog').add({
            header: payload.header,
            date: payload.date,
            image: payload.image,
            text: payload.text,
            slug: payload.slug,
            submittedBy: payload.submittedBy,
            submittedByUsername: payload.submittedByUsername
        }).then(() => {
            // this.$router.push({ path: '/blog' })
        }).catch(err => {
            console.log(err)
        })
    // commit('setBlog', payload);
    dispatch('loadBlog');
    },

    async loadBlog({ commit, rootState  }, config) {
        const blogUser = firebase.auth().currentUser.uid;
        commit('setLoadingStatus', true);
       await db.collection("blog")
            let query = db.collection('blog');
            // OVO ne KVARI vise PAGINACIJU
            if (state.orderBy === 'desc') {
                query = db.collection('blog').orderBy('date', 'desc');
            } else {
                query = db.collection('blog').orderBy('date', 'asc');
            }
            if (config && config.loadMore) {
                query = query.startAfter(state.lastBlogPost)
            }
            if (config && config.filteredByUser) {
                query = db.collection('blog').where('submittedBy', '==', blogUser);
            }
        query
            .limit(2)
            .get()
            .then(snapshot => {
                let blog = [];
                let lastBlogPost = snapshot.docs[snapshot.docs.length - 1];
                if (config && config.loadMore) {
                    blog = state.blog;
                }
                snapshot.forEach(doc => {
                    blog.push({ ...doc.data(), id: doc.id });
                });
                if (snapshot.docs.length === 0) {
                    commit('setNoMoreArticles', true)
                }
                commit('setlastBlogPost', lastBlogPost);
                commit('setBlog', blog);
                commit('setLoadingStatus', false);
            })
    },

    deleteArticle({commit}, payload) {
        //UNCOMMENT!
        // console.log(payload.id + '    asdasdasdasd')
        commit('setTest','123');
        console.log(payload)
        // commit('setBlog', payload);
        // db.collection("blog").doc(payload.id).delete();
        state.blog = state.blog.filter(article => {
            return article.id != payload.id
        })
        // I OVO!!!
        // commit('setlastBlogPost', null)
        // dispatch('loadBlog');
    },

    // ilija remove from remote location REMEMBER TO UNCOMMENT LATER!
    // db.collection("blog").doc(uid).delete();

    // remove locally
    // var articleForRemoval = state.blog.find(item => item.id === uid);


    // var id = state.blog.indexOf(articleForRemoval);
    //alert(id);
    // console.log(articleForRemoval)
    // state.blog.splice(id, 1);

    // commit('deleteBlog', id)
    // editArticle({commit}, {uid}) {
    // db.collection('blog').doc(uid).update({

    //      })
    //   }
}

export default {
    state,
    mutations,
    actions,
    getters
};

import db from '@/firebase/init'
import router from '../router/index'

const state = {
    blog: [],
    lastBlogPost: null,
    noMoreProjects: false,
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
    noMoreProjects: state => {
        return state.noMoreProjects;
    },
    slug: state => {
        return state.slug;
    },
    getLoadingStatus: state => {
        return state.loadingStatus;
    },
    getOrderBy: state => {
        return state.orderBy;
    }
}

const mutations = {
    setTest(state,payload){
        state.test = payload
    },
    setBlog(state, payload) {
        console.log(payload)
        // if (payload.editPost) {
        //     return state.blog = payload;
        // }
        payload.forEach(article => {
            state.blog.push(article)
        })
        // state.blog = payload;
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
    // deleteBlog(state, payload) {
    //     state.blog.splice(payload, 1)
    // },
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
    router.go(-1)
    },

    addNewPost({dispatch, commit}, payload) {
        db.collection('blog').add({
            header: payload.header,
            date: payload.date,
            image: payload.image,
            text: payload.text,
            slug: payload.slug
        }).then(() => {
            // this.$router.push({ path: '/blog' })
        }).catch(err => {
            console.log(err)
        })
    // commit('setBlog', payload);
    dispatch('loadBlog');
    },

    async loadBlog({ commit }, config) {
        commit('setLoadingStatus', true);
       await db.collection("blog")
            let query = db.collection('blog');
            // OVO KVARI PAGINACIJU
            if (state.orderBy === 'desc') {
                commit('setEmptyBlog', []);
                query = db.collection('blog').orderBy('date', 'desc');
            } else {
                commit('setEmptyBlog', []);
                query = db.collection('blog').orderBy('date', 'asc');
            }
            
            if (config && config.loadMore) {
                query = query.startAfter(state.lastBlogPost)
            }
        query
            .limit(3)
            .get()
            .then(snapshot => {
                let blog = [];
                let lastBlogPost = snapshot.docs[snapshot.docs.length - 1];
                snapshot.forEach(doc => {
                    blog.push({ ...doc.data(), id: doc.id });
                });
                // if (config && config.loadMore) {
                //     commit("setLoadMore", blog);
                //     }
                commit('setlastBlogPost', lastBlogPost);
                commit('setBlog', blog);
                commit('setLoadingStatus', false);
            })
    },

    // async loadMore({ commit }) {
    //     commit('setLoadingStatus', true);
    //     await db.collection("blog")
    //         .startAfter(state.lastBlogPost)
    //         .limit(1)
    //         .get()
    //         .then(snapshot => {
    //             var blog = [];
    //             var lastBlogPost = snapshot.docs[snapshot.docs.length - 1];
    //             snapshot.forEach(doc => {
    //                 blog.push({ ...doc.data(), id: doc.id });

    //             });
    //             var blogCount = state.blogCount;
    //             blogCount-=2;
    //             if (blogCount === 2) {
    //                 state.noMoreProjects = true;
    //             }
    //             commit("setLoadMore", blog);
    //             commit('setlastBlogPost', lastBlogPost);
    //             commit('setBlogCount', blogCount);
    //             commit('setLoadingStatus', false);

    //         });
    // },

    deleteArticle({commit}, payload) {
        //UNCOMMENT!
        // console.log(payload.id + '    asdasdasdasd')
        commit('setTest','123');
        // commit('setBlog', payload);
        db.collection("blog").doc(payload.id).delete();
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

import db from '@/firebase/init'


const state = {
    blog: [],
    lastBlogPost: null,
    // blogCount: 6,
    noMoreProjects: false,
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
    }
}

const mutations = {
    setBlog(state, payload) {
        // state.blog = [];
        // payload.forEach(article => {
            // state.blog.push(article)
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
    // deleteBlog(state, payload) {
    //     state.blog.splice(payload, 1)
    // },
    setBlogCount(state, payload) {
        state.blogCount = payload;
    }
}

const actions = {

    editPost({ dispatch, commit }, payload) {
        db.collection('blog').doc(payload.id).update({
            header: payload.header,
            date: payload.date,
            image: payload.image,
            text: payload.text,
        }).then(() => {
            // this.$router.push({ path: '/blog' })
        }).catch(err => {
            console.log(err)
        })
    commit('setBlog');
    dispatch('loadBlog');
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
    commit('setBlog');
    dispatch('loadBlog');
    },

    loadBlog({ commit }) {
        db.collection("blog")
            .orderBy("date", "desc")
            .limit(99)
            // .startAfter(state.lastBlogPost)
            .get()
            .then(snapshot => {
                var blog = [];
                // var lastBlogPost = snapshot.docs[snapshot.docs.length - 1];
                snapshot.forEach(doc => {
                    blog.push({ ...doc.data(), id: doc.id });
                    //filter any duplicates, ne radi bas
                    // if(lastBlogPost) { 
                    //     blog.filter(item => item.id !== doc.id);
                    // }
                    // console.log(doc.id)
                });
                //filter treba da bude odje za if uslov (if (blog.length !== 0))
                // console.log(blog)
                commit('setBlog', blog);
                // commit('setlastBlogPost', lastBlogPost);
            })

            //test test 
            // var docRef = db.collection("blog").doc("3dvVnUxozf8ZBYHXAFjK");
            // docRef.get().then(function(doc) {
            // if (doc.exists) {
            // console.log("Document data:", doc.data());
            //  } else {
            // doc.data() will be undefined in this case
            //  console.log("No such document!");
                // }
            // }).catch(function(error) {
                // console.log("Error getting document:", error);
            // });
    },

    loadMore({ commit }) {
        db.collection("blog")
            // .startAfter(state.lastBlogPost)
            .limit(2)
            .get()
            .then(snapshot => {
                var blog = [];
                var lastBlogPost = snapshot.docs[snapshot.docs.length - 1];
                snapshot.forEach(doc => {
                    blog.push({ ...doc.data(), id: doc.id });
                    //   blog = blog.filter(item => item.id !== doc.id);
                    //     console.log(blog)
                });
                // var blogCount = state.blogCount;
                // blogCount-=2;
                // if (blogCount === 2) {
                    // state.noMoreProjects = true;
                // }
                commit("setLoadMore", blog);
                commit('setlastBlogPost', lastBlogPost);
                // commit('setBlogCount', blogCount)
            });
    },

    deleteArticle({ dispatch, commit }, { uid }) {
        //UNCOMMENT!
        // db.collection("blog").doc(uid).delete();
        state.blog = state.blog.filter(article => {
            return article.id != uid
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

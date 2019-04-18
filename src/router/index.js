import Contact from '../components/contact/Contact.vue'
import About from '../components/about/About.vue'
import Work from '../components/work/Work.vue'
import Home from '../components/home/Home.vue'
import Blog from '../components/blog/Blog.vue'
import addNewPost from '../components/blog/addNewPost.vue'
import signup from '@/components/auth/SignUp.vue'
import login from '@/components/auth/LogIn.vue'
import editPost from '../components/blog/editPost.vue'
import ViewPost from '../components/blog/ViewPost'
import firebase from 'firebase';
import 'firebase/auth'
import Router from 'vue-router'

const router = new Router ({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    { 
      path: '/work',
      name: 'Work',
      component: Work
     },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/signup',
      name: 'signup',
      component: signup
    },
    {
      path: '/LogIn',
      name: 'login',
      component: login
    },
    {
      path: '/addNewPost',
      name: 'addNewPost',
      component: addNewPost,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/editPost/:id',
      name: 'editPost',
      component: editPost,
      meta: {
        requiresAuth: true,
      }
    },
    {
      path: '/ViewPost/:slug',
      name: 'ViewPost',
      component: ViewPost
    },
    
  ]
})
export default router

  router.beforeEach((to, from, next) => {
    const currentUser = firebase.auth().currentUser;
    console.log(currentUser)
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  
    if (requiresAuth && !currentUser) {
      next({path: '/LogIn'});
    } else { next();
  }
});
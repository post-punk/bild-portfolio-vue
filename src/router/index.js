
import Contact from '../components/contact/Contact.vue'
import About from '../components/about/About.vue'
import Work from '../components/work/Work.vue'
import Home from '../components/home/Home.vue'
import Blog from '../components/blog/Blog.vue'
import addNewPost from '../components/blog/addNewPost.vue'
import signup from '../components/auth/SignUp.vue'
import login from '../components/auth/LogIn.vue'
import editPost from '../components/blog/editPost.vue'
import { store } from '../store/store.js';


export const routes = [
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
      name: '/signup',
      component: signup
    },
    {
      path: '/LogIn',
      name: '/login',
      component: login
    },
    {
      path: '/addNewPost',
      name: 'addNewPost',
      component: addNewPost,
      beforeEnter (to, from, next) {
        if (store.getters.getUser) {
          next()
        } else {
          next({path: '/LogIn'})
        }
      }
    },
    {
      path: '/editPost/:id',
      name: 'editPost',
      component: editPost,
      beforeEnter (to, from, next) {
        if (store.getters.getUser) {
          next()
        } else {
          next({path: '/LogIn'})
        }
      }
    }
    
  ]

 
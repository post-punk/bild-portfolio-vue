
import Contact from '../components/contact/Contact.vue'
import About from '../components/about/About.vue'
import Work from '../components/work/Work.vue'
import Home from '../components/home/Home.vue'
import Blog from '../components/Blog.vue'



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
    }
    
  ]

 
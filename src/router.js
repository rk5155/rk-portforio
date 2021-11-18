import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Profile from './views/Profile.vue'
import Production from './views/Production.vue'
import Skill from './views/Skill.vue'
import Contact from './views/Contact.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
        path: '/',
        component: Home
    },
    {
        path: '/profile',
        component: Profile
    },
    {
        path: '/Production/:id',
        component: Production
    },
    {
        path: '/Skill',
        component: Skill
    },
    {
        path: '/Contact',
        component: Contact
    }
  ]
})
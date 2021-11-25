import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Profile from './views/Profile.vue'
import Production from './views/Production.vue'
import Skill from './views/Skill.vue'
import Contact from './views/Contact.vue'
import Service from './views/Service.vue'
import ProductionFlow from './views/ProductionFlow.vue'

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
    },
    {
        path: '/service/:id',
        component: Service
    },
    {
      path: '/flow',
      component: ProductionFlow
    }
  ],
  //ページ遷移したときトップに移動
  scrollBehavior () {
    return { x: 0, y: 0 };
  }
  
})
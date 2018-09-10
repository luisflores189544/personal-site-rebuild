import Vue from 'vue'
// import BootstrapVue from 'bootstrap-vue'
import Router from 'vue-router'
import Home from '@/components/HomePage'
import Projects from '@/components/ProjectsPage'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/projects',
      name: 'Projects',
      component: Projects
    }
  ],
  mode: 'history',
})
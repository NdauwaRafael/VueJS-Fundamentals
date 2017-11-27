import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import register from '@/components/new-user'
import addservice from '@/components/add-eventsite'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/Register',
      name: 'register',
      component: register
    },
    {
      path: '/Addservice',
      name: 'addservice',
      component: addservice
    }
  ]
})

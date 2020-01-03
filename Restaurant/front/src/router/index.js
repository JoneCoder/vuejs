import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Food from '@/components/Food'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/food',
      name: 'Food',
      component: Food
    }
  ],
  mode: 'history'
})

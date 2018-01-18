import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
//import { resolve } from 'dns';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/product',
      name: 'product',
      component: product
    },
    {
      path:'/seller',
      name:'seller',
      component:seller
    },
    {
      path:'/discuss',
      name:'discuss',
      component:discuss
    }
  ]
})

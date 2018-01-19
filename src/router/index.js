import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import product from '../components/product'
import seller from '../components/seller'
import discuss from '../components/discuss'
import child1 from '../components/child1'
import child2 from '../components/child2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/product'
    },
    {
      path: '/product',
      name: 'product',
      component:product
    },
    {
      path:'/seller',
      name:'seller',
      component:seller
    },{
      path:'/discuss',
      name:'discuss',
      component:discuss,
      children:[
        {
          path:'/child1',
          name:'child1',
          component:child1
        },
        {
          path:'/child2',
          name:'child2',
          component:child2
        }
      ]
    }
  ]
})

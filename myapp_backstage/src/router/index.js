import Vue from 'vue'
import Router from 'vue-router'
import AddArt from '@/components/AddArt'
import Index from '@/components/Index'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'AddArt',
      component: AddArt
    },
    {
      path: '/AddArt',
      name: 'AddArt',
      component: AddArt
    },
    {
      path: '/About',
      name: 'About',
      component: About
    },
    {
      path: '/ArtDetail',
      name: 'ArtDetail',
      component: () => import('@/components/ArtDetail')
    }
  ]
})

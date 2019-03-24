import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue'),
      children: [
        {
          path:'image',
          component: () => import('./views/Image.vue')
        },
        {
          path: 'query',
          component: () => import('./views/Query.vue')
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/video',
      name: 'video',
      component: () => import(/* webpackChunkName: "about" */ './views/Video.vue')
    },
    {
      path: '/day',
      name: 'refer',
      component: () => import(/* webpackChunkName: "about" */ './views/Refer.vue')
    }
  ]
})

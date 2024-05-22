import {createRouter, createWebHistory} from 'vue-router'

import Demo from '../views/Demo.vue'

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/media',
    name: 'media',
    component: () => import('../views/Media.vue'),
  },
  {
    path: '/demo',
    name: 'demo',
    component: Demo,
  },

]
export default createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return {top: 0}
  },
})

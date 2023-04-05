import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeListView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/BacklogListView.vue')
    }
  ],
  linkActiveClass: 'border-b-4 pb-4 border-blue text-black',
})

export default router

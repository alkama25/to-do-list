import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router';
import HomeListView from '../views/HomeListView.vue'
import BacklogListView from '../views/BacklogListView.vue'
import AddTodo from '../components/AddTodoItem.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeListView,
    children: [
      {
        path: '',
        component: AddTodo
      }
    ]
  },
  {
    path: '/backlog',
    name: 'backlog',
    component: BacklogListView,
    children: [
      {
        path: '',
        component: AddTodo
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkActiveClass: 'border-b-4 pb-4 border-blue text-black'
})

export default router

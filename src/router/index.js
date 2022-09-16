import { createRouter, createWebHistory } from 'vue-router'
import { baseRoutes as routes } from './routes'

export default createRouter({
  history: createWebHistory(),
  routes: routes
})
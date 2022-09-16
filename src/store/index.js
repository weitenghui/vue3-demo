import { createStore } from 'vuex'
import router from '@/router'
import { asyncRoutes, notFound } from '../router/routes'
const store = createStore({
  state () {
    return {
      title: 'hi',
      routes: []
    }
  },
  mutations: {
    SET_TITLE: (state, title) => {
      state.title = title
    },
    SET_ROUTES: (state, routes) => {
      state.routes = routes.concat(notFound)
      state.routes.forEach(route => {
        router.addRoute(route)
      })
      console.log(state.routes)
    }
  },
  actions: {
    loginAction ({commit}, params) {
      console.log(commit, params)
      return new Promise((resolve) => {
        // sessionStorage.setItem('isLogin', true)
        localStorage.setItem('isLogin', true)
        commit('SET_ROUTES', asyncRoutes)
        resolve()
      })
    },
    getRoleAction ({commit}) {
      return new Promise((resolve) => {
        commit('SET_ROUTES', asyncRoutes)
        resolve()
      })
    },
  }
})

export default store
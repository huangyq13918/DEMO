/* eslint-disable camelcase */
import Vue from 'vue'
import Router from 'vue-router'
import { routes } from './router'

Vue.use(Router)

const router = new Router({
  // mode: 'history',
  routes
})

const has_login = false
router.beforeEach((to, from, next) => {
  if (to.name !== 'login') {
    if (has_login) next()
    else {
      next({
        name: 'login'
      })
    }
  } else {
    next()
  }
})

export default router

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import login from './containers/Login.vue'
import home from './containers/Home.vue'
import dashboard from './containers/dashboard.vue'
import projects from './containers/projects.vue'
import auth0Api from './containers/auth0Api.vue'
import bash from './containers/bash.vue'
import reddit from './containers/reddit.vue'
import auth from './auth'

// application routes
const routes = [
  { path: '/login', component: login },
  { path: '/', component: home, beforeEnter: auth.requireAuth },
  { path: '/dashboard', component: dashboard, beforeEnter: auth.requireAuth },
  { path: '/projects', component: projects, beforeEnter: auth.requireAuth },
  { path: '/api', component: auth0Api, beforeEnter: auth.requireAuth },
  { path: '/bash', component: bash, beforeEnter: auth.requireAuth },
  { path: '/reddit', component: reddit, beforeEnter: auth.requireAuth }
]

// export router instance
export default new Router({
  mode: 'history',
  routes,
  linkActiveClass: 'is-active'
})

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import login from './containers/Login.vue'
import home from './containers/Home.vue'
import dashboard from './containers/dashboard.vue'
import projects from './containers/projects.vue'
import auth0Api from './containers/auth0Api.vue'
import bash from './containers/bash.vue'
import svg from './containers/svg.vue'
import cats from './containers/cats.vue'
import game from './containers/game.vue'
import coffee from './containers/coffee.vue'
import auth from './auth'

// application routes
const routes = [
  { path: '/login', component: login },
  { path: '/', component: home, beforeEnter: auth.requireAuth },
  { path: '/dashboard', component: dashboard, beforeEnter: auth.requireAuth },
  { path: '/projects', component: projects, beforeEnter: auth.requireAuth },
  { path: '/api', component: auth0Api, beforeEnter: auth.requireAuth },
  { path: '/bash', component: bash, beforeEnter: auth.requireAuth },
  { path: '/svg',
    component: svg,
    beforeEnter: auth.requireAuth,
    children: [
      { path: 'coffee',
        component: coffee,
        beforeEnter: auth.requireAuth
      },
      { path: 'game',
        component: game,
        beforeEnter: auth.requireAuth
      },
      { path: 'cats',
        component: cats,
        beforeEnter: auth.requireAuth
      }
    ]
  }
]

// export router instance
export default new Router({
  mode: 'history',
  routes,
  linkActiveClass: 'is-active'
})

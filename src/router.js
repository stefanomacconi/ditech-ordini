import Vue from 'vue'
import VueRouter from 'vue-router'
import {routes} from './routes'

Vue.use(VueRouter)

const router = new VueRouter({
    base: '/dtordini/',
    //mode: 'history',
    routes
  })

// export the router instance
export default router
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

const originalReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function push(location) {
    return originalReplace.call(this, location).catch(err => err)
}

const routes = [
  {
    path: '/',
    name: 'home',
    meta: {title: '全部组件展示', auth: true},
    component: () => import('@/src/views/Home.vue')
  },
  {
    path: '/form',
    name: 'form',
    meta: {title: '表格基础模板', auth: true},
    component: () => import('@/src/views/Form.vue')
  },
  {
    path: '/input',
    name: 'input',
    meta: {title: '各种输入框组件', auth: true},
    component: () => import('@/src/views/Input.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router

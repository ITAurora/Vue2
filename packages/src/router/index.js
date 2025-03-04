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
  {
    path: '/login',
    name: 'login',
    meta: {title: '登录窗口', auth: true},
    component: () => import('@/src/views/Login.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  routes:routes
})

// 挂在路由导航守卫
// router.beforeEach((to, from, next) => {
//   // to 将要访问的路径
//   // from 代表从哪个路径跳转而来
//   // 访问登录页面 直接放行
//   if (to.path === '/login') return next()
//   const tokenStr = window.localStorage.getItem('token')
//   // 没有token， 强制转到login页面
//   if (!tokenStr) return next('/login')
//   next()
// })



export default router

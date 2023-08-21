import { route } from 'quasar/wrappers'
import { createRouter, createMemoryHistory, createWebHistory, createWebHashHistory, START_LOCATION } from 'vue-router'
import routes from './routes'
import { useUserStore } from 'stores/user'

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default route(function (/* { store, ssrContext } */) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : (process.env.VUE_ROUTER_MODE === 'history' ? createWebHistory : createWebHashHistory)

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,

    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    history: createHistory(process.env.VUE_ROUTER_BASE)
  })

  Router.afterEach((to, from) => {
    document.title = to.meta.title
  })

  Router.beforeEach(async (to, from, next) => {
    const user = useUserStore()
    // 第一次路由跳轉
    if (from === START_LOCATION) {
      // 取得使用者資訊
      await user.getProfile()
    }
    if (user.isLogin && ['/register', '/login'].includes(to.path)) {
      // 如果有登入,去註冊或登入頁,導向回首頁
      next('/')
    } else if (to.meta.login && !user.isLogin) {
      // 如果沒登入，去需要登入的頁面，導向回登入頁
      next('/login')
    } else if (to.meta.admin && !user.isAdmin) {
      // 如果不是管理員，去需要管理員，導向回首頁
      next('/')
    } else {
      // 不做導向
      next()
    }
  })

  return Router
})

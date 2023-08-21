import { boot } from 'quasar/wrappers'
import axios from 'axios'
import { useUserStore } from 'stores/user'
import VueFileAgent from '@boindil/vue-file-agent-next'
import '@boindil/vue-file-agent-next/dist/vue-file-agent-next.css'
import 'aos/dist/aos.css' // 引入 AOS 的 CSS 文件
import AOS from 'aos' // 引入 AOS 的 JavaScript 函式庫

// Be careful when using SSR for cross-request state pollution
// due to creating a Singleton instance here;
// If any client changes this (global) instance, it might be a
// good idea to move this instance creation inside of the
// "export default () => {}" function below (which runs individually
// for each client)
const api = axios.create({ baseURL: import.meta.env.VITE_API })
const apiAuth = axios.create({
  baseURL: import.meta.env.VITE_API
})
apiAuth.interceptors.request.use(config => {
  const user = useUserStore()
  config.headers.authorization = 'Bearer ' + user.token
  return config
})

// 1.呼叫 axios.get axios.post 時
// 2. interceptors.request 請求攔截器
// 3. 送出請求
// 4. interceptors.response 回應攔截器
// 5. 呼叫 axios 的 .then() catch()

apiAuth.interceptors.response.use(res => {
  return res
}, error => {
  // 如果有收到回應
  if (error.response) {
    // 如果是 JWT 過期的錯誤，且不是舊換新請求
    if (error.response.data.message === '登入逾時' && error.config.url !== '/users/extend') {
      const user = useUserStore()
      // 傳送 JWT 舊換新請求
      return apiAuth.patch('/users/extend')
        .then(({ data }) => {
          // 如果舊換新成功，更新 user store 的 JWT
          user.token = data.result
          // 修改原發生錯誤的請求的 JWT
          error.config.headers.authorization = 'Bearer ' + user.token
          // 重新傳送原請求
          return axios(error.config)
        })
        .catch(() => {
          // 如果舊換新失敗，登出
          user.logout()
          // 回傳原錯誤到呼叫 axios 的地方
          return Promise.reject(error)
        })
    }
  }
  // 如果失敗的請求沒回應，或不是過期，回傳原錯誤到呼叫 axios 的地方
  return Promise.reject(error)
})

export default boot(({ app }) => {
  // for use inside Vue files (Options API) through this.$axios and this.$api

  app.config.globalProperties.$axios = axios
  // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
  //       so you won't necessarily have to import axios in each vue file

  app.config.globalProperties.$api = api
  // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
  //       so you can easily perform requests against your app's API

  app.use(VueFileAgent)
  app.use(AOS.init()) // 初始化 AOS
})

export { api, apiAuth }

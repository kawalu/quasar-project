import UserRole from '../enums/UserRole'
import { apiAuth } from 'boot/axios'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  const token = ref('')
  const account = ref('')
  const email = ref('')
  const avatar = ref('')
  const like = ref(0)
  const role = ref(UserRole.USER)

  const login = (data) => {
    token.value = data.token
    account.value = data.account
    email.value = data.email
    role.value = data.role
    like.value = data.like
    avatar.value = data.avatar
  }

  const isLogin = computed(() => {
    return token.value.length > 0
  })

  const isAdmin = computed(() => {
    return role.value === UserRole.ADMIN
  })

  const getProfile = async () => {
    if (token.value.length === 0) return
    try {
      const { data } = await apiAuth.get('/users/me')
      account.value = data.result.account
      email.value = data.result.email
      role.value = data.result.role
      like.value = data.result.like
      avatar.value = data.result.avatar
    } catch (error) {
      token.value = 0
    }
  }

  const logout = () => {
    token.value = ''
    account.value = ''
    email.value = ''
    like.value = 0
    avatar.value = ''
    role.value = UserRole.USER
  }

  return {
    token,
    account,
    email,
    like,
    role,
    avatar,
    login,
    isLogin,
    isAdmin,
    getProfile,
    logout
  }
}, {
  persist: {
    key: 'quasar',
    paths: ['token']
  }
})

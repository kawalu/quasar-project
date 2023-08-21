<template>
  <q-page class="flex flex-center">
    <q-card v-bind:style="$q.screen.lt.sm ? { 'width': '80%' } : { 'width': '50%' }" class="">
      <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
        <q-input filled type="text" v-model="account" label="帳號" hint="輸入格式正常" lazy-rules :rules="[val => !!val || '帳號必填',
        val => val.length >= 4 || '帳號太短',
        val => val.length < 20 || '帳號太長'
        ]" />

        <q-input filled type="password" v-model="password" label="密碼" lazy-rules :rules="[val => !!val || '密碼必填',
        val => val.length >= 4 || '密碼太短',
        val => val.length < 20 || '密碼太長'
        ]" />

        <div class="text-center">
          <q-btn label="登入" type="submit" color="primary" />
        </div>
      </q-form>
    </q-card>
  </q-page>
</template>

<script setup>
import { useQuasar } from 'quasar'
import { ref } from 'vue'
import { api } from 'boot/axios'
import { useRouter } from 'vue-router'
import { useUserStore } from 'stores/user'

const $q = useQuasar()
const router = useRouter()
const user = useUserStore()

const account = ref('')
const password = ref('')

const onSubmit = async (values) => {
  try {
    const { data } = await api.post('/users/login', {
      account: account.value,
      password: password.value
    })
    user.login({
      token: data.result.token,
      account: data.result.account,
      email: data.result.email,
      like: data.result.like,
      role: data.result.role,
      avatar: data.result.avatar
    })
    $q.notify({
      color: 'green-4',
      textColor: 'white',
      icon: 'cloud_done',
      message: '登入成功'
    })
    router.push('/')
  } catch {
    $q.notify({
      color: 'red-5',
      textColor: 'white',
      icon: 'warning',
      message: '登入失敗'
    })
  }
}

</script>

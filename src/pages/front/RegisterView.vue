<template>
  <q-page class="flex flex-center">
    <q-card v-bind:style="$q.screen.lt.sm ? { 'width': '80%' } : { 'width': '50%' }" class="">
      <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
        <q-input filled type="text" v-model="name" label="帳號" hint="輸入格式正常" lazy-rules :rules="[val => !!val || '帳號必填',
        val => val.length >= 4 || '帳號太短',
        val => val.length < 20 || '帳號太長'
        ]" />

        <q-input filled type="password" v-model="password" label="密碼" lazy-rules :rules="[val => !!val || '密碼必填',
        val => val.length >= 4 || '密碼太短',
        val => val.length < 20 || '密碼太長'
        ]" />

        <q-input filled type="password" v-model="password2" label="確認密碼" reactive-rules :rules="[val => !!val || '密碼必填',
        val => val === password || '密碼不一致'
        ]" />

        <q-input filled type="text" v-model="email" label="信箱" hint="輸入格式正常" lazy-rules :rules="[(val, rules) => rules.email(val) || '請輸入正確信箱格式'
        ]" />

        <div class="text-center">
          <q-btn label="註冊" type="submit" color="primary" />
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

const $q = useQuasar()
const router = useRouter()

const name = ref('')
const password = ref('')
const password2 = ref('')
const email = ref('')

const onSubmit = async (values) => {
  try {
    await api.post('/users', {
      account: name.value,
      password: password.value,
      email: email.value
    })
    router.push('/login')
    $q.notify({
      color: 'green-4',
      textColor: 'white',
      icon: 'cloud_done',
      message: '註冊成功'
    })
  } catch {
    $q.notify({

      color: 'red-5',
      textColor: 'white',
      icon: 'warning',
      message: '註冊失敗'
    })
  }
}

const onReset = () => {
  name.value = null
  password.value = null
  password2.value = null
  email.value = null
}
</script>

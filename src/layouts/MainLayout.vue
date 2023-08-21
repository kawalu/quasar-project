<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-dark text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title to="/">
          <q-toolbar-title style="color: #fff; text-decoration: none;">
            <q-btn round to="/">
              <q-avatar size="xl">
                <img src="../assets/logo.svg">
              </q-avatar>
              kawa重機
            </q-btn>
          </q-toolbar-title>
        </q-toolbar-title>
        <q-tabs align="right" class="gt-xs">
          <q-icon name="home" size="30px" v-if="isLogin"></q-icon>
          <q-route-tab to="/" label="回首頁" v-if="isLogin" />
          <q-icon name="public" size="30px" v-if="isLogin"></q-icon>
          <q-route-tab to="/explorekawa" label="探索kawa" v-if="isLogin" />
          <q-icon name="electric_moped" size="30px" v-if="isLogin"></q-icon>
          <q-route-tab to="/introbike" label="車款介紹" v-if="isLogin" />
          <q-icon name="feed" size="30px" v-if="isLogin"></q-icon>
          <q-route-tab to="/newcenter" label="車款比較" v-if="isLogin" />
          <q-icon name="paid" size="30px" v-if="isLogin"></q-icon>
          <q-route-tab to="/donetkawa" label="斗內kawa" v-if="isLogin" />
          <q-route-tab to='/register' label="註冊" v-if="!isLogin" />
          <q-icon name="settings" size="30px" v-if="isLogin"></q-icon>
          <q-route-tab to='/admin' label="管理" v-if="isLogin && isAdmin" />
          <q-route-tab to='/login' label="登入" v-if="!isLogin" />
          <q-route-tab label="登出" v-if="isLogin" @click="logout" />
          <q-btn dense round flat icon="favorite" color="red" to="/like">
            <q-badge color="red" floating transparent :label="user.like">
            </q-badge>
          </q-btn>
        </q-tabs>
        <q-tabs align="right" class="gt-xs">
          <q-route-tab to='/' v-if="isLogin"><q-avatar><img :src="user.avatar"></q-avatar></q-route-tab>
        </q-tabs>
        <q-btn dense flat round icon="menu" @click="toggleRightDrawer" class="lt-sm" />
      </q-toolbar>
    </q-header>
    <q-drawer v-model="rightDrawerOpen" side="right" bordered elevated>
      <q-scroll-area class="fit">
        <div class="q-pa-sm">
          <template v-for="navItem in navItems">
            <!-- 用 v-if 控制項目顯示與點擊功能 -->
            <q-item :key="navItem.to" :clickable="navItem.show" :to="navItem.to" v-if="navItem.show">
              <q-item-section avatar>
                <q-icon :name="navItem.icon" />
              </q-item-section>
              <q-item-section>
                {{ navItem.text }}
              </q-item-section>
            </q-item>
          </template>
          <q-item clickable v-if="isLogin" @click="logout">
            <q-item-section avatar>
            </q-item-section>
            <q-item-section>
              登出
            </q-item-section>
          </q-item>
        </div>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view :key="$route.path" />
    </q-page-container>

  </q-layout>
</template>

<!-- <script>
import { ref } from 'vue'

export default {
  setup () {
    const rightDrawerOpen = ref(false)
    return {
      rightDrawerOpen,
      toggleRightDrawer () {
        rightDrawerOpen.value = !rightDrawerOpen.value
      }
    }
  }
}
</script> -->

<script setup>
import { ref, computed } from 'vue'
import { apiAuth } from 'boot/axios'
import { useQuasar } from 'quasar'
import { storeToRefs } from 'pinia'
import { useUserStore } from 'stores/user'

const rightDrawerOpen = ref(false)
const $q = useQuasar()
const user = useUserStore()

const toggleRightDrawer = () => {
  rightDrawerOpen.value = !rightDrawerOpen.value
}

const { isLogin, isAdmin } = storeToRefs(user)

const navItems = computed(() => {
  return [
    { to: '/explorekawa', text: '探索kawa', icon: 'home', show: isLogin },
    { to: '/introbike', text: '車款介紹', icon: 'electric_moped', show: isLogin },
    { to: '/newcenter', text: '車輛比較', icon: 'feed', show: isLogin },
    { to: '/donetkawa', text: '斗內kawa', icon: 'paid', show: isLogin },
    { to: '/admin', text: '管理', icon: 'settings', show: isLogin && isAdmin },
    { to: '/register', text: '註冊', icon: '', show: !isLogin },
    { to: '/login', text: '登入', icon: '', show: !isLogin }
    // { text: '登出', icon: '' }
  ]
})

const logout = async () => {
  try {
    await apiAuth.delete('/users/logout')
    user.logout()
    $q.notify({
      color: 'green-4',
      textColor: 'white',
      icon: 'cloud_done',
      message: '登出成功'
    })
  } catch (error) {
    $q.notify({
      color: 'red-5',
      textColor: 'white',
      icon: 'warning',
      message: '登出失敗'
    })
  }
}
</script>

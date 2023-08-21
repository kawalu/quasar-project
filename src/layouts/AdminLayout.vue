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
          <q-route-tab to="/" label="回首頁" />
          <q-route-tab to="/admin/bike" label="重機管理" />
        </q-tabs>
        <q-avatar size="56px" class="q-mb-sm" :prepend-avatar="avatar" :title="account">
        </q-avatar>
        <q-btn dense flat round icon="menu" @click="toggleRightDrawer" class="lt-sm" />
        <q-tabs align="right" class="gt-xs">
          <q-route-tab><q-avatar><img :src="user.avatar"></q-avatar>
          </q-route-tab>
        </q-tabs>
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
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script setup>
import { ref, computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useUserStore } from 'stores/user'

const user = useUserStore()
const { avatar, account, isLogin, isAdmin } = storeToRefs(user)

const rightDrawerOpen = ref(false)
const toggleRightDrawer = () => {
  rightDrawerOpen.value = !rightDrawerOpen.value
}

const navItems = computed(() => {
  return [
    { to: '/', text: '回首頁', icon: 'home', show: isLogin },
    { to: '/admin/bike', text: '重機管理', icon: 'settings', show: isLogin && isAdmin },
    { to: '/register', text: '註冊', icon: '', show: !isLogin },
    { to: '/login', text: '登入', icon: '', show: !isLogin }
    // { text: '登出', icon: '' }
  ]
})
</script>

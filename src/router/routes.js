const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('pages/front/HomeView.vue'),
        meta: {
          title: '重機網',
          login: true,
          admin: false
        }
      },
      {
        path: 'register',
        component: () => import('pages/front/RegisterView.vue'),
        meta: {
          title: '重機網 || 註冊',
          login: false,
          admin: false
        }
      },
      {
        path: 'explorekawa',
        component: () => import('pages/front/ExploreKawa.vue'),
        meta: {
          title: '重機網 || 探索kawa',
          login: true,
          admin: false
        }
      },
      {
        path: 'login',
        component: () => import('pages/front/LoginView.vue'),
        meta: {
          title: '重機網 || 登入',
          login: false,
          admin: false
        }
      },
      {
        path: 'introbike',
        component: () => import('pages/front/IntroBike.vue'),
        meta: {
          title: '重機網 || 車款介紹',
          login: true,
          admin: false
        }
      },
      {
        path: 'newcenter',
        component: () => import('pages/front/NewCenter.vue'),
        meta: {
          title: '重機網 || 車款比較',
          login: true,
          admin: false
        }
      },
      {
        path: 'donetkawa',
        component: () => import('pages/front/DonteKawa.vue'),
        meta: {
          title: '重機網 || 斗內kawa',
          login: true,
          admin: false
        }
      },
      {
        path: 'introbike/:id',
        component: () => import('pages/front/bike/BikeBike.vue'),
        meta: {
          title: '重機網 || Bike',
          login: true,
          admin: false
        }
      },
      {
        path: 'like',
        component: () => import('pages/front/likeBike.vue'),
        meta: {
          title: '重機網 || Like',
          login: true,
          admin: false
        }
      }
    ]
  },
  {
    path: '/admin',
    component: () => import('layouts/AdminLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/admin/HomeView.vue'),
        meta: {
          title: '重機管理',
          login: true,
          admin: true
        }
      },
      {
        path: 'bikeview',
        component: () => import('pages/admin/BikeView.vue'),
        meta: {
          title: '重機網 || 管理',
          login: true,
          admin: true
        }
      },
      {
        path: 'bike',
        component: () => import('pages/admin/BikeManagement.vue'),
        meta: {
          title: '重機網 || 想管',
          login: true,
          admin: true
        }
      }
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
    meta: {
      title: '頁面未找到'
    }
  }
]

export default routes

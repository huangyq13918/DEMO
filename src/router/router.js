import Home from '@/views/Home.vue'
export const routes = [
  {
    path: '/',
    name: 'Home',
    alias: '/home_page', // 路由别名
    component: Home
  },
  {
    path: '/about',
    name: 'About', // 命名路由
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue') // 懒加载，访问时才引入
  },
  {
    path: '/argu/:name', // 路由传参
    name: 'argu',
    component: () => import(/* argu */ '@/views/argu.vue')

  },
  {
    path: '/parent',
    component: () => import(/* parent */ '@/views/parent.vue'),
    children: [
      {
        path: 'child',
        component: () => import(/* child */ '@/views/child.vue')
      }
    ]
  },
  {
    path: '/named_view',
    components: {
      /* 命名视图 */
      default: () => import(/* child */ '@/views/child.vue'),
      email: () => import(/* eamil */ '@/views/Eamil.vue'),
      tel: () => import(/* tel */ '@/views/Tel.vue')
    }
  },
  /* 重定向路由 */
  {
    path: '/main',
    redirect: to => '/'
  }
]

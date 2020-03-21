import Home from '@/views/Home.vue'
export const routes = [
  {
    path: '/',
    name: 'Home',
    alias: '/home_page', // 路由别名
    component: Home,
    props: route => ({ // 函数传值
      food: route.query.food
    })
  },
  {
    path: '/about',
    name: 'About', // 命名路由
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'), // 懒加载，访问时才引入
    props: { // 属性传参
      food: 'banan'
    }
  },
  // {
  //   path: '/login',
  //   name: 'login',
  //   component: () => import(/* login */ '@/views/login.vue')
  // },
  {
    path: '/argu/:name', // 路由动态传参
    name: 'argu',
    component: () => import(/* argu */ '@/views/argu.vue'),
    props: true // 参数会使用组件props

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
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* tel */ '@/views/Tel.vue')
  },
  {
    path: '*', // 所有匹配不到的路由到指向404页面（必须写在最后）
    component: () => import(/* 404页面 */ '@/views/error_404.vue')
  }
]

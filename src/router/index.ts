import TabsView from '@/views/tabs/TabsView.vue'
import HomeView from '@/views/tabs/home/HomeView.vue'
import OrderView from '@/views/tabs/order/OrderView.vue'
import MeView from '@/views/tabs/me/MeView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/tabs',
      name: 'tabs',
      component: TabsView,
      children: [
        {
          name: 'home',
          path: '/home',
          component: HomeView
        },
        {
          name: 'order',
          path: '/order',
          component: OrderView
        },
        {
          name: 'me',
          path: '/me',
          component: MeView
        }
      ]
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router

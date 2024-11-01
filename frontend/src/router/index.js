import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/MainView.vue'),
      props: true,
    },
    {
      path: '/test',
      name: 'test',
      component: () => import('../views/BoilerPlate.vue')
    },
    {
      path: '/item',
      name: "item",
      children: [
        {
          path: '/item/:id',
          name: 'itemid',
          component: () => import('../views/ProductView.vue'),
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

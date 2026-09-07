import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'typewriter',
      component: () => import('@/views/pageTypewriter/PageTypewriter.vue'),
    },
  ],
})

export default router

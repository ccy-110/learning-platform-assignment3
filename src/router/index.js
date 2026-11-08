import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/assignment3',
  },
  {
    path: '/assignment3',
    name: 'Assignment3',
    component: () => import('../views/LearningPlatform.vue'),
    meta: { title: '在线学习平台首页' },
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/assignment3',
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.afterEach((to) => {
  document.title = to.meta.title
    ? `${to.meta.title} - Web前端开发学习平台`
    : 'Web前端作业平台'
})

export default router

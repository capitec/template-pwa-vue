import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../modules/module-a/ViewHome.vue')
    },
    {
      path: '/components',
      name: 'Components',
      component: () => import('../modules/module-a/ViewComponents.vue')
    },
    {
      path: '/form',
      name: 'Form',
      component: () => import('../modules/module-b/ViewForm.vue')
    }
  ]
});
router.afterEach((to, from, failure) => {
  if (!failure) document.title = to.name?.toString() as string;
});

export default router;
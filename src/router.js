import { createRouter, createWebHistory } from 'vue-router';
import PageHome from '@/components/PageHome';
import PageDetail from '@/components/PageDetail';
import PageTest from '@/components/PageTest';
const routes = [
  { path: '/', component: PageHome },
  { path: '/detail', component: PageDetail },
  { path: '/test', component: PageTest },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;

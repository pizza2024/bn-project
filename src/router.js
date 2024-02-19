import { createRouter, createWebHistory } from 'vue-router';
import PageHome from '@/components/PageHome';
import PageDetail from '@/components/PageDetail';
import PageSetting from '@/components/PageSetting';
const routes = [
  { path: '/', component: PageHome },
  { path: '/detail', component: PageDetail },
  { path: '/setting', component: PageSetting },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;

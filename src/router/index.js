import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/HomePage.vue';
import AboutPage from '../views/AboutPage.vue';
import CareerPage from '../views/CareerPage.vue';
import SkillsPage from '../views/SkillsPage.vue';
import WorksPage from '../views/WorksPage.vue';
import ResearchPage from '../views/ResearchPage.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: AboutPage,
  },
  {
    path: '/career',
    name: 'Career',
    component: CareerPage,
  },
  {
    path: '/skills',
    name: 'Skills',
    component: SkillsPage,
  },
  {
    path: '/works',
    name: 'Works',
    component: WorksPage,
  },
  {
    path: '/research',
    name: 'Research',
    component: ResearchPage,
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      };
    }
    return { top: 0 };
  },
});

export default router;

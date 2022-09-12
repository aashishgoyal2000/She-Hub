import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import loginPage from '@/views/temp/loginPage.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: '/menstrual-cycle',
      name: 'Menstrual Cycle',
      component: () => import('@/views/MenstrualCycle.vue')
    },
    {
      path: '/loginPage',
      name: 'login',
      component: loginPage
    },
    {
      path: "/information-center",
      name: "Information Center",
      /*
       * route level code-splitting
       * this generates a separate chunk (About.[hash].js) for this route
       * which is lazy-loaded when the route is visited.
       */
      component: () => import("../pages/InformationCenter.vue"),
    },
    {
      path: "/information-center/articles/:id",
      component: () => import("../pages/articles/index.vue"),
    },
    {
      path: '/community-support',
      name: 'community-forum',
      component: () => import('@/views/temp/Forum.vue')
    },
    {
      path: '/registration',
      name: 'registration',
      component: () => import('@/views/temp/Registration.vue')
    },
    {
      path: '/public-chat',
      name: 'Public Chat',
      component: () => import('@/views/PublicChat.vue')
    },
    {
      path: '/meet-up',
      name: 'Meet Up',
      component: () => import('@/views/MeetUp.vue')
    },
    {
      path: '/rewards',
      name: 'rewards',
      component: () => import('@/pages/Rewards.vue')
    }
  ],
});

export default router;

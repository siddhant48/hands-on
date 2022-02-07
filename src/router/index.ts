import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
// import InviteMembers from '@/components/InviteMembers.vue';
// import App from '@/App.vue';
// import Home from '@/views/Home.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/invite',
    name: 'InviteMembers',
    component: () => import(/* webpackChunkName: "about" */ '@/components/InviteMembers.vue'),
  },
  {
    path: '/update',
    name: 'UpdateMembers',
    component: () => import(/* webpackChunkName: "about" */ '@/components/Edit.vue'),
  },
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue'),
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;

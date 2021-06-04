import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/view/Home.vue';
import LogIn from '@/view/LogIn.vue';
import SignUp from '@/view/SignUp.vue';
import UploadOpera from '@/view/UploadOpera.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: LogIn
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUp
  },
  {
    path: '/uploadOpera',
    name: 'uploadOpera',
    component: UploadOpera
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;

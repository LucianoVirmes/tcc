import Vue from 'vue';
import Router from 'vue-router';
import firebase from 'firebase';
import { routes } from './routes.js';

Vue.use(Router);

const router = new Router({
  routes,
  base: process.env.BASE_URL,
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requireAuth);

  if (requiresAuth && !currentUser) next('login');
  else if (!requiresAuth && currentUser) next('home');
  else next();
})

export default  router;
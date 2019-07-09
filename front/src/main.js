import Vue from 'vue';
import App from './App.vue';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import { routes } from './routes';
import './registerServiceWorker';

Vue.use(BootstrapVue);
Vue.use(VueResource);
Vue.config.productionTip = false;

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

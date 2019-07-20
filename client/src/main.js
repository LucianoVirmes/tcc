import Vue from 'vue';
import App from './App.vue';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import VueResource from 'vue-resource';
import './registerServiceWorker';
import router from './route/router.js';

Vue.use(BootstrapVue);
Vue.use(VueResource);
Vue.config.productionTip = false;


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

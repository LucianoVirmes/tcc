import Vue from 'vue';
import App from './App.vue';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import VueResource from 'vue-resource';
import './registerServiceWorker';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faTrash, faPen, faPlus } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import router from './route/router.js';
import VueMoment from 'vue-moment';

library.add(faUserSecret, faSearch, faTrash, faPen, faPlus)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(BootstrapVue);
Vue.use(VueMoment);
Vue.use(VueResource);
Vue.config.productionTip = false;


new Vue({
  router,
  render: h => h(App)
}).$mount('#app');

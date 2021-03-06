import Vue from 'vue';
import App from './App.vue';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import VueResource from 'vue-resource';
import './registerServiceWorker';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faTrash, faPen, faPlus, faUser, faBalanceScale, faBoxOpen, faBriefcase, faAddressCard, faTruck, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import router from './route/router.js';
import VueMoment from 'vue-moment';
import VueSimpleSuggest from 'vue-simple-suggest';
import VeeValidate, { Validator } from 'vee-validate';
import VueTheMask from 'vue-the-mask';
import msgBR from 'vee-validate/dist/locale/pt_BR';
import VueGoogleCharts from 'vue-google-charts'
import firebase from 'firebase';
import firebaseConfig from './fireBaseConfig';

library.add(faUserSecret, faSearch, faTrash, faPen, faPlus, faBalanceScale, faBoxOpen, faBriefcase, faAddressCard, faUser, faTruck, faSignOutAlt)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('vue-simple-suggest', VueSimpleSuggest)

Validator.localize('pt_BR', msgBR);
Vue.use(VeeValidate, {
  validity: true,
  events: 'change|blur',
  fieldsBagName: 'formFields',
  locale: 'pt_BR',
});

firebase.initializeApp(firebaseConfig);

Vue.use(VueGoogleCharts);
Vue.use(VueTheMask)
Vue.use(BootstrapVue);
Vue.use(VueMoment);
Vue.use(VueResource);
Vue.http.options.root = 'http://localhost:3000';
Vue.config.productionTip = false;


firebase.auth().onAuthStateChanged(() => {
  new Vue({
    router,
    render: h => h(App)
  }).$mount('#app');
});

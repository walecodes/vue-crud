import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrashAlt, faEdit, faUser, faBuilding } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {fb} from './firebase'
// ES6 Modules or TypeScript
import Swal from 'sweetalert2'

window.Swal = Swal; 

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
});

window.Toast = Toast;


Vue.use(fb);

import VueFirestore from 'vue-firestore';

require('firebase/firestore')

Vue.use(VueFirestore,{
  key: 'id',         // the name of the property. Default is '.key'.
  enumerable: true  //  whether it is enumerable or not. Default is true.
});

library.add(
  faTrashAlt,
  faEdit,
  faUser,
  faBuilding,
);

Vue.component('font-awesome-icon', FontAwesomeIcon)
import 'bulma/css/bulma.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

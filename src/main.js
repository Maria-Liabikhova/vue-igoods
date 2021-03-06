import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import VueSplide from '@splidejs/vue-splide';

Vue.use( VueSplide );

import './assets/main.sass';

import {library} from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';

library.add(fas);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
import Vue from 'vue';
import Element from 'main/index.js';
import App from './play/index.vue';
import '../theme-material/src/index.scss';

Vue.use(Element);

new Vue({
  // eslint-disable-line
  render: h => h(App)
}).$mount('#app');

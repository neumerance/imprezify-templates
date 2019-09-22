import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/veautify.js';
import VueHead from 'vue-head';
Vue.use(VueHead);

new Vue({
  vuetify,
  render: h => h(App),
}).$mount('#app');

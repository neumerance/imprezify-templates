import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/veautify.js'

new Vue({
  vuetify,
  render: h => h(App),
}).$mount('#app');

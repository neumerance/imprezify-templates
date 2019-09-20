import Vue from "vue"
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    dark: false,
  },
  themes: {
    light: {
      primary: '#ff5722',
      secondary: '#673ab7',
      accent: '#ff9800',
      error: '#f44336',
      warning: '#ffc107',
      info: '#00bcd4',
      success: '#4caf50'
    },
  },
});

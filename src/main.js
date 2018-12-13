import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from "firebase"
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

var config = {
  apiKey: "AIzaSyAIVKQ6gKo8qwlOsZQ8tHOZ4razngr-mUc",
  authDomain: "in-a-row-742b3.firebaseapp.com",
  databaseURL: "https://in-a-row-742b3.firebaseio.com",
  projectId: "in-a-row-742b3",
  storageBucket: "in-a-row-742b3.appspot.com",
  messagingSenderId: "245310019524"
};
firebase.initializeApp(config)

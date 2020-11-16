import Vue from 'vue'
import App from './App.vue'
// import Loader from './components/Loader.vue';
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
// import User from './models/User';
import {io} from 'socket.io-client';
import {scoketEndPoint} from '../config.json';

Vue.config.productionTip = false


const vm: Vue = new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

const socket = io(scoketEndPoint);

socket.on('connect',()=>{
  vm.$store.commit('setSocket',socket);

  socket.on('userLeft',function handleLeave(data: {name: string; socketId: string}): void{
    vm.$store.commit('removeUser',data.socketId);
  });

  socket.on('diconnect',()=>{
    vm.$store.commit('removeSocket');
  }); 

});

export default vm;
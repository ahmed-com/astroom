import { Socket } from 'socket.io-client';
import Vue from 'vue'
import Vuex from 'vuex'
import User from '../models/User';
import { joinRoomEndPoint , createRoomEndPoint } from '../../config.json';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    inRoom : false as boolean,
    myName : null as string | null,
    mySocket : null as Socket | null,
    room : null as string | null,
    users: [] as User[]
  },

  mutations: {

    pushUser({users},user: User): void{
      if(users.length < 4 ) users.push(user);
    },

    removeUser({users},socketId: string): void{
      users.forEach((user,index)=>{
        if(user.socketId === socketId) users.splice(index,1);
      })
    },

    setSocket(state,socket: Socket){
      state.mySocket = socket;
    },

    removeSocket(state){
      state.mySocket = null;
    },

    setRoom(state,room: string){
      state.inRoom = true;
      state.room = room;
    },

    setName(state,name: string){
      state.myName = name;
    }

  },

  getters : {

    users(state): User[]{
      return state.users;
    },

    socket(state): Socket | null{
      return state.mySocket;
    },

    name(state): string{
      if(state.myName === null){
        return '';
      }else{
        return state.myName;
      }
    },

    socketId(state): string{
      return state.mySocket ? state.mySocket.id : ''
    },

    room(state): string{
      return state.inRoom ? state.room! : '';
    },

    inRoom(state): boolean{
      return state.inRoom;
    }

  },

  actions: {

    createRoom({commit,getters},name: string){
      const socketId = getters.socketId;
      return fetch(createRoomEndPoint,{
        method: 'post',
        headers : {'Content-Type' : 'application/json'},
        body : JSON.stringify({name , socketId})
      })
      .then(res => {
        if(res.status !== 201) throw new Error("PLEASE TRY AGAIN LATER");
        return res.json();
      })
      .then(res=>{
        commit('setRoom',res.room);
        commit('setName',name);
      });
    },
    
    joinRoom({commit,getters},data: {name: string; room: string}){
      const {name, room} = data;
      const socketId = getters.socketId;
      return fetch(joinRoomEndPoint,{
        method: 'post',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify({name,  room, socketId})
      })
      .then(res=>{
        if(res.status !== 200) throw new Error("PLEASE TRY AGAIN LATER");
        return res.json();
      })
      .then(res=>{
        commit('setRoom',room);
        commit('setName',name);
        res.users.forEach((userInfo: {name: string; socketId: string})=>{
          const user: User = new User(userInfo.name,userInfo.socketId);
          commit('pushUser',user);
        });
      });
    }

  },
  modules: {
  }
})

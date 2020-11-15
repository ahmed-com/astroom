<template>
  <v-app >
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <video autoplay muted width="100%" ref="me" id="me" ></video>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Astroom</v-toolbar-title>
      <v-spacer />
      <h2>join link:</h2><h6>{{joinLink}}</h6>
    </v-app-bar>

    <v-main>
      <Users v-if="inRoom" />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import Users from '@/components/Users.vue'
import {Prop,Component} from 'vue-property-decorator'
import User from '../models/User';

@Component({
    components: {
        Users
    }
})
export default class Conference extends Vue{
    drawer = true

    $refs!: {
        me: HTMLMediaElement;
    }

    get inRoom(): boolean{
        return this.$store.getters.inRoom
    }

    get name(): string{
        let name = this.$store.getters.name;
        if(name === '') name = this.$route.query.name;
        while(!name) name = prompt('please enter your name');
        return `${name}`;
    }

    get room(): string{
        let room = this.$store.getters.room;
        if(room === '') room = this.$route.query.room;
        if(!room) this.$router.replace('/');
        return `${room}`;
    }

    get joinLink(): string{
        const baseUrl = window.location.origin;
        const queryParams = `?room=${this.room}`
        return baseUrl + '/conference' + queryParams;
    }

    initializeApp(stream: MediaStream){
        User.setMyStream(stream);

        if(!this.inRoom){
            this.$store.dispatch('joinRoom',{
                room: this.room,
                name: this.name
            });
        }

        this.$store.getters.socket.on('userJoined',(data: {name: string; socketId: string}): void =>{
            const user: User = new User(data.name, data.socketId);
            this.$store.commit('pushUser',user);
            user.connect();
        });

        this.$refs.me.srcObject = stream
    }

    mounted(){
        navigator.getUserMedia(
            {video: true, audio: true},
            stream => this.initializeApp(stream),
            err => console.log(err.message)
        )
    }
}
</script>
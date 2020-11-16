<template>
    <v-card height="300">
        <video :id="id" autoplay loop controls muted width="100%" ref="user" ></video>
        <h2>{{name}}</h2>
        <h6>{{id}}</h6>
    </v-card>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from "vue-class-component"
import UserModel from '../models/User'

const UserProps = Vue.extend({
    props : {
        user: UserModel
    }
})

@Component
export default class User extends UserProps{

    get name(): string{
        return this.user.name;
    }

    get id(): string{
        return this.user.socketId;
    }

    $refs!: {
        user: HTMLMediaElement;
    }

    get videoEl(): HTMLMediaElement{
        return this.$refs.user;
    }

    async beforeMount(){
        const videoStream: MediaStream = await this.user.getVideoStream();
        this.playVideo(videoStream);
    }

    playVideo(stream: MediaStream){
        this.videoEl.srcObject = stream;
        this.videoEl.play();
    }

}
</script>
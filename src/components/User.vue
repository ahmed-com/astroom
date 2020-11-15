<template>
    <v-card height="300">
        <video :id="id" autoplay muted width="100%" ref="user" ></video>
        <h2>{{name}}</h2>
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

    mounted(){
        const videoStream: MediaStream = this.user.stream;
        this.playVideo(videoStream);
    }

    playVideo(stream: MediaStream){
        this.$refs.user.srcObject = stream;
    }

}
</script>
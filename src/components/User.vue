<template>
    <v-card height="300">
        <video autoplay ref="user" muted width="100%"></video>
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

    $refs!: {
        user: HTMLMediaElement;
    }

    async mounted(){
        const videoStream: MediaStream = await this.user.getVideoStream();
        this.playVideo(videoStream);
    }

    playVideo(stream: MediaStream){
        this.$refs.user.srcObject = stream;
    }

}
</script>
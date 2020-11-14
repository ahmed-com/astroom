<template>
    <div>
        <input v-model="name" />
        <button @click="createRoom()">create room</button>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component
export default class Home extends Vue{
    name = 'User'

    async createRoom(){
        await this.$store.dispatch('createRoom',this.name);
        this.$router.replace('/conference');
    }

    
}
</script>
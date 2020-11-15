<template>
    <v-container class="grey lighten-5 mb-6">
        <v-row align="center" style="height: 150px;">
            <v-col align-self="center">
                <v-card outlined tile class="pa-2">
                    <input v-model="name" />
                    <button @click="createRoom()">create room</button>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
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
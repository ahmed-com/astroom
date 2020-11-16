<template>
  <router-view v-if="isConnected" />
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator'

@Component
export default class App extends Vue{

  get isConnected(): boolean{
    return this.$store.getters.socket === null ? false : true;
  }

}
</script>

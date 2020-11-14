<template>
    <v-container>
        <v-row>
          <v-col
            v-for="user in usersList"
            :key="user.socketId"
            cols="6"
          >
            <User :user="user" />
          </v-col>
        </v-row>
      </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import User from "./User.vue"

@Component({
    components: {
        User
    }
})
export default class Users extends Vue {

    usersList = this.$store.getters.users

}
</script>
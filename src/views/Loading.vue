<template>
  <v-sheet
    :color="`grey ${theme.isDark ? 'darken-2' : 'lighten-4'}`"
    class="pa-3"
  >
    <v-skeleton-loader
      class="mx-auto"
      max-width="300"
      type="card"
    ></v-skeleton-loader>
  </v-sheet>
</template>

<script lang="ts">
export default {
  inject: {
    theme: {
      default: { isDark: false },
    },
  }
}
</script>
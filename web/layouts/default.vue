<template>
  <v-app>
    <v-layout justify-center
              align-top>
      <v-flex xs12
              sm8
              md8>
        <nuxt></nuxt>
      </v-flex>
    </v-layout>
  </v-app>
</template>

<script>
export default {
  data () {
    return {

      title: 'Contacts'
    }
  }
}
</script>

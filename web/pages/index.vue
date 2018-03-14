<template>
  <v-layout justify-center
            align-center>
    <v-flex xs12
            sm8
            md6>
      <v-card>
        <v-toolbar>
          <v-toolbar-side-icon></v-toolbar-side-icon>
          <v-toolbar-title>Contacts</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-list>
            <v-list-tile v-for='contact in contacts'
                         :key='contact.id'
                         nuxt
                         :to='`/${contact.id}`'>
              <v-list-tile-avatar>
                <v-icon>person</v-icon>
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title>{{contact.firstName}} {{contact.lastName}}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary"
                 flat
                 to="/create">New</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>


<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('contacts', ['contacts'])
  },
  async fetch ({ store }) {
    await store.dispatch('contacts/retrieveContacts')
  }
}
</script>

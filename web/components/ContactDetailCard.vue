<template>
  <v-card>
    <v-toolbar>
      <v-toolbar-side-icon to='/'>
        <v-icon >arrow_back</v-icon>
      </v-toolbar-side-icon>
      <v-spacer></v-spacer>
      <v-btn icon nuxt :to='`/edit/${$route.params.id}/`'>
        <v-icon>edit</v-icon>
      </v-btn>
    </v-toolbar>
    <v-card-media height="200px">
      <v-layout row
                wrap
                align-center
                justify-center>
        <v-icon size='150px'>account_circle</v-icon>
      </v-layout>    
    </v-card-media>
    <v-card-text>
      <v-list>
        <v-list-tile>
          <span class="title">{{name}}</span>
        </v-list-tile>
        <v-divider></v-divider>
        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-sub-title>Birthday</v-list-tile-sub-title>
            <v-list-tile-title>{{dob}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-divider></v-divider>
        <v-subheader>Phone Numbers</v-subheader>
        <v-list-tile v-for='phone in phoneNumbers'
                     :key='phone'>
          <v-list-tile-avatar>
            <v-icon>phone</v-icon>
          </v-list-tile-avatar>
          <v-list-tile-content>
            <!-- <v-text-field readonly :value='phone'></v-text-field> -->
            <v-list-tile-title>{{phone | phone}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-divider></v-divider>
        <v-subheader>Email Addresses</v-subheader>
        <v-list-tile v-for='email in emailAddresses'
                     :key='email'>
          <v-list-tile-avatar>
            <v-icon>email</v-icon>
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>{{email}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-divider></v-divider>
        <v-subheader>Addresses</v-subheader>
        <v-list-tile v-for='address in addresses'
                     :key='address'>
          <v-list-tile-avatar>
            <v-icon>home</v-icon>
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>{{address}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script>
import { VDivider, VSubheader, VTextField } from 'vuetify'

export default {
  components: { VDivider, VSubheader, VTextField },
  props: {
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    dob: {
      type: String,
      required: true
    },
    emailAddresses: {
      type: Array,
      default: () => []
    },
    addresses: {
      type: Array,
      default: () => []
    },
    phoneNumbers: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    name () {
      return `${this.firstName} ${this.lastName}`
    }
  },
  filters: {
    phone (val) {
      const str = val.toString()
      console.log(val)
      return `(${str.substring(0, 3)}) ${str.substring(3, 6)}-${str.substring(6, 10)}`
    }
  }
}
</script>

<template>
  <v-layout justify-center
            align-center>
    <v-flex xs12
            sm8
            md6>
      <v-card>
        <v-toolbar>
          <v-toolbar-side-icon :to='`/${id}/`'>
            <v-icon>arrow_back</v-icon>
          </v-toolbar-side-icon>
          <v-toolbar-title>Edit Contact</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <contact-form-wrapper :id='id'
                                @submit="save"/>
        </v-card-text>
        <v-card-actions>
          <v-btn icon @click='deleteHandler'>
            <v-icon color='red'>delete</v-icon>
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn color="primary"
                 flat
                 @click='save'>Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
import ContactFormWrapper from '@/components/ContactFormWrapper'
import { mapActions, mapMutations } from 'vuex'

export default {
  components: { ContactFormWrapper },
  methods: {
    ...mapActions('contacts', ['updateContact', 'deleteContact']),
    ...mapMutations('contacts', ['initContact']),
    save () {
      this.updateContact(this.$route.params.id)
    },
    async deleteHandler () {
      await this.deleteContact(this.id)
      this.$router.push('/')
    }
  },
  computed: {
    id () {
      return parseInt(this.$route.params.id)
    }
  },
  async fetch ({ store, params }) {
    await store.dispatch('contacts/retrieveContact', params.id)
  }
}
</script>


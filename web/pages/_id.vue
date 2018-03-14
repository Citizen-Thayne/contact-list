<template>
  <v-layout justify-center
            align-center>
    <v-flex xs12
            sm8
            md6>
      <contact-detail-card v-bind='contact'></contact-detail-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapGetters } from 'vuex'
import ContactDetailCard from '@/components/ContactDetailCard'

export default {
  components: { ContactDetailCard },
  computed: {
    ...mapGetters('contacts', ['getContact']),
    contact () {
      return this.getContact(this.$route.params.id)
    }
  },
  async fetch ({ store, params }) {
    await store.dispatch('contacts/retrieveContact', params.id)
  }
}
</script>


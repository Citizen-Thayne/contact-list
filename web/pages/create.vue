<template>
  <v-layout justify-center
            align-center>
    <v-flex xs12
            sm8
            md6>
      <v-card>
        <v-toolbar>
          <v-toolbar-side-icon @click='$router.push("/")'>
            <v-icon>arrow_back</v-icon>
          </v-toolbar-side-icon>
          <v-toolbar-title>New Contact</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <contact-form-wrapper :id='-1'
                                @submit="save"></contact-form-wrapper>
        </v-card-text>
        <v-card-actions>
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
    ...mapActions('contacts', ['createContact']),
    ...mapMutations('contacts', ['initContact']),
    async save () {
      const contact = await this.createContact()
      this.$router.push(`/${contact.id}`)
    }
  },
  created () {
    // -1 index is space for new contact
    // Clear on new form
    this.initContact(-1)
  }
}
</script>


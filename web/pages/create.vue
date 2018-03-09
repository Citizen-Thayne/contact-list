<template>
  <v-layout justify-center align-center>
    <v-flex xs12 sm8 md6>
      <v-card>
        <v-toolbar>
          <v-toolbar-title>New Contact</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <contact-form></contact-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" flat nuxt>Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>


<script>
import ContactForm from '@/components/ContactForm'

export default {
  components: { ContactForm }
}
</script>

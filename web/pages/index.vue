<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <v-card>
        <v-card-title class="headline">Contacts</v-card-title>
        <v-card-text>
          <v-list>
            <v-list-item>

            </v-list-item>
          </v-list>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" flat nuxt to="/inspire">Continue</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>


<script>
export default {
  data: () => ({
    contacts: [
      {
        firstName: 'Bob',
        lastName: 'Smith',
        addresses: ['12345 Fake Rd Street, 77777, AL', '67890 Test Ave, 222222, AK'],
        emailAddressses: ['fake@test.com', 'test@fake.com'],
        phoneNumbers: [1234567890, 10987654321]
      }
    ]
  })
}
</script>

<template>
  <v-layout justify-center align-center>
    <v-flex xs12 sm8 md6>
      <v-card>
        <v-toolbar>
          <v-toolbar-side-icon></v-toolbar-side-icon>
          <v-toolbar-title>Contacts</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-list>
            <v-list-tile v-for='contact in contacts' :key='contact.id'>
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
          <v-btn color="primary" flat nuxt to="/create">New</v-btn>
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
        phoneNumbers: [1234567890, 10987654321],
        id: 1
      }
    ]
  })
}
</script>

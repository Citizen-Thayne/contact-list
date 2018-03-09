<template>
  <v-form>
    <v-text-field label='First Name' v-model='firstName' required />
    <v-text-field label='Last Name' v-model='lastName' required />
    <v-date-picker label='Birthday' v-model='dob' required />
    <!-- <v-text-field label='First Name' v-model='firstName' required />
    <v-text-field label='First Name' v-model='firstName' required /> -->
  </v-form>
</template>


<script>
export default {
  data: () => ({
    firstName: '',
    lastName: '',
    dob: Date.now(),
    emailAddresses: [],
    addresses: [],
    phoneNumbers: []
  })
}
</script>

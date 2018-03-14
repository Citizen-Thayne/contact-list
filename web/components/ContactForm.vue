<template>
  <v-form :value='valid'
          @input='(val) => emitUpdate("valid", val)'>
    <v-text-field label='First Name'
                  :value='firstName'
                  @input='(val) => emitUpdate("firstName", val)'
                  :rules='[rules.required]' />
    <v-text-field label='Last Name'
                  :value='lastName'
                  @input='(val) => emitUpdate("lastName", val)'
                  :rules='[rules.required]' />
    <v-menu ref="menu"
            lazy
            full-width
            :close-on-content-click="false"
            v-model="dobMenu"
            transition="scale-transition"
            offset-y
            :nudge-right="40"
            min-width="290px">
      <v-text-field slot="activator"
                    label="Birthday date"
                    v-model="dob"
                    prepend-icon="event"
                    readonly
                    :rules='[rules.required]'></v-text-field>
      <v-date-picker ref="picker"
                     :value='dob'
                     @input='(val) => emitUpdate("dob", val)'
                     min="1950-01-01"
                     :max="new Date().toISOString().substr(0, 10)"></v-date-picker>
    </v-menu>

    <v-list>
      <v-divider></v-divider>
      <v-subheader>Email Addresses</v-subheader>
      <v-list-tile v-if='errors && errors.emailAddresses'>
        <v-alert type='error'
                 outline
                 v-for='error in errors.emailAddresses'
                 :value='true'
                 :key='error'>
          {{error}}
        </v-alert>
      </v-list-tile>
      <v-list-tile v-for='(email, index) in emailAddresses'
                   :key='index'>
        <v-text-field :value='emailAddresses[index]'
                      prepend-icon="email"
                      @input='(val) => updateEmail(index, val)'
                      append-icon='delete'
                      :append-icon-cb='() => removeEmail(index)'
                      :rules='[rules.required, rules.email]' />
      </v-list-tile>
      <v-list-tile>
        <v-btn @click='newEmail'>Add Email Address</v-btn>
      </v-list-tile>
    </v-list>

    <v-list>
      <v-divider></v-divider>
      <v-subheader>Addresses</v-subheader>
      <v-list-tile v-if='errors && errors.addresses'>
        <v-alert type='error'
                 outline
                 v-for='error in errors.addresses'
                 :value='true'
                 :key='error'>
          {{error}}
        </v-alert>
      </v-list-tile>
      <v-list-tile v-for='(address, index) in addresses'
                   :key='index'>
        <v-text-field :value='addresses[index]'
                      prepend-icon="home"
                      @input='(val) => updateAddress(index, val)'
                      append-icon='delete'
                      :append-icon-cb='() => removeAddress(index)'
                      :rules='[rules.required]' />
      </v-list-tile>
      <v-list-tile>
        <v-btn @click='newAddress'>Add Address</v-btn>
      </v-list-tile>
    </v-list>

    <v-list>
      <v-divider></v-divider>
      <v-subheader>Phone Numbers</v-subheader>
      <v-list-tile v-if='errors && errors.phoneNumbers'>
        <v-alert type='error'
                 outline
                 v-for='error in errors.phoneNumbers'
                 :value='true'
                 :key='error'>
          {{error}}
        </v-alert>
      </v-list-tile>
      <v-list-tile v-for='(phone, index) in phoneNumbers'
                   :key='index'>
        <v-text-field :value='phoneNumbers[index]'
                      prepend-icon="phone"
                      @input='(val) => updatePhoneNumber(index, val)'
                      mask='phone'
                      append-icon='delete'
                      :append-icon-cb='() => removePhoneNumber (index)'
                      validate-on-blur
                      :rules='[rules.required, rules.phone]' />
      </v-list-tile>
      <v-list-tile>
        <v-btn @click='newPhoneNumber'>Add Phone Number</v-btn>
      </v-list-tile>
    </v-list>
  </v-form>
</template>


<script>
import { VForm, VTextField, VMenu, VDivider, VSubheader, VDatePicker, VAlert } from 'vuetify'

export default {
  components: { VForm, VTextField, VMenu, VDivider, VSubheader, VDatePicker, VAlert },
  data () {
    return {
      dobMenu: false,
      rules: {
        required: (value) => !!value || 'Required',
        email: (value) => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Invalid e-mail.'
        },
        phone: (value) => {
          const pattern = /\d{10}/
          return pattern.test(value) || 'Invalid Phone Number'
        }
      }
    }
  },
  props: {
    firstName: {
      type: String,
      default: ''
    },
    lastName: {
      type: String,
      default: ''
    },
    dob: {
      type: String,
      default: ''
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
    },
    valid: {
      type: Boolean,
      default: false
    },
    errors: {
      type: Object,
      defualt: () => { }
    }
  },
  methods: {
    emitUpdate (propName, value) {
      this.$emit('update', { propName, value })
    },
    submit () {
      this.$emit('submit')
    },
    newEmail () {
      const emails = [...this.emailAddresses, '']
      this.emitUpdate('emailAddresses', emails)
    },
    updateEmail (index, val) {
      let emails = [...this.emailAddresses]
      emails[index] = val
      this.emitUpdate('emailAddresses', emails)
    },
    removeEmail (index) {
      let emails = [...this.emailAddresses]
      emails.splice(index, 1)
      this.emitUpdate('emailAddresses', emails)
    },
    newAddress () {
      const addresses = [...this.addresses, '']
      this.emitUpdate('addresses', addresses)
    },
    updateAddress (index, val) {
      let addresses = [...this.addresses]
      addresses[index] = val
      this.emitUpdate('addresses', addresses)
    },
    removeAddress (index) {
      let addresses = [...this.addresses]
      addresses.splice(index, 1)
      this.emitUpdate('addresses', addresses)
    },
    newPhoneNumber () {
      const phoneNumbers = [...this.phoneNumbers, '']
      this.emitUpdate('phoneNumbers', phoneNumbers)
    },
    updatePhoneNumber (index, val) {
      let phoneNumbers = [...this.phoneNumbers]
      phoneNumbers[index] = val
      this.emitUpdate('phoneNumbers', phoneNumbers)
    },
    removePhoneNumber (index) {
      let phoneNumbers = [...this.phoneNumbers]
      phoneNumbers.splice(index, 1)
      this.emitUpdate('phoneNumbers', phoneNumbers)
    }
  }
}
</script>
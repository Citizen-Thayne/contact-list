<template>
  <contact-form v-bind='contact' @update='updateContact' @submit='$emit("submit")'></contact-form>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
import ContactForm from '@/components/ContactForm'

export default {
  components: { ContactForm },
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  computed: {
    ...mapGetters('contacts', ['getContact']),
    contact () {
      return this.getContact(this.id)
    }
  },
  methods: {
    ...mapMutations('contacts', ['updateContactProp']),
    updateContact ({ propName, value }) {
      const id = this.id
      if (propName === 'phoneNumbers') {
        value = value.map(p => parseInt(p))
      }
      this.updateContactProp({ id, propName, value })

      // Temp bug fix. New props sometimes won't trigger reactive updates. Need to investigate further
      this.$forceUpdate()
    }
  }
}
</script>

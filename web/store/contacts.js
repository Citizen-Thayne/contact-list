import Vue from 'vue'

export const state = () => ({
  contacts: {},
  errors: []
})

export const mutations = {
  insertContact ({ contacts }, contact) {
    contacts[contact.id] = contact
  },
  initContact: ({ contacts }, id) =>
    (contacts[id] = {
      id,
      firstName: '',
      lastName: '',
      dob: '',
      emailAddressses: [],
      addresses: [],
      phoneNumbers: [],
      valid: false
    }),
  updateContactProp ({ contacts }, { id, propName, value }) {
    Vue.set(contacts[id], propName, value)
  },
  removeContact ({ contacts }, id) {
    delete contacts[id]
  },
  setErrors: (state, errors) => (state.errors = errors)
}

export const getters = {
  getContact: ({ contacts }) => id => contacts[id],
  contacts: ({ contacts }) => {
    let c = { ...contacts }
    delete c[-1]
    return c
  }
}

export const actions = {
  async retrieveContacts ({ commit }) {
    try {
      const contacts = await this.$axios.$get('/api/contacts/')
      contacts.forEach(c => commit('insertContact', c))
    } catch (error) {
      commit('setErrors', [{ type: 'request', error }])
    }
  },
  async retrieveContact ({ commit }, id) {
    try {
      const contact = await this.$axios.$get(`/api/contacts/${id}/`)
      commit('insertContact', contact)
    } catch (error) {
      commit('setErrors', [{ type: 'request', error }])
    }
  },
  async updateContact ({ commit, state }, id) {
    try {
      await this.$axios.$patch(`/api/contacts/${id}/`, state.contacts[id])
    } catch (error) {
      commit('setErrors', [{ type: 'request', error }])
    }
  },
  async createContact ({ commit, state }) {
    const data = state.contacts[-1]
    try {
      const contact = await this.$axios.$post('/api/contacts/', data)
      return contact
    } catch (error) {
      commit('setErrors', [{ type: 'request', error }])
    }
  },
  async deleteContact ({ commit, state }, id) {
    await this.$axios.$delete(`/api/contacts/${id}/`)
    commit('removeContact', id)
  }
}

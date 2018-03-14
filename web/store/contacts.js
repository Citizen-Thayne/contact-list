import Vue from 'vue'

export const SAVE_STATES = {
  INITIAL: 'INITIAL',
  PENDING: 'PENDING',
  COMPLETED: 'COMPLETED',
  ERROR: 'ERROR'
}

export const state = () => ({
  contacts: {},
  errors: [],
  saveState: SAVE_STATES.INITIAL
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
  setErrors: (state, errors) => (state.errors = errors),
  setSaveState: (state, saveState) => (state.saveState = saveState)
}

export const getters = {
  getContact: ({ contacts }) => id => contacts[id]
}

export const actions = {
  async retrieveContacts ({ commit }) {
    try {
      const contacts = await this.$axios.$get('/api/contacts/')
      contacts.forEach(c => commit('insertContact', c))
    } catch (error) {
      commit('setErrors', [{ type: 'request', error }])
      // console.error(error)
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
  async createContact ({ commit, state }) {
    const contact = state.contacts[-1]
    commit('setSaveState', SAVE_STATES.PENDING)
    try {
      console.log(contact)
      await this.$axios.$post('/api/contacts/', contact)
      commit('setSaveState', SAVE_STATES.COMPLETED)
    } catch (error) {
      commit('setSaveState', SAVE_STATES.ERROR)
      commit('setErrors', [{ type: 'request', error }])
      console.log(error)
    }
  }
}

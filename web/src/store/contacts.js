import axios from 'axios'
import Vue from 'vue'

export const SAVE_STATES = {
  INITIAL: 'INITIAL',
  PENDING: 'PENDING',
  COMPLETED: 'COMPLETED',
  ERROR: 'ERROR'
}

export const state = {
  contacts: {},
  errors: [],
  saveState: SAVE_STATES.INITIAL
}

export const mutations = {
  insertContact ({ contacts }, contact) {
    contacts[contact.id] = contact
  },
  initContact: ({contacts}, id) => (contacts[id] = {
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
    commit('insertContact', {
      firstName: 'Bob',
      lastName: 'Smith',
      addresses: [
        '12345 Fake Rd Street, 77777, AL',
        '67890 Test Ave, 222222, AK'
      ],
      emailAddressses: ['fake@test.com', 'test@fake.com'],
      phoneNumbers: [1234567890, 10987654321],
      id: 1
    })
  },
  async createContact ({ commit, state }) {
    const contact = state.contacts[-1]
    commit('setSaveStatus', SAVE_STATES.PENDING)
    try {
      await axios.post('/api/contacts', contact)
      commit('setSaveStatus', SAVE_STATES.COMPLETED)
    } catch (error) {
      commit('setSaveStatus', SAVE_STATES.ERROR)
      commit('setErrors', [{ type: 'request', error }])
    }
  }
}

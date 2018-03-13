import Vue from 'vue'
import Vuex from 'vuex'
import * as contacts from './contacts'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    contacts
  },
  strict: debug
})

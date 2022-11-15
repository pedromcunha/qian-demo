import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    web3: ''
  },
  mutations: {
    changeValue(state, newVal) {
      state.web3 = newVal
    }
  },
  actions: {
  },
  modules: {
  }
})

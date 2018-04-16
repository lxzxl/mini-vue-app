import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

export const config = {
  state: {
    comments: []
  },
  actions,
  mutations
}

export default new Vuex.Store(config)

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

// FIXME: it's no safe to use config here, should use deepClone instead.
export default new Vuex.Store(config)

export default {
  addComment ({ commit, state }, comment) {
    commit('saveComment', { uid: +new Date(), ...comment })
    // TODO: can be saved into localStoreage.
  }
}

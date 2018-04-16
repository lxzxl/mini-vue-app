import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import { config as storeConfig } from '@/store'

describe('store should working as expect.', () => {
  it('add comment to comments when addComment action is dispatched', () => {
    const localVue = createLocalVue()
    localVue.use(Vuex)
    const store = new Vuex.Store(storeConfig)
    expect(store.state.comments).toEqual([])
    const newComment = {
      name: 'Steven',
      content: 'this is a test string.'
    }
    store.dispatch('addComment', newComment)
    const newCommentInStore = store.state.comments[0]
    expect('' + newCommentInStore.uid).toMatch(/\d+/)
    expect(newCommentInStore.name).toEqual(newComment.name)
    expect(newCommentInStore.content).toEqual(newComment.content)
  })
})

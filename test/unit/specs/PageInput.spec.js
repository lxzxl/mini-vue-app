import { shallow, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import PageInput from '@/pages/PageInput'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('PageInput.vue', () => {
  let actions
  let store

  beforeEach(() => {
    actions = {
      addComment: jest.fn()
    }
    store = new Vuex.Store({
      state: {
        comments: []
      },
      actions
    })
  })
  it('inputs should work', () => {
    const wrapper = shallow(PageInput, { store, localVue })
    const inputs = wrapper.findAll('input')
    const result = wrapper.find('.result')

    // test first input
    let input = inputs.at(0)
    input.element.value = 'Steven'
    input.trigger('input')
    expect(result.text()).toContain('name: Steven')

    // test second input
    input = inputs.at(1)
    input.element.value = 'This is a testing string.'
    input.trigger('input')
    expect(result.text()).toContain('content: This is a testing string.')
  })

  it('save button should work', () => {
    const wrapper = shallow(PageInput, { store, localVue })
    const inputs = wrapper.findAll('input')
    const button = wrapper.find('button')
    // if both inputs are empty, nothing will be saved
    button.trigger('click')
    expect(actions.addComment).not.toHaveBeenCalled()

    // if any inpu have text, save button will work.
    let input = inputs.at(1)
    input.element.value = 'This is a testing string.'
    input.trigger('input')
    button.trigger('click')
    expect(actions.addComment).toHaveBeenCalled()
    // inputs should be cleared
    expect(inputs.at(0).element.value).toBe('')
    expect(inputs.at(1).element.value).toBe('')
  })
})

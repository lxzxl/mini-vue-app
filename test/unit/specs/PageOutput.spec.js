import { shallow, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import PageOutput from '@/pages/PageOutput'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('PageInput.vue', () => {
  let store

  beforeEach(() => {
    store = new Vuex.Store({
      state: {
        comments: [
          {
            uid: 1523890927836,
            name: 'Steven',
            content: 'This is a testing string.'
          },
          {
            uid: 1523890927936,
            name: 'George',
            content: 'I have something to say.'
          }
        ]
      }
    })
  })

  it('should display all comments saved in store', () => {
    const wrapper = shallow(PageOutput, { store, localVue })
    const p = wrapper.findAll('.outputs p')
    expect(p.at(0).text()).toBe('Steven: This is a testing string.')
    expect(p.at(1).text()).toBe('George: I have something to say.')
  })
})

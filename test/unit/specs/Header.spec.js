import { mount, RouterLinkStub } from '@vue/test-utils'
import Header from '@/components/Header'

describe('Header.vue', () => {
  it('should have two links', () => {
    const wrapper = mount(Header, {
      stubs: {
        RouterLink: RouterLinkStub
      }
    })
    const links = wrapper.findAll(RouterLinkStub)
    expect(links.at(0).props().to.name).toBe('PageInput')
    expect(links.at(1).props().to.name).toBe('PageOutput')
  })
})

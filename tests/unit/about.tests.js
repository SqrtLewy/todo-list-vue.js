import { mount } from '@vue/test-utils'
import aboutinfo from '@/components/aboutinfo.vue'

describe('aboutinfo', () => {
  // Now mount the component and you have the wrapper
  const wrapper = mount(aboutinfo)

it('site has a link', () => {
    expect(wrapper.contains('a')).toBe(true)
  })
  
it('site has a image', () => {
    expect(wrapper.contains('img')).toBe(true)
  })
it('checks if h2 is correct', () => {
    expect(wrapper.find('h2').text()).toEqual("Contact me!")
  })
})
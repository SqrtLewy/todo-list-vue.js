import { mount } from '@vue/test-utils'
import todoapp from '@/components/todoapp.vue'

describe('todoapp', () => {
  // Now mount the component and you have the wrapper
  const wrapper = mount(todoapp)

it('site has a button', () => {
    expect(wrapper.contains('button')).toBe(true)
  })
  
it('site has a input', () => {
    expect(wrapper.contains('input')).toBe(true)
  })
})
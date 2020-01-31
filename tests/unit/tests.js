import { mount } from '@vue/test-utils'
import todoapp from '@/components/todoapp.vue';

describe('todoapp', () => {
  // Now mount the component and you have the wrapper
  const wrapper = mount(todoapp)

  it('has a button', () => {
    expect(wrapper.contains('button')).toBe(true)
  })
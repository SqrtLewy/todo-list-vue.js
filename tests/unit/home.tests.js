import { mount } from '@vue/test-utils'
import todoapp from '@/components/todoapp.vue'

describe('todoapp', () => {
  // Now mount the component and you have the wrapper
  const wrapper = mount(todoapp)
  const vm = wrapper.vm

it('site has a button', () => {
    expect(wrapper.contains('button')).toBe(true)
  })
  
it('site has a input', () => {
    expect(wrapper.contains('input')).toBe(true)
  })
  
it('pressing enter adds a new todo', () => {
  expect(wrapper.contains('li')).toBe(false)
  const button = wrapper.find('input.newTodo')
  button.trigger('keyup.enter')
  expect(wrapper.contains('li')).toBe(true)
  })
  
it('checkbox finishes todo', () => {
  expect(wrapper.contains('del')).toBe(false)
  const checkbox = wrapper.find('input.finished')
  checkbox.trigger('click')
  expect(wrapper.contains('del')).toBe(true)
  })

it('"clear list" button delete all todos', () => {
  expect(wrapper.contains('li')).toBe(true)
  const button = wrapper.find('button.btn.btn-primary')
  button.trigger('click')
  expect(wrapper.contains('li')).toBe(false)
  })
  
it('"X" button deletes todo', () => {
  expect(wrapper.contains('li')).toBe(false)
  const buttonAdd = wrapper.find('input.newTodo')
  buttonAdd.trigger('keyup.enter')
  const buttonDel = wrapper.find('button.btn.btn-secondary')
  buttonDel.trigger('click')
  expect(wrapper.contains('li')).toBe(false)
  })
})
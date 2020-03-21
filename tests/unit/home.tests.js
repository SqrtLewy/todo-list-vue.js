import { shallowMount, createLocalVue } from '@vue/test-utils'
import todoapp from '@/components/todoapp.vue'
import Vuex from 'vuex'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('getters', () => {
	let getters
	let store
  it('newTodo', () => {
    const state = {
      newTodo: 'todo 1'
    }
  })
  it('todos', () => {
    const state = {
      todoList: [
        {body: 'todo1', done: false},
        {body: 'todo2', done: true}
      ]
    }
  })
  store = new Vuex.Store({
	  getters
  })


describe('todoapp', () => {

it('site has a button', () => {
	const wrapper = shallowMount(todoapp, { store, localVue })
    expect(wrapper.contains('button')).toBe(true)
  })
  
it('site has a input', () => {
	const wrapper = shallowMount(todoapp, { store, localVue })
    expect(wrapper.contains('input')).toBe(true)
  })
  
it('pressing enter adds a new todo', () => {
	const wrapper = shallowMount(todoapp, { store, localVue })
	expect(wrapper.contains('li')).toBe(false)
	const button = wrapper.find('input.newTodo')
	button.trigger('keyup.enter')
	expect(wrapper.contains('li')).toBe(true)
  })
  
it('checkbox finishes todo', () => {
	const wrapper = shallowMount(todoapp, { store, localVue })
	expect(wrapper.contains('del')).toBe(false)
	const checkbox = wrapper.find('input.finished')
	checkbox.trigger('click')
	expect(wrapper.contains('del')).toBe(true)
  })

it('"clear list" button delete all todos', () => {
	const wrapper = shallowMount(todoapp, { store, localVue })
	expect(wrapper.contains('li')).toBe(true)
	const button = wrapper.find('button.btn.btn-primary')
	button.trigger('click')
	expect(wrapper.contains('li')).toBe(false)
  })
  
it('"X" button deletes todo', () => {
	const wrapper = shallowMount(todoapp, { store, localVue })
	expect(wrapper.contains('li')).toBe(false)
	const buttonAdd = wrapper.find('input.newTodo')
	buttonAdd.trigger('keyup.enter')
	const buttonDel = wrapper.find('button.btn.btn-secondary')
	buttonDel.trigger('click')
	expect(wrapper.contains('li')).toBe(false)
  })
})})
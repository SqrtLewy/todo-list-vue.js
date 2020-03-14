export const GET_TODO = (state, todo) => {
  state.newTodo = todo
}

export const ADD_TODO = (state) => {
  state.todoList.push({body: state.newTodo, done: false, id: Date.now()})
}

export const REMOVE_TODO = (state, todo) => {
  var todos = state.todoList
  todos.splice(todos.indexOf(todo), 1)
}

export const CLEAR_TODO = (state) => {
  state.newTodo = ''
}

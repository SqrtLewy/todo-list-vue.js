export const getTodo = ({commit}, todo) => commit('GET_TODO', todo)
export const addTodo = ({ commit }) => commit('ADD_TODO')
export const removeTodo = ({commit}, todo) => commit('REMOVE_TODO', todo)
export const clearTodo = ({commit}) => commit('CLEAR_TODO')

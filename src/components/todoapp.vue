<template>
    <div class="TodoApp">
        <h2>Todo list</h2>
        <input class="newTodo" :value="newTodo" @change="getTodo" placeholder="Write and press enter..." v-on:keyup.enter="addTodo()">
		<button @click="clearTodos()" class="btn btn-primary">Clear list</button>

        <ul>
            <li v-for="todo in todos" v-bind:key="todo.id">{{ }}
                <label>
                    <input class="finished" type="checkbox" v-model="todo.complete">
                    <span>&nbsp;</span>
                </label>
                <del v-if="todo.complete">{{ todo.body }}</del>
                <span v-else>{{ todo.body }}</span>
                <button @click="remove(todo.id)" class="btn btn-secondary">X</button>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'TodoList',
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters({
      newTodo: 'newTodo',
      todos: 'todos',
    })
  },
  methods: {
    getTodo (e) {
      this.$store.dispatch('getTodo', e.target.value)
    },
    addTodo () {
      this.$store.dispatch('addTodo')
      this.$store.dispatch('clearTodo')
    },
    remove (todo) {
      this.$store.dispatch('removeTodo', todo)
    },
	clearTodos(){
		this.todos = [];
	}
  }
}
</script>

<style lang="scss" scoped>
    @import '~bootstrap/scss/bootstrap';

    .TodoApp {
        background: skyblue;
        border-radius: 35px;
        padding: 5px;
        font-family: 'New Rocker', cursive;
    }

    ul {
        list-style: none;
    }

    li {
        margin: 10px;
    }

    button {
        margin: 6px;
    }
</style>
<template>
    <div class="TodoApp">
        <h2>Todo list</h2>
        <input class="newTodo" :value="newTodo" @change="getTodo" placeholder="Write and press enter..."
               v-on:keyup.enter="addTodo()">
        <button @click="clear(todo)" class="btn btn-primary">Clear list</button>
        <p v-if="todos.length>0">Current [{{todos.length}}]</p>
        <ul>
            <li v-for="todo in todos" v-bind:key="todo.id">{{ }}
                <label>
                    <input class="finished" type="checkbox" v-model="todo.complete">
                    <span>&nbsp;</span>
                </label>
                <del v-if="todo.complete">{{ todo.body }}</del>
                <span v-else>{{ todo.body }}</span>
                <button @click="remove(todo)" class="btn btn-secondary">X</button>
            </li>
        </ul>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        name: 'TodoList',
        data() {
            return {}
        },
        computed: {
            ...mapGetters({
                newTodo: 'newTodo',
                todos: 'todos',
            })
        },
        methods: {
            getTodo(e) {
                this.$store.dispatch('getTodo', e.target.value)
            },
            addTodo() {
                this.$store.dispatch('addTodo')
                this.$store.dispatch('clearTodo')
            },
            remove(todo) {
                this.$store.dispatch('removeTodo', todo)
            },
            clear(todo) {
                let i = 0
                while (i < this.todos.length) {
                    this.$store.dispatch('removeTodo', todo)
                }
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
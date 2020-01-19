<template>
    <div class="container">
        <br />
        <div class="TodoApp">
            <h2>Todo list</h2>
            <input v-model="Todo" placeholder="Write and press enter..." v-on:keyup.enter="addTodo" />
            <button @click="clearTodos()" class="btn btn-primary">Clear list</button>
            <ul>
                <li v-for="todo in todos" v-bind:key="todo.id">{{ }}
                    <label>
                        <input type="checkbox" v-model="todo.complete">
                        <span>&nbsp;</span>
                    </label>
                    <del v-if="todo.complete">{{ todo.text }}</del>
                    <span v-else>{{ todo.text }}</span>
                    <button @click="removeTodo(todo.id)" class="btn btn-secondary">X</button>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return{
                todos: [{text: 'Test', complete: false, id: Date.now()}]
            };
        },
        methods: {
            addTodo({target}){
                this.todos.push({text: target.value, complete: false, id: Date.now()})
                this.Todo = ''
            },
            removeTodo(id){
                this.todos = this.todos.filter(todo => todo.id !== id)
            },
            clearTodos(){
                this.todos = [];
            },
        }
    };
</script>

<style lang="scss" scoped>
@import '~bootstrap/scss/bootstrap';
    .TodoApp{
        background: skyblue;
        border-radius: 35px;
        padding: 5px;
        font-family: 'New Rocker', cursive;
    }
	ul{
        list-style: none;
    }
    li {
        margin: 10px;
    }
    button{
        margin: 6px;
	}
</style>
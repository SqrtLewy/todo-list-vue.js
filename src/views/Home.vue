<template>
    <div class="container">
        <br />
        <div class="app">
            <h2>Todo list</h2>
            <input v-model="Todo" placeholder="Write and press enter..." v-on:keyup.enter="addTodo" />
            <button @click="clearTodos()">Clear list</button>
            <ul>
                <li v-for="todo in todos" v-bind:key="todo.id">{{ }}
                    <label>
                        <input type="checkbox" v-model="todo.complete">
                        <span>&nbsp;</span>
                    </label>
                    <del v-if="todo.complete">{{ todo.text }}</del>
                    <span v-else>{{ todo.text }}</span>
                    <button @click="removeTodo(todo.id)">X</button>
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
            },
            removeTodo(id) {
                this.todos = this.todos.filter(todo => todo.id !== id)
            },
            clearTodos(){
               this.todos = [];
            },
        }
    };
</script>

<style lang="scss" scoped>
    .app{
        background: skyblue;
        border-radius: 35px;
        padding: 40px;
    }
    li {
        margin: 10px;
    }
    button{
        margin: 4px;
    }
	button:hover{
		color: blue;
	}
    ul{
        list-style: none;
    }
	h2{
		font-family: Verdana;
	}
</style>

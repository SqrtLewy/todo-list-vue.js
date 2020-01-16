<template>
<div class="container">
<div class="app">
<h2>Todo list</h2>
<input v-model="Todo" placeholder="What do you have to do?" />
<button>Add</button>
<button>Clear list</button>
<ul>
<li v-for="todo in todos" v-bind:key="todo.id">{{ todo }}
<label>
<input type="checkbox" v-model="todo.complete">
<span>&nbsp;</span>
</label>
<del v-if="todo.complete">{{ todo.text }}</del>
<span v-else>{{ todo.text }}</span>
</li>
</ul>
</div>
</div>
</template>
<script>
</script>
<style lang="scss" scoped>
</style>

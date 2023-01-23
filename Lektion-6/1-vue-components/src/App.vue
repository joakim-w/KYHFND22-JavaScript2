<template>
  <Header />

  <div class="container">
    <AddForm @add-todo="handleAdd" />
    <TodoList :todos="todos" @delete-todo="handleDeleteTodo" />
  </div>

</template>

<script setup>
import Header from './components/Header.vue'
import AddForm from './components/AddForm.vue'
import TodoList from './components/TodoList.vue'
import { ref } from 'vue';


const todos = ref([
  {id: 1, title: 'todo1', completed: false},
  {id: 2, title: 'todo2', completed: true},
])

const handleDeleteTodo = (id) => {
  todos.value = todos.value.filter(todo => todo.id !== id)
}

const handleAdd = (title) => {
  todos.value.push({ id: crypto.randomUUID(), title, completed: false })
}

</script>

<div>
  
</div>
  
  <style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.container {
  width: 80%;
  margin: 0 auto;
}
</style>






<!-- <div class="container">
  <p>nummer: {{ counter }}</p>
  <p>{{ text }}</p>

  <button @click="counter ++" >+</button>
  <button @click="decrement(5)">-</button>
</div> -->



<!-- <script>
import Header from './components/Header.vue'
  export default {
    components: { Header },

    data() {
      return {
        counter: 0,
        text: '<img src="" onerror="alert("haha")" />'
      }
    },

    methods: {
      decrement(value) {
        this.counter -= value
      }
    }
  }
</script> -->
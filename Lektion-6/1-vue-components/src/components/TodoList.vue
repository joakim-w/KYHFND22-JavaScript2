<template>
  <div class="todos">
    
    <!-- <div v-for="todo in todos">
      <p>{{ todo.title }}</p>
    </div> -->

    <TodoItem v-for="todo in todos" :key="todo.id" :todo="todo" @delete-todo="$emit('delete-todo', todo.id)" />

  </div>
</template>

<script setup>
import TodoItem from './TodoItem.vue'
defineProps(['todos'])
// import { ref } from 'vue';

// const todos = ref([
//   {id: 1, title: 'todo1', completed: false},
//   {id: 2, title: 'todo2', completed: true},
// ])

// const handleDeleteTodo = (id) => {
//   todos.value = todos.value.filter(todo => todo.id !== id)
// }

</script>

<style scoped>

</style>
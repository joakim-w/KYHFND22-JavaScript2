<template>
  <div class="todo">
    <p>{{ todo.title }}</p>
    <button @click="handleDelete">X</button>
  </div>
</template>

<script setup>
  const props = defineProps(['todo'])
  const emit = defineEmits(['delete-todo'])

  const handleDelete = () => {
    
    emit('delete-todo', props.todo.id)
  }
</script>

<style scoped>
  .todo {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #333;
    padding-block: 1rem;
  }
</style>
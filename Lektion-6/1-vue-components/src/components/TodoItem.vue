<template>
  <div class="todo">
    <p>{{ todo.title }}</p>
    <button>X</button>
  </div>
</template>

<script setup>
  defineProps(['todo'])
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
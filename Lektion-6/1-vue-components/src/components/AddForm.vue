<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" v-model="text" >
    <button>ADD</button>
  </form>
</template>

<script setup>
import { ref } from 'vue';
const emit = defineEmits(['add-todo'])

const text = ref('')


const handleSubmit = () => {
emit('add-todo', text.value)
text.value = ''
}

</script>

<style scoped>
  form {
    margin-top: 2rem;
    display: flex;
  }
  input {
    flex: 1;
    padding: .4em;
  }
  button {
    padding: 0 2em;
  }
</style>
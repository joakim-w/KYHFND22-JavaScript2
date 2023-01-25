<template>
  <div>
    <h2 v-bind:class="{ green: !available, red: available }">EN TEXT</h2>
    <h2 :class="available ? 'green' : 'red'" class="bg">EN TILL TEXT</h2>
    
    <button @click="available = !available">{{ available ? 'Not available' : 'Available' }}</button>

    <div v-if="available === true">
      <h4>rubrik</h4>
      <p>Lorem ipsum dolor sit amet.</p>
    </div>


  </div>
</template>

<script setup>
  import { ref } from 'vue'
  const available = ref(true)
</script>

<style scoped>
.bg {
  background-color: hotpink;
}
</style>